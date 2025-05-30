'use client'

import { useMemo, useState, useEffect } from 'react'
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
import { ThemeToggle } from './themeToggle'

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
  const [activeSection, setActiveSection] = useState('')

  const isHome = useMemo(() => pathname === '/', [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for fixed header

      // Get all sections and their positions
      const sectionElements = items
        .map(item => ({
          id: item.id,
          element: document.getElementById(item.id)
        }))
        .filter(item => item.element)

      // Find which section we're currently in
      let currentSection = ''

      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i]
        const rect = section.element!.getBoundingClientRect()
        const sectionTop = window.scrollY + rect.top
        const sectionBottom = sectionTop + rect.height

        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id
          break
        }

        // If we're past all sections, highlight the last one
        if (i === sectionElements.length - 1 && scrollPosition >= sectionTop) {
          currentSection = section.id
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener with throttling
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll)
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [items, isHome, activeSection])

  // Handle manual navigation clicks
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    handleNavClick(e, to, {
      behavior: 'smooth',
      block: 'start'
    })
    setOpen(false)
    // Don't set active here - let the scroll spy handle it
  }

  const handleLogoClick = () => {
    if (isHome) {
      scrollToPosition(0)
      setActiveSection('home') // Set home as active when scrolling to top
    } else {
      router.push('/')
    }
    setOpen(false)
  }

  return (
    <header className="bg-background fixed top-0 w-full z-50">
      <div className="max-w-custom h-16 mx-auto flex items-center justify-between py-y-4 px-x-gap border-b border-b-primary">
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
                      activeSection === item.id ? 'active-navLink' : ''
                    )}
                    key={item.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={e => handleClick(e, item.id)}>
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
              <ThemeToggle />
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
                        <NavigationMenuItem
                          className={cn(
                            'navLink',
                            activeSection === item.id ? 'active-navLink' : ''
                          )}
                          key={item.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              key={item.id}
                              href={`#${item.id}`}
                              onClick={e => handleClick(e, item.id)}>
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )
                    })}
                    <ThemeToggle />
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
