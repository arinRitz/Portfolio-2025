'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard')
    }, 2000) // 2 seconds loading

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-8"></h1>
      <div className="w-full max-w-md bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="h-4 rounded-full animate-load"
          style={{ 
            width: '100%', 
            animationDuration: '2s', 
            backgroundColor: '#1376ac' 
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes load {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-load {
          animation-name: load;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </main>
  )
}
