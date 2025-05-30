'use client'

import { useMemo, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useSmoothScroll } from '@/lib/hooks/useSmoothScroll'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  id: string
}
interface NavProps {
  items: NavItem[]
}

export const Navbar = ({ items }: NavProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const { handleNavClick, scrollToPosition } = useSmoothScroll()

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const isHome = useMemo(() => pathname === '/', [pathname])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    handleNavClick(e, to, {
      behavior: 'smooth',
      block: 'start'
    })
    setOpen(false)
    setActive(to)
  }

  const handleLogoClick = () => {
    if (isHome) {
      scrollToPosition(0)
    } else {
      router.push('/')
    }

    setActive('')
    return setOpen(false)
  }

  return (
    <header className="bg-background fixed top-0 w-full">
      <div className="max-w-custom h-16 mx-auto flex items-center justify-between py-y-4 px-x-gap">
        <span
          onClick={handleLogoClick}
          className={cn('text-lg font-bold text-primary cursor-pointer')}>
          Sami Fares
        </span>

        <nav className={cn('hidden', isHome ? 'md:block' : 'lg:block')}>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {items.map(item => {
                if (item.id === 'home') return null
                return (
                  <NavigationMenuItem
                    className={cn(
                      'navLink',
                      active === item.id ? 'active-navLink' : ''
                    )}
                    key={item.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        key={item.id}
                        href={item.id}
                        onClick={e => handleClick(e, item.id)}>
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Navigation */}
        <div className={isHome ? 'md:hidden' : 'lg:hidden'}>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-primary">
                <FaBars />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="text-xl">
              <span
                onClick={handleLogoClick}
                className="cursor-pointer text-2xl font-bold text-primary">
                Sami Fares
              </span>
              <nav className="mt-6">
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col gap-4 items-start">
                    {items.map(item => {
                      if (item.id === 'home') return null
                      return (
                        <NavigationMenuItem className="navLink" key={item.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              key={item.id}
                              href={item.id}
                              onClick={e => handleClick(e, item.id)}>
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )
                    })}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
