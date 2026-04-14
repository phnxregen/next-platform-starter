import Link from 'next/link';

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t bg-[var(--ink-deep)]" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/62 sm:flex-row md:px-8">
                <p>© {year} Spark Digital LLC — All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <Link href="/download/windows" className="transition hover:text-primary no-underline">
                        Windows Download
                    </Link>
                    <Link href="/privacy" className="transition hover:text-primary no-underline">
                        Privacy
                    </Link>
                    <a
                        href="mailto:support@marginality.app?subject=Marginality%20Terms%20Request"
                        className="transition hover:text-primary no-underline"
                    >
                        Terms
                    </a>
                </div>
            </div>
        </footer>
    );
}
