// src/app/api/visitors/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI!

const client = new MongoClient(uri)
const dbName = 'dashboard'

export async function POST(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown'

  const userAgent = req.headers.get('user-agent') || 'unknown'
  const time = new Date().toISOString()

  try {
    await client.connect()
    const db = client.db(dbName)
    const visitors = db.collection('visitors')

    await visitors.insertOne({ ip, userAgent, time })
    return NextResponse.json({ message: 'Visitor logged' })
  } catch (error) {
    console.error('POST Error:', error)
    return NextResponse.json({ error: 'Failed to log visitor' }, { status: 500 })
  } finally {
    await client.close()
  }
}

export async function GET() {
  try {
    await client.connect()
    const db = client.db(dbName)
    const visitors = db.collection('visitors')

    const count = await visitors.countDocuments()
    return NextResponse.json({ count })
  } catch (error) {
    console.error('GET Error:', error)
    return NextResponse.json({ error: 'Failed to get count' }, { status: 500 })
  } finally {
    await client.close()
  }
}
