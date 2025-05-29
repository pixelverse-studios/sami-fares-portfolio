// components/AppNavbar.tsx
'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/navbar'
// import type { NavItem } from '@/lib/constants'

export default function AppNavbar({
  navItems,
  caseItems
}: {
  navItems: any
  caseItems: any
}) {
  const pathname = usePathname()
  const items = useMemo(
    () => (pathname === '/' ? navItems : caseItems),
    [pathname, navItems, caseItems]
  )

  return <Navbar items={items} />
}
