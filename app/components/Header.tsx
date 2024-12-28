'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { InteractiveHoverButton } from './InteractiveHoverButton'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    window.scrollTo(0, 0)
    window.history.pushState(null, '', href)
  }

  return (
    <motion.header
      className="fixed w-full z-50 transition-all duration-300 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 mt-4 mb-6"> {/* Zwiększony margines dolny */}
        <nav className="bg-white rounded-full shadow-lg px-4 py-3 transition-all duration-300 flex items-center justify-between max-w-3xl mx-auto">
          {/* Logo */}
          <Link href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center">
            <div className="h-8 w-8 relative"> {/* Container for the logo image */}
              <Image
                src="/logo.svg" // You can replace this with your actual logo path
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="ml-2 text-xl font-bold text-[#872CAF]">Logo</span> {/* Optional text next to logo */}
          </Link>

          {/* Mobile menu button and "Darmowa wycena" button */}
          <div className="flex items-center md:hidden">
            <Link href="/kontakt" onClick={(e) => handleLinkClick(e, '/kontakt')}>
              <InteractiveHoverButton
                text="Darmowa wycena"
                className="bg-[#872CAF] text-white hover:text-white border-[#872CAF] mr-2"
              />
            </Link>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation items */}
          <ul className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                  <motion.div
                    className={`relative px-4 py-2 rounded-full text-sm transition-colors ${
                      pathname === item.href
                        ? 'text-[#872CAF]'
                        : 'text-gray-500 hover:text-[#872CAF]'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute inset-0 bg-purple-100 rounded-full -z-10"
                        layoutId="navbar-pill"
                        transition={{ type: 'spring', bounce: 0.2 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop "Darmowa wycena" button */}
          <AnimatePresence>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/kontakt" onClick={(e) => handleLinkClick(e, '/kontakt')}>
                <InteractiveHoverButton
                  text="Darmowa wycena"
                  className="bg-[#872CAF] text-white hover:text-white border-[#872CAF]"
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white mt-2 rounded-lg shadow-lg overflow-hidden"
            >
              <ul className="py-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                      <div
                        className={`px-4 py-2 ${
                          pathname === item.href
                            ? 'bg-purple-100 text-[#872CAF]'
                            : 'text-gray-500 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header

