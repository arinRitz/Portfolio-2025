import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI!
const client = new MongoClient(uri)
const dbName = 'dashboard'

export async function GET() {
  try {
    await client.connect()
    const db = client.db(dbName)
    const visitors = db.collection('visitors')

    const all = await visitors.find().sort({ time: -1 }).limit(100).toArray()
    return NextResponse.json({ visitors: all })
  } catch (error) {
    console.error('Fetch visitors error:', error)
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 })
  } finally {
    await client.close()
  }
}
