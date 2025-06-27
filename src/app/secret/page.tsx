'use client'

import { useEffect, useState } from 'react'

type Visitor = {
  ip: string
  userAgent: string
  time: string
}

export default function SecretDashboard() {
  const [visitors, setVisitors] = useState<Visitor[]>([])
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('q')
    if (query === 'ahsan1234321') {
      setAuthorized(true)
      fetchData()
    }
  }, [])

  const fetchData = async () => {
    const res = await fetch('/api/visitors/all')
    const data = await res.json()
    setVisitors(data.visitors)
  }

  if (!authorized) return <div className="p-6 text-red-500">Nothing Found</div>

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Visitor Logs</h1>
      <table className="w-full border-collapse border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2">#</th>
            <th className="border px-3 py-2">IP</th>
            <th className="border px-3 py-2">User Agent</th>
            <th className="border px-3 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((v, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border px-3 py-1">{i + 1}</td>
              <td className="border px-3 py-1">{v.ip}</td>
              <td className="border px-3 py-1">{v.userAgent.slice(0, 50)}...</td>
              <td className="border px-3 py-1">{new Date(v.time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
