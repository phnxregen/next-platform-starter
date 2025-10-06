export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-slate-100 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row">
                <p>© {year} Spark Digital LLC — All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="transition hover:text-primary no-underline">
                        Privacy
                    </a>
                    <a href="#" className="transition hover:text-primary no-underline">
                        Terms
                    </a>
                </div>
            </div>
        </footer>
    );
}
