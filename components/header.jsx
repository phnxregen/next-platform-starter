import Image from 'next/image';
import Link from 'next/link';

const navItems = [
    { label: 'Product', href: '/#product' },
    { label: 'Features', href: '/#features' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/#contact' }
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link href="/#home" className="flex items-center gap-3 no-underline" scroll>
                    <Image
                        src="/images/marginality_header.png"
                        alt="Marginality logo"
                        width={160}
                        height={30}
                        className="h-8 w-auto"
                        priority
                    />
                    <span className="font-semibold tracking-tight text-slate-900">Marginality</span>
                </Link>
                <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="transition hover:text-primary no-underline" scroll>
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <Link
                    href="/#contact"
                    className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/85 no-underline"
                    scroll
                >
                    Contact
                </Link>
            </div>
        </header>
    );
}
