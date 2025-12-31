"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Political Journey", href: "/political-journey" },
    { name: "Programs", href: "/programs" },
    { name: "Achievements", href: "/achievements" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-[#0E1E2A]/95 backdrop-blur shadow-lg" : "bg-[#0E1E2A]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Brand */}
          <Link
            href="/"
            className="text-white font-extrabold text-lg tracking-tight"
          >
            K. <span className="text-[#C9A24D]">Atchannaidu</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    relative text-sm font-semibold transition-colors
                    ${active ? "text-[#C9A24D]" : "text-gray-200 hover:text-[#C9A24D]"}
                  `}
                >
                  {link.name}

                  {/* active underline */}
                  {active && (
                    <span
                      className="absolute left-0 -bottom-1 w-full h-[2px]
                        bg-gradient-to-r from-[#C9A24D] to-[#E6D19C]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setOpen(false)}
            />

            {/* right drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm
                bg-gradient-to-b from-[#0E1E2A] to-[#0B1723]
                z-50 shadow-[ -20px_0_60px_-20px_rgba(0,0,0,0.8)]"
            >
              {/* header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                <span className="text-white font-bold text-lg">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white"
                  aria-label="Close Menu"
                >
                  <X size={26} />
                </button>
              </div>

              {/* nav links */}
              <nav className="px-4 py-8 flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`
                          relative flex items-center px-4 py-3 rounded-lg
                          text-[15px] font-semibold transition-colors
                          ${active
                            ? "text-[#C9A24D] bg-white/5"
                            : "text-gray-200 hover:text-[#C9A24D]"}
                        `}
                      >
                        {/* active bar */}
                        {active && (
                          <span
                            className="absolute left-0 top-2 bottom-2 w-[3px]
                              bg-gradient-to-b from-[#C9A24D] to-[#E6D19C]"
                          />
                        )}

                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* footer accent */}
              <div className="absolute bottom-0 inset-x-0 h-[1px]
                bg-gradient-to-r from-transparent via-[#C9A24D]/60 to-transparent"
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
