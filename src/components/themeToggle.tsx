'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <div className="flex items-center space-x-3">
      <div
        className={cn(
          'relative w-16 h-8 rounded-full transition-all duration-300 flex items-center cursor-pointer',
          'bg-slate-600'
        )}
        onClick={() => setTheme(isDark ? 'light' : 'dark')}>
        <MdLightMode
          className={cn(
            'absolute left-2 h-3 w-3 transition-colors duration-300',
            !isDark ? 'text-text-body' : 'text-primary-light'
          )}
        />
        <MdDarkMode
          className={cn(
            'absolute right-2 h-3 w-3 transition-colors duration-300',
            isDark ? 'text-text-body' : 'text-primary-light'
          )}
        />
        <div
          className={cn(
            'w-7 h-7 rounded-full shadow-md transition-all duration-300 flex items-center justify-center',
            isDark
              ? 'bg-primary-light transform translate-x-8'
              : 'bg-primary-light transform translate-x-0'
          )}>
          {isDark ? (
            <MdDarkMode className="h-3 w-3 text-primary-dark" />
          ) : (
            <MdLightMode className="h-3 w-3 text-primary-dark" />
          )}
        </div>
      </div>
    </div>
  )
}
