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

export const Navbar: React.FC = () => (
  <header className="bg-background">
    <div className="max-w-custom h-16 mx-auto flex items-center justify-between py-y-4 px-x-gap">
      <Link href="/" className="text-lg font-bold text-primary">
        Sami Fares
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem className="navLink">
              <NavigationMenuLink asChild>
                <Link href="/work">Work</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="navLink">
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="navLink">
              <NavigationMenuLink asChild>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
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
            <Link href="/" className="text-2xl font-bold text-primary">
              Sami Fares
            </Link>
            <nav className="mt-6">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col gap-4 items-start">
                  <NavigationMenuItem className="navLink">
                    <NavigationMenuLink asChild>
                      <Link href="/work">Work</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="navLink">
                    <NavigationMenuLink asChild>
                      <Link href="/about">About</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="navLink">
                    <NavigationMenuLink asChild>
                      <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
)
