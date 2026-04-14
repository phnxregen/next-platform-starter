'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { label: 'Product', href: '/#product' },
    { label: 'Features', href: '/#features' },
    { label: 'About', href: '/about' },
    { label: 'Download', href: '/download/windows' }
];

const menuItems = [...navItems, { label: 'Contact', href: '/#contact' }];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header
            className={`sticky top-0 z-50 border-b backdrop-blur-2xl ${isHome ? 'mb-[-73px]' : ''}`}
            style={{
                background: isHome
                    ? 'linear-gradient(180deg, rgba(67, 72, 79, 0.42) 0%, rgba(43, 50, 55, 0.28) 100%)'
                    : 'rgba(35, 38, 44, 0.82)',
                borderColor: 'rgba(255,255,255,0.08)',
                backdropFilter: isHome ? 'blur(28px) saturate(180%)' : 'blur(24px)',
                boxShadow: isHome ? 'inset 0 1px rgba(255,255,255,0.08)' : 'none'
            }}
        >
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <div className="flex items-center justify-between py-4">
                    <Link href="/#home" className="flex items-center gap-3 no-underline" scroll>
                        <Image
                            src="/images/marginality_header.png"
                            alt="Marginality logo"
                            width={160}
                            height={30}
                            className="h-8 w-auto brightness-0 invert"
                            priority
                        />
                    </Link>
                    <nav
                        className="hidden items-center gap-7 text-sm font-medium md:flex"
                        style={{ color: 'rgba(255,255,255,0.76)' }}
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="no-underline transition hover:text-primary"
                                scroll
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white/6 shadow-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 md:hidden"
                            style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'white' }}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="flex flex-col gap-1.5">
                                <span className="block h-0.5 w-6 bg-white" />
                                <span className="block h-0.5 w-6 bg-white" />
                                <span className="block h-0.5 w-6 bg-white" />
                            </span>
                        </button>
                        <Link
                            href="/#contact"
                            className="hidden items-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-content shadow-sm transition hover:brightness-[1.02] no-underline md:inline-flex"
                            scroll
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="pb-3 md:hidden">
                        <nav
                            id="mobile-navigation"
                            className="flex flex-col overflow-hidden rounded-2xl border shadow-md"
                            style={{
                                borderColor: 'rgba(255,255,255,0.08)',
                                background: 'rgba(43, 50, 55, 0.98)'
                            }}
                        >
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-3 text-sm font-medium transition no-underline hover:bg-white/6"
                                    style={{ color: 'rgba(255,255,255,0.84)' }}
                                    onClick={closeMenu}
                                    scroll
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
