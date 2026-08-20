"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/unions", label: "Town unions" },
  { href: "/news", label: "News" },
] as const;

const moreNavigation = [
  { href: "/resources", label: "Resources" },
  { href: "/history", label: "History of NICAA" },
  { href: "/past-presidents", label: "Past Presidents" },
  { href: "/brochure", label: "2022 Brochure" },
  { href: "/ambassador", label: "Ambassador Archive" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  };

  const isMoreActive = moreNavigation.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      setIsMoreOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          className="site-brand"
          href="/"
          aria-label="Nigerian Community in Angola Association home"
          onClick={closeMenu}
        >
          {/* The public logo is delivered directly to avoid the remote image optimizer. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="site-brand-logo"
            src="/media/nicaa-logo.png"
            alt="Nigerian Community in Angola Association"
            width={300}
            height={96}
            fetchPriority="high"
          />
        </Link>

        <button
          ref={menuButtonRef}
          className={`site-menu-toggle${isMenuOpen ? " site-menu-toggle-open" : ""}`}
          type="button"
          aria-controls="site-primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={`${isMenuOpen ? "Close" : "Open"} the main menu`}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="site-menu-toggle-label">
            {isMenuOpen ? "Close" : "Menu"}
          </span>
          <span className="site-menu-toggle-icon" aria-hidden="true">
            <span className="site-menu-toggle-line" />
            <span className="site-menu-toggle-line" />
          </span>
        </button>

        <nav
          id="site-primary-navigation"
          className={`site-navigation${isMenuOpen ? " site-navigation-open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul className="site-navigation-list">
            {navigation.map((item) => (
              <li className="site-navigation-item" key={item.href}>
                <Link
                  className={`site-navigation-link${
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                      ? " site-navigation-link-active"
                      : ""
                  }`}
                  href={item.href}
                  aria-current={
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                      ? "page"
                      : undefined
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="site-navigation-item site-navigation-more">
              <details
                open={isMoreOpen}
                onToggle={(event) => setIsMoreOpen(event.currentTarget.open)}
              >
                <summary
                  className={`site-navigation-link site-navigation-more-trigger${
                    isMoreActive ? " site-navigation-link-active" : ""
                  }`}
                >
                  More <span aria-hidden="true">+</span>
                </summary>
                <ul className="site-navigation-more-menu" aria-label="More pages">
                  {moreNavigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        className={pathname === item.href ? "site-navigation-more-link site-navigation-more-link-active" : "site-navigation-more-link"}
                        href={item.href}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>

          <Link className="site-contact-cta" href="/contact" onClick={closeMenu}>
            Get in touch
            <span className="site-contact-cta-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
