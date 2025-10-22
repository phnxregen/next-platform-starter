"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type HeroCSSVars = React.CSSProperties & {
    "--shot-h": string;
    "--shot-w": string;
    "--scale": string;
    "--content-scale": string;
};


export function HeroSection() {
    const shotRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!shotRef.current || !sectionRef.current) return;
        const section = sectionRef.current;
        const shot = shotRef.current;

        const update = () => {
        const rect = shot.getBoundingClientRect();
        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
        
        section.style.setProperty("--shot-h", `${rect.height}px`);
        section.style.setProperty("--shot-w", `${rect.width}px`);
        section.style.setProperty("--scale", `${rect.width / 520}`);
        
        // Calculate content scale based on breakpoint
        if (isDesktop) {
            // Desktop: scale based on available height vs reference height
            // Use a slightly smaller reference to ensure content fits with some padding
            const referenceHeight = 480; // Slightly smaller than 520px to add padding
            const contentScale = Math.min(rect.height / referenceHeight, 1.2); // Cap at 1.2x to prevent oversizing
            section.style.setProperty("--content-scale", `${contentScale}`);
        } else {
            // Mobile: scale based on width but ensure it doesn't get too small
            const contentScale = Math.max(rect.width / 520, 0.6); // Minimum 60% size
            section.style.setProperty("--content-scale", `${contentScale}`);
        }
        };

        const ro = new ResizeObserver(update);
        ro.observe(shot);
        update();
        return () => ro.disconnect();
    }, []);

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative overflow-hidden"
            style={{
                "--shot-h": "520px",
                "--shot-w": "520px",
                "--scale": "1",
                "--content-scale": "1",
            } as HeroCSSVars}
        >
        {/* Background */}
        <div className="absolute inset-0 z-0">
            <Image
            src="/images/scaledwebbackground.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom pointer-events-none select-none"
            />
        </div>

        {/* Veil */}
        <div aria-hidden="true" className="absolute inset-0 z-10 pointer-events-none md:bg-white/5" />

        {/* Main layout */}
        <div className="relative z-20 mx-auto max-w-6xl px-6 py-20 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-8 xl:gap-10">
            {/* TEXT RECTANGLE */}
            <div
            className="
                flex flex-col
                mx-auto lg:mx-0
                w-full
                lg:w-[450px]
                lg:h-[var(--shot-h)]
                lg:overflow-hidden
                pt-2 lg:pt-0
            "
            style={{ 
                gap: "calc(1.5rem * var(--content-scale))",
                maxWidth: "min(100%, var(--shot-w))",
                width: "min(100%, var(--shot-w))"
            }}
            >
            {/* Title */}
            <h1
                className="
                font-black text-slate-900 leading-[1.05] tracking-tight
                text-left
                text-[calc(60px*var(--content-scale))] lg:text-[calc(55.1876px*var(--content-scale))]
                "
                style={{ fontFamily: '"Arial Black", Arial, Helvetica, sans-serif' }}
            >
                Bible<br />
                notes<br />
                with <span className="[color:#d5769b]">Living</span><br />
                <span className="[color:#d5769b] inline-block ml-0 lg:ml-[calc(8.965rem*var(--content-scale))]">Margins</span>
            </h1>

            {/* Body paragraph with fixed line breaks */}
            <p
                className="
                text-center lg:text-left text-slate-700 leading-snug
                text-[calc(21.1px*var(--content-scale))] lg:text-[calc(28px*var(--content-scale))]
                "
                style={{
                marginTop: "calc(1.5rem * var(--content-scale))",
                fontFamily:
                    '"Futura Condensed Medium", Futura, "Futura PT", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
                }}
            >
                Marginality helps you take<br />
                structured, verse-linked note<br />
                entries, organize them into<br />
                notebooks, and view and<br />
                manage them how you need.
            </p>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-3" style={{ marginTop: "calc(1rem * var(--content-scale))" }}>
                <Link
                href="/#product"
                className="rounded-xl bg-primary px-5 py-3 text-white shadow-sm transition hover:bg-primary/85
                            text-[calc(16px*var(--content-scale))] lg:text-[calc(16px*var(--content-scale))]"
                >
                Get the app
                </Link>
                <Link
                href="/#contact"
                className="rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-slate-700 transition hover:bg-white
                            text-[calc(16px*var(--content-scale))] lg:text-[calc(16px*var(--content-scale))]"
                >
                Contact us
                </Link>
            </div>

            {/* Footer credit */}
            <p className="text-center lg:text-left text-slate-500 text-[calc(12px*var(--content-scale))] lg:text-[calc(12px*var(--content-scale))]" style={{ marginTop: "calc(1.5rem * var(--content-scale))" }}>
                Developed by Spark Digital LLC.
            </p>
            </div>

            {/* SCREENSHOT */}
            <div
            ref={shotRef}
            className="mx-auto flex w-full justify-center lg:mx-0 lg:w-[520px]"
            style={{ maxWidth: "min(100%, var(--shot-w))" }}
            >
            <Image
                src="/images/SWLightBibleSS.png"
                alt="Marginality app screenshot"
                width={1948}
                height={1896}
                sizes="(min-width: 1024px) 520px, 100vw"
                className="w-full max-w-xl lg:max-w-none lg:w-[520px] rounded-2xl border border-slate-200 shadow-xl"
                style={{ filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.35))" }}
                priority
            />
            </div>
        </div>
        </section>
    );
}

