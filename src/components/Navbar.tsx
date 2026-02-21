"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/o-nas", label: "O Nas" },
  { href: "/gatunki-ryb", label: "Gatunki Ryb" },
  { href: "/oplaty", label: "Opłaty" },
  { href: "/galeria", label: "Galeria" },
  { href: "/regulamin", label: "Regulamin" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-accent/10 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="font-heading text-xl lg:text-2xl font-semibold text-accent group-hover:text-accent-light transition-colors tracking-wide">
              Wodna Kraina
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-foreground/60 hover:text-accent transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/oplaty"
              className="ml-3 px-5 py-2.5 bg-accent text-background font-semibold text-sm rounded-md hover:bg-accent-light transition-all"
            >
              Rezerwuj
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isMobileOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-accent/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block px-3 py-3 text-foreground/60 hover:text-accent rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/oplaty"
              onClick={() => setIsMobileOpen(false)}
              className="block mt-3 px-5 py-3 bg-accent text-background font-semibold text-center rounded-md"
            >
              Rezerwuj
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
