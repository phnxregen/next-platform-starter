import Link from 'next/link';

export default function Page() {
    return (
        <div className="bg-white text-slate-800">
            <HeroSection />
            <ProductSection />
            <FeaturesSection />
            <AboutSection />
            <ContactSection />
        </div>
    );
}

function HeroSection() {
    return (
        <section id="home" className="bg-gradient-to-b from-white to-slate-50">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                        Bible study with <span className="text-cyan-700">living margins</span>
                    </h1>
                    <p className="mt-4 text-lg text-slate-700">
                        Marginality helps you take structured, verse-linked margin entries, organize them into notebooks, and
                        view them in biblical or chronological order.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                        <Link
                            href="/#product"
                            className="rounded-xl bg-cyan-700 px-5 py-3 text-white shadow-sm transition hover:bg-cyan-600"
                        >
                            See the product
                        </Link>
                        <Link
                            href="/#contact"
                            className="rounded-xl border border-slate-200 px-5 py-3 text-slate-700 transition hover:bg-white/60"
                        >
                            Contact us
                        </Link>
                    </div>
                    <p className="mt-4 text-xs text-slate-500">Developed by Spark Digital LLC.</p>
                </div>
                <div className="relative">
                    <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-slate-200 text-slate-500 shadow-inner">
                        App screenshot goes here
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProductSection() {
    return (
        <section id="product" className="bg-white">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-slate-900">What is Marginality?</h2>
                    <p className="text-slate-700">
                        Marginality is a Bible note-taking experience designed around the way readers have always engaged Scripture
                        — at the margins. Each entry can be linked to one or many verses, grouped into notebooks, and browsed in
                        canonical (biblical) order or historical (chronological) order.
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-slate-700">
                        <li>
                            Verse-linked entries with clean, formatted references (e.g., <em>Genesis 1:1–2</em>).
                        </li>
                        <li>Organize with notebooks and tags; search by content or tag.</li>
                        <li>Two sorts: biblical order and historical chronology.</li>
                        <li>Side margin panel for focused reading and writing.</li>
                        <li>Import / export for study sharing (PDF and structured formats).</li>
                    </ul>
                    <p className="text-sm text-slate-500">
                        Mobile, desktop, and web experiences are under active development.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex h-40 items-center justify-center rounded-2xl bg-slate-100 text-sm text-slate-500"
                        >
                            Screenshot
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const features = [
    {
        title: 'Verse-linked margins',
        description:
            'Link entries to single verses or ranges; non-contiguous selections render cleanly (e.g., Lev 1:1–2, 6).'
    },
    {
        title: 'Notebooks & tags',
        description: 'Organize studies with notebooks; add pill-style tags with autocomplete for fast retrieval.'
    },
    {
        title: 'Biblical & chronological views',
        description: 'Browse entries either by canonical order or historical timeline of events.'
    },
    {
        title: 'Search & reference chips',
        description: 'Search verse text; jump buttons group references (e.g., Gen 1:1–3, Exod 1:1).'
    },
    {
        title: 'Import / Export',
        description: 'Export as PDF or a structured import format; bulk tag edits and notebook moves.'
    },
    {
        title: 'Studies (roadmap)',
        description: 'Integrations for text/video/audio-based Bible studies, mapped to verse ranges.'
    }
];

function FeaturesSection() {
    return (
        <section id="features" className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <h2 className="text-2xl font-semibold text-slate-900">Key features</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                        >
                            <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                            <p className="mt-2 text-sm text-slate-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section id="about" className="bg-white">
            <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 md:grid-cols-2">
                <div>
                    <h2 className="text-2xl font-semibold text-slate-900">About Spark Digital LLC</h2>
                    <p className="mt-4 text-slate-700">
                        Spark Digital LLC is the publisher and developer of Marginality. We build tools that help people engage
                        Scripture deeply—with clarity, order, and reverence.
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                        <li>Privately held U.S. company</li>
                        <li>Focus: Bible study software and research tools</li>
                        <li>
                            Contact:{' '}
                            <a href="mailto:phoenix@marginality.app" className="text-cyan-700 underline-offset-4">
                                phoenix@marginality.app
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                    <h3 className="font-semibold text-slate-900">Licensing & permissions</h3>
                    <p className="mt-2 text-sm text-slate-700">
                        We pursue appropriate permissions for biblical content and translations. For licensing inquiries, please reach
                        out below. Placeholder notices:
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-600">
                        <li>Scripture quotations (translation names and copyright) will be credited per publisher guidelines.</li>
                        <li>All trademarks are the property of their respective owners.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section id="contact" className="bg-slate-50">
            <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 md:grid-cols-2">
                <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
                    <p className="mt-4 text-slate-700">
                        For licensing, partnerships, or product questions, email us or use the form.
                    </p>
                    <div className="mt-6 space-y-1 text-sm text-slate-700">
                        <p>
                            <span className="font-medium">Email:</span>{' '}
                            <a className="text-cyan-700 underline-offset-4" href="mailto:phoenix@marginality.app">
                                phoenix@marginality.app
                            </a>
                        </p>
                        <p>
                            <span className="font-medium">Company:</span> Spark Digital LLC
                        </p>
                    </div>
                </div>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="grid gap-4">
                        <label className="text-sm text-slate-700">
                            Your name
                            <input
                                name="name"
                                required
                                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-100"
                            />
                        </label>
                        <label className="text-sm text-slate-700">
                            Email
                            <input
                                type="email"
                                name="email"
                                required
                                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-100"
                            />
                        </label>
                        <label className="text-sm text-slate-700">
                            Message
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-100"
                            ></textarea>
                        </label>
                        <button
                            className="rounded-xl bg-cyan-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-600"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
