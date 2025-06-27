'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/components/ui/skeleton'
import { useTheme } from '@/context/ThemeContext'

export default function Home() {
  const router = useRouter()
  const { colors } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard')
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className={`h-screen flex flex-col items-center justify-center px-4 text-center ${colors.primary} ${colors.text}`}>
      {/* Avatar + Heading Skeleton */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Avatar Circle */}
        <Skeleton className={`w-32 h-32 rounded-full ${colors.secondary}`} />

        {/* Text block */}
        <div className="space-y-4 text-left">
          <Skeleton className={`h-8 w-48 ${colors.secondary}`} /> {/* Name */}
          <Skeleton className={`h-6 w-64 ${colors.secondary}`} /> {/* Role line 1 */}
          <Skeleton className={`h-6 w-60 ${colors.secondary}`} /> {/* Role line 2 */}
          <Skeleton className={`h-6 w-56 ${colors.secondary}`} /> {/* Role line 3 */}

          {/* Buttons Row */}
          <div className="flex gap-4 pt-2">
            <Skeleton className={`h-8 w-20 rounded-md ${colors.secondary}`} />
            <Skeleton className={`h-8 w-8 rounded-md ${colors.secondary}`} />
            <Skeleton className={`h-8 w-8 rounded-md ${colors.secondary}`} />
          </div>
        </div>
      </div>
    </main>
  )
}
