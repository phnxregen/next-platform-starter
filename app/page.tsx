import Image from 'next/image';
import Link from 'next/link';
import { HeroPreviewToggle } from '../components/hero-preview-toggle';

const productShots = [
    {
        src: '/images/verse_bank.png',
        width: 590,
        height: 484,
        alt: 'Verse bank entries grouped by reference'
    },
    {
        src: '/images/notebook_view.png',
        width: 1180,
        height: 1032,
        alt: 'Notebook view showing organized study entries'
    },
    {
        src: '/images/inline_buttons.png',
        width: 548,
        height: 382,
        alt: 'Inline scripture buttons inside a note'
    },
    {
        src: '/images/content.png',
        width: 763,
        height: 738,
        alt: 'Study content connected to Scripture'
    }
];

const features = [
    {
        title: 'Verse-linked notes',
        description:
            'Anchor your thoughts to Scripture. Notes stay tied to the verses they came from and remain easy to revisit while you read.'
    },
    {
        title: 'Notebooks',
        description:
            'Keep long-running studies organized in notebooks with search and structure that stay out of the way.'
    },
    {
        title: 'Verse references',
        description:
            'Add clean, clickable verse references inside your notes so you can move back into the text without losing context.'
    },
    {
        title: 'Additional study tools',
        description:
            'Extend your study beyond the page with tools for connecting sermons, videos, and referenced passages.'
    },
    {
        title: 'Flexible export',
        description: 'Your notes remain yours. Export as PDF or importable files whenever you need them.'
    }
];

function HeroSection() {
    return (
        <section id="home" className="relative overflow-hidden bg-[var(--ink-deep)] text-white">
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(72rem 44rem at -8% -10%, rgba(224, 196, 101, 0.22), rgba(224, 196, 101, 0.08) 34%, rgba(224, 196, 101, 0) 62%), radial-gradient(42rem 26rem at 78% 12%, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0) 68%), linear-gradient(180deg, #23262c 0%, #2b3237 52%, #23262c 100%)'
                }}
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-50"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 38%), linear-gradient(225deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 44%)'
                }}
            />
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: 'rgba(255,255,255,0.08)' }}
            />

            <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-[4.5rem] pt-24 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center lg:gap-10 lg:pb-24 lg:pt-28">
                <div className="max-w-2xl">
                    <div className="space-y-6">
                        <p className="text-lg font-medium" style={{ color: 'rgba(255,255,255,0.72)' }}>
                            Marginality
                        </p>
                        <h1
                            className="max-w-[10ch] text-5xl leading-none text-white sm:text-6xl lg:text-7xl"
                            style={{ fontFamily: '"Fraunces", Georgia, serif' }}
                        >
                            Bible study with room to think in the margins.
                        </h1>
                        <p
                            className="max-w-xl text-base leading-7 sm:text-lg"
                            style={{ color: 'rgba(255,255,255,0.76)' }}
                        >
                            Take verse-linked notes, organize them into notebooks, and move through your study without
                            losing context. Marginality is designed to feel close to the page, not layered on top of it.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/#product"
                            className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-content no-underline transition hover:brightness-[1.02]"
                        >
                            Explore the product
                        </Link>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-2xl border px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/8"
                            style={{
                                borderColor: 'rgba(255,255,255,0.18)',
                                background: 'rgba(255,255,255,0.04)'
                            }}
                        >
                            Contact us
                        </Link>
                    </div>

                    <div
                        className="mt-10 grid gap-5 border-t pt-6 sm:grid-cols-3"
                        style={{ borderColor: 'rgba(255,255,255,0.12)' }}
                    >
                        <div>
                            <p
                                className="text-xs font-semibold uppercase tracking-[0.22em]"
                                style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                                Built for
                            </p>
                            <p className="mt-2 text-sm leading-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
                                People whose goal is to grow in their understanding of Scripture.
                            </p>
                        </div>
                        <div>
                            <p
                                className="text-xs font-semibold uppercase tracking-[0.22em]"
                                style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                                Focus
                            </p>
                            <p className="mt-2 text-sm leading-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
                                Notes, organization, and cross-reference access that stay close to the page.
                            </p>
                        </div>
                        <div>
                            <p
                                className="text-xs font-semibold uppercase tracking-[0.22em]"
                                style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                                Availability
                            </p>
                            <p className="mt-2 text-sm leading-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
                                Mobile, desktop, and web experiences are currently being built and refined.
                            </p>
                        </div>
                    </div>
                </div>

                <HeroPreviewToggle />
            </div>
        </section>
    );
}

