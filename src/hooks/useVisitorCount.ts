// /hooks/useVisitorCount.ts
import { useEffect, useState } from 'react'

export default function useVisitorCount() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const logAndFetch = async () => {
      try {
        await fetch('/api/visitors', { method: 'POST' })

        const res = await fetch('/api/visitors')
        const data = await res.json()
        setCount(data.count)
      } catch (err) {
        console.error('Visitor log error:', err)
      }
    }

    logAndFetch()
  }, [])

  return count
}
