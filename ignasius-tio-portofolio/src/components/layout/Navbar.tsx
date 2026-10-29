
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter((section): section is Element => section !== null)

      let current = 'home'

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 160) {
          current = section.id
        }
      }

      setActiveSection(current)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-white/10 bg-[#111312]/90 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'border-transparent bg-[#111312]/50 backdrop-blur-md'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="group relative z-10 text-sm font-bold tracking-[0.12em] text-white"
        >
          IGNASIUS TIO
          <span className="text-[#b7f36b]">.</span>
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b7f36b] transition-all duration-300 group-hover:w-full" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = activeSection === item.href.slice(1)

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? 'location' : undefined}
                className={`relative py-2 text-xs font-medium transition-colors ${
                  active
                    ? 'text-[#b7f36b]'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {item.label}

                {active && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 380, damping: 30 }
                    }
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#b7f36b]"
                  />
                )}
              </a>
            )
          })}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-[#b7f36b]/40 px-4 py-2.5 text-xs font-semibold text-[#b7f36b] transition-colors hover:bg-[#b7f36b] hover:text-[#111312] md:inline-flex"
        >
          Let&apos;s talk
          <ArrowUpRight size={14} />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white hover:border-[#b7f36b]/50 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="absolute inset-x-0 top-full border-b border-white/10 bg-[#111312]/98 px-6 pb-8 pt-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl">
              {navItems.map((item, index) => {
                const active = activeSection === item.href.slice(1)

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.045 }}
                    className={`flex items-center justify-between border-b border-white/[0.07] py-4 text-lg ${
                      active ? 'text-[#b7f36b]' : 'text-white/70'
                    }`}
                  >
                    {item.label}
                    <span className="text-xs text-white/30">
                      0{index + 1}
                    </span>
                  </motion.a>
                )
              })}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-6 flex items-center justify-between rounded-xl bg-[#b7f36b] px-5 py-4 text-sm font-semibold text-[#111312]"
              >
                Let&apos;s work together
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