function ProductSection() {
    return (
        <section id="product" className="bg-[var(--paper)]">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-[4.5rem] md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
                <div className="max-w-xl">
                    <p
                        className="text-sm font-semibold uppercase tracking-[0.28em]"
                        style={{ color: 'rgba(43, 50, 55, 0.55)' }}
                    >
                        What It Is
                    </p>
                    <h2 className="mt-5 max-w-[12ch] text-4xl leading-tight text-[var(--ink-deep)]">
                        A note-taking system shaped around Scripture.
                    </h2>
                    <p className="mt-5 text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.76)' }}>
                        Keep reading, writing, and organizing in one place without turning study into a cluttered
                        workflow.
                    </p>

                    <div className="mt-8 space-y-4">
                        {[
                            'Verse-linked entries with clean, formatted references.',
                            'Notebook and tag organization for long-running studies.',
                            'Inline reference buttons that preserve context inside notes.',
                            'Export paths for sharing or moving your work when needed.'
                        ].map((item) => (
                            <div key={item} className="flex gap-3 border-t pt-4" style={{ borderColor: 'var(--line)' }}>
                                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                                <p className="text-sm leading-6" style={{ color: 'rgba(43, 50, 55, 0.76)' }}>
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {productShots.map((shot, index) => (
                        <div
                            key={shot.src}
                            className="overflow-hidden rounded-[1.75rem] border p-3 shadow-[0_24px_60px_-42px_rgba(35,38,44,0.55)]"
                            style={{
                                borderColor: 'var(--line)',
                                background: index % 2 === 0 ? 'rgba(241,243,246,0.86)' : 'rgba(233,237,243,0.92)'
                            }}
                        >
                            <Image
                                src={shot.src}
                                alt={shot.alt}
                                width={shot.width}
                                height={shot.height}
                                className="h-auto w-full rounded-[1.15rem] border border-black/5 object-contain"
                                sizes="(min-width: 768px) 320px, 45vw"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeaturesSection() {
    return (
        <section id="features" className="bg-[var(--ink-deep)] text-white">
            <div className="mx-auto max-w-6xl px-6 py-[4.5rem] md:px-8">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/50">Key Features</p>
                    <h2 className="mt-5 max-w-[12ch] text-4xl leading-tight text-white">Your Bible, your notes.</h2>
                    <p className="mt-5 text-base leading-7 text-white/70">
                        Notes, references, and study tools stay tied to Scripture instead of being scattered across
                        separate screens.
                    </p>
                </div>

                <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="border-t pt-5"
                            style={{ borderColor: 'rgba(255,255,255,0.12)' }}
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                                {String(index + 1).padStart(2, '0')}
                            </p>
                            <h3 className="mt-3 text-xl font-semibold text-white">{feature.title}</h3>
                            <p className="mt-3 max-w-xl text-sm leading-6 text-white/68">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section id="about" className="bg-[var(--paper-soft)]">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-[4.5rem] md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">
                <div>
                    <p
                        className="text-sm font-semibold uppercase tracking-[0.28em]"
                        style={{ color: 'rgba(43, 50, 55, 0.55)' }}
                    >
                        About
                    </p>
                    <h2 className="mt-5 text-4xl leading-tight text-[var(--ink-deep)]">
                        Built for deeper, organized study.
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.76)' }}>
                        Marginality is for readers who want a clearer way to return to passages, hold onto their
                        thoughts, and keep study ordered over time.
                    </p>
                </div>

                <div
                    className="rounded-[1.75rem] border p-6"
                    style={{
                        borderColor: 'var(--line)',
                        background: 'rgba(255,255,255,0.6)'
                    }}
                >
                    <h3 className="text-lg font-semibold text-[var(--ink-deep)]">Licensing and permissions</h3>
                    <p className="mt-3 text-sm leading-6" style={{ color: 'rgba(43, 50, 55, 0.74)' }}>
                        Biblical content, translation rights, and quotation notices are handled with attention to
                        publisher requirements and permissions.
                    </p>
                    <ul className="mt-5 space-y-3 text-sm leading-6" style={{ color: 'rgba(43, 50, 55, 0.74)' }}>
                        <li>Translation and copyright notices will be credited per publisher guidelines.</li>
                        <li>All trademarks remain the property of their respective owners.</li>
                        <li>Licensing questions can be directed through the contact form below.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section id="contact" className="bg-[var(--ink-deep)] text-white">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-[4.5rem] md:px-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
                <div className="max-w-xl">
                    <p
                        className="text-sm font-semibold uppercase tracking-[0.28em]"
                        style={{ color: 'rgba(255, 255, 255, 0.55)' }}
                    >
                        Contact
                    </p>
                    <h2 className="mt-5 max-w-[10ch] text-4xl leading-tight text-white">
                        Reach out about licensing, partnerships, or product questions.
                    </h2>
                    <p className="mt-5 text-base leading-7" style={{ color: 'rgba(255, 255, 255, 0.76)' }}>
                        If you are exploring licensing, publishing alignment, partnerships, or early access, use the
                        form and include whatever context would be helpful.
                    </p>

                    <div className="mt-8 space-y-3 text-sm" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                        <p>
                            <span className="font-semibold text-white">Email:</span>{' '}
                            <a href="mailto:contact@marginality.app" className="text-primary">
                                contact@marginality.app
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold text-white">Company:</span> Spark Digital LLC
                        </p>
                    </div>
                </div>

                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="rounded-[2rem] border p-6 shadow-[0_28px_70px_-48px_rgba(35,38,44,0.7)] sm:p-8"
                    style={{
                        borderColor: 'rgba(255,255,255,0.08)',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)'
                    }}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="grid gap-5">
                        <label className="text-sm text-white/80">
                            Your name
                            <input
                                name="name"
                                required
                                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm text-[var(--ink-deep)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/35"
                            />
                        </label>
                        <label className="text-sm text-white/80">
                            Email
                            <input
                                type="email"
                                name="email"
                                required
                                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm text-[var(--ink-deep)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/35"
                            />
                        </label>
                        <label className="text-sm text-white/80">
                            Message
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/95 px-4 py-3 text-sm text-[var(--ink-deep)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/35"
                            />
                        </label>
                        <button
                            className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-content transition hover:brightness-[1.02]"
                            type="submit"
                        >
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default function Page() {
    return (
        <div className="bg-[var(--paper-bright)] text-[var(--ink)]">
            <HeroSection />
            <ProductSection />
            <FeaturesSection />
            <AboutSection />
            <ContactSection />
        </div>
    );
}
