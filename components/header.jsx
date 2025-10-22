'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { label: 'Product', href: '/#product' },
    { label: 'Features', href: '/#features' },
    { label: 'About', href: '/about' }
];

const menuItems = [...navItems, { label: 'Contact', href: '/#contact' }];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex items-center justify-between py-3">
                    <Link href="/#home" className="flex items-center gap-3 no-underline" scroll>
                        <Image
                            src="/images/marginality_header.png"
                            alt="Marginality logo"
                            width={160}
                            height={30}
                            className="h-8 w-auto"
                            priority
                        />
                    </Link>
                    <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="transition hover:text-primary no-underline" scroll>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 md:hidden"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="flex flex-col gap-1.5">
                                <span className="block h-0.5 w-6 bg-slate-900" />
                                <span className="block h-0.5 w-6 bg-slate-900" />
                                <span className="block h-0.5 w-6 bg-slate-900" />
                            </span>
                        </button>
                        <Link
                            href="/#contact"
                            className="hidden items-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/85 no-underline md:inline-flex"
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
                            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md"
                        >
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 no-underline"
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
