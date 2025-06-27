
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const NavLink = ({ 
  href, 
  label, 
  pathname, 
  className, 
  onClick 
}: { 
  href: string; 
  label: string; 
  pathname: string | null; 
  className?: string; 
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className={cn(
      "transition-colors hover:bg-accent hover:text-accent-foreground",
      pathname === href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground',
      className
    )}
    onClick={onClick}
  >
    {label}
  </Link>
);


export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">Abox</span>
        </Link>
        
        <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
                {navItems.map(item => (
                  <NavLink 
                    key={item.href} 
                    {...item} 
                    pathname={pathname}
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  />
                ))}
            </nav>
            <Button asChild className="hidden md:flex">
                <Link href="/contact">Get a Quote</Link>
            </Button>
            {/* Mobile Navigation Trigger */}
            <div className="md:hidden">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-4 border-b">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="font-bold text-xl">Abox</span>
                            </Link>
                            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </div>
                    <nav className="flex flex-col gap-2 p-4">
                        {navItems.map(item => (
                          <NavLink 
                            key={item.href} 
                            {...item} 
                            pathname={pathname}
                            className="block rounded-md px-3 py-2 text-base font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                          />
                        ))}
                    </nav>
                    <div className="mt-auto p-4 border-t">
                        <Button asChild className="w-full">
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
                        </Button>
                    </div>
                    </div>
                </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