/* -------------------- PRODUCT -------------------- */
function ProductSection() {
    const productShots = [
        {
            src: "/images/verse_bank.png",
            width: 590,
            height: 484,
            alt: "Verse bank entries grouped by reference",
        },
        {
            src: "/images/notebook_view.png",
            width: 1180,
            height: 1032,
            alt: "Notebook view showing organized study entries",
        },
        {
            src: "/images/inline_buttons.png",
            width: 548,
            height: 382,
            alt: "Inline scripture buttons inside a note",
        },
        {
            src: "/images/export.png",
            width: 1174,
            height: 1014,
            alt: "Export options for sharing studies",
        },
    ];

    return (
        <section id="product" className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2">
            <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">What is Marginality?</h2>
            <p className="text-slate-700">
                Marginality is a Bible note-taking experience designed around the way readers have always engaged
                Scripture — at the margins. Each entry can be linked to one or many verses, grouped into notebooks,
                and searched through.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
                <li>
                Verse-linked entries with clean, formatted references (e.g., <em>Genesis 1:1–2</em>).
                </li>
                <li>Organize with notebooks and tags; search by content or tag.</li>
                <li>Inline verse referencing: recognized typed verses will turn into buttons.</li>
                <li>Side margin panel for focused reading and writing.</li>
                <li>Import / export for study sharing (PDF and structured formats).</li>
            </ul>
            <p className="text-sm text-slate-500">Mobile, desktop, and web experiences are under active development.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
            {productShots.map((shot) => (
                <div key={shot.src} className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    className="h-auto w-full rounded-xl object-contain"
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

/* -------------------- FEATURES -------------------- */
const features = [
    {
        title: "Verse-linked margins",
        description:
        "Link entries to single verses or ranges; non-contiguous selections render cleanly (e.g., Lev 1:1–2, 6).",
    },
    { title: "Notebooks & tags", description: "Organize studies with notebooks; add pill-style tags with autocomplete for fast retrieval." },
    { title: "Biblical & chronological views", description: "Browse entries either by canonical order or historical timeline of events." },
    {
        title: "Search & reference chips",
        description:
        "Search verse text; inline verse reference buttons recognize Scripture inside notes, show the note alongside its verses, and take you straight to the passage when clicked.",
    },
    { title: "Import / Export", description: "Export as PDF or a structured import format; bulk tag edits and notebook moves." },
    { title: "Studies (roadmap)", description: "Integrations for text/video/audio-based Bible studies, mapped to verse ranges." },
];

function FeaturesSection() {
    return (
        <section id="features" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-2xl font-semibold text-slate-900">Key features</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{feature.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

/* -------------------- ABOUT -------------------- */
function AboutSection() {
    return (
        <section id="about" className="bg-white">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 md:grid-cols-2">
            <div>
            <h2 className="text-2xl font-semibold text-slate-900">About Spark Digital LLC</h2>
            <p className="mt-4 text-slate-700">
                Spark Digital LLC is the publisher and developer of Marginality. Our aim with Marginality is build tools that help people engage
                Scripture deeply—with clarity, order, and reverence.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                <li>Privately held U.S. company</li>
                <li>Focus: Bible study software and research tools</li>
                <li>
                Contact:{" "}
                <a href="mailto:phoenix@marginality.app" className="text-primary underline-offset-4">
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

/* -------------------- CONTACT -------------------- */
function ContactSection() {
    return (
        <section id="contact" className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 md:grid-cols-2">
            <div>
            <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
            <p className="mt-4 text-slate-700">For licensing, partnerships, or product questions, email us or use the form.</p>
            <div className="mt-6 space-y-1 text-sm text-slate-700">
                <p>
                <span className="font-medium">Email:</span>{" "}
                <a className="text-primary underline-offset-4" href="mailto:phoenix@marginality.app">
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
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#e4cdd5]"
                />
                </label>
                <label className="text-sm text-slate-700">
                Email
                <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#e4cdd5]"
                />
                </label>
                <label className="text-sm text-slate-700">
                Message
                <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#e4cdd5]"
                />
                </label>
                <button
                className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/85"
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

/* -------------------- PAGE (single default export) -------------------- */
function Page() {
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

export default Page;
