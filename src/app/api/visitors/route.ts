import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB)
    const collection = db.collection('visitors')

    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    const userAgent = req.headers.get('user-agent') || 'unknown'
    const timestamp = new Date().toISOString()

    await collection.insertOne({ ip, userAgent, timestamp })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Mongo POST error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB)
    const collection = db.collection('visitors')

    const visitors = await collection.find().sort({ timestamp: -1 }).limit(100).toArray()
    const count = await collection.countDocuments()

    return NextResponse.json({ count, visitors })
  } catch (error) {
    console.error('Mongo GET error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
