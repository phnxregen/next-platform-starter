import Link from 'next/link';

export const metadata = {
    title: 'About Spark Digital LLC | Marginality',
    description:
        'Learn more about Spark Digital LLC, the team behind Marginality, and our mission to help readers study Scripture with clarity and reverence.'
};

const values = [
    {
        title: 'Scripture-first product design',
        description:
            'We build tools that respect the integrity of the biblical text, helping readers link notes, questions, and insights to what they are reading.'
    },
    {
        title: 'Crafted for clarity and order',
        description:
            'Marginality is shaped by pastors, researchers, and designers who care about structured study, archival precision, and effortless retrieval.'
    },
    {
        title: 'Community collaboration',
        description:
            'Features on our roadmap are fueled by study groups, churches, and individuals who want to share discoveries without losing attribution.'
    }
];

const timeline = [
    {
        year: '2022',
        label: 'Concept & research',
        detail: 'Spark Digital LLC begins prototyping margin-linked note workflows informed by pastors, academics, and lay readers.'
    },
    {
        year: '2023',
        label: 'Foundational release',
        detail: 'Core margin entries, verse linking, chronological ordering, and notebook organization reach private beta testers.'
    },
    {
        year: '2024',
        label: 'Collaboration roadmap',
        detail: 'Import/export tooling, shared studies, and licensing pathways expand to serve churches and small groups.'
    }
];

export default function AboutPage() {
    return (
        <div className="bg-white text-slate-800">
            <section className="bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About</p>
                    <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                        Spark Digital LLC builds tools for thoughtful, ordered Bible study
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-700">
                        Marginality is our flagship application—a space where readers preserve insights in the margins, connect them
                        to Scripture, and revisit them with historical awareness. We design every feature to be reverent, reliable,
                        and ready for teams as well as individuals.
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">Who we are</h2>
                        <p className="text-slate-700">
                            Spark Digital LLC is a privately held company focused on Bible study software, archival research tooling,
                            and digital publishing support. We collaborate with pastors, scholars, and readers who want to treat
                            Scripture with precision and care.
                        </p>
                        <p className="text-slate-700">
                            Our distributed team spans theological backgrounds and technical disciplines, united by the desire to make
                            structured, searchable, and shareable study notes accessible whether you are on a tablet, laptop, or phone.
                        </p>
                        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                            <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
                            <p className="mt-2 text-sm text-slate-700">
                                For licensing, partnerships, or press inquiries, reach out to
                                <a
                                    className="ml-1 text-primary underline-offset-4"
                                    href="mailto:phoenix@marginality.app"
                                >
                                    phoenix@marginality.app
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-slate-900">Our values</h3>
                        <div className="space-y-4">
                            {values.map((value) => (
                                <div key={value.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                                    <h4 className="font-semibold text-slate-900">{value.title}</h4>
                                    <p className="mt-2 text-sm text-slate-700">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50">
                <div className="mx-auto max-w-5xl px-4 py-16">
                    <h2 className="text-2xl font-semibold text-slate-900">Milestones</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {timeline.map((entry) => (
                            <div key={entry.year} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                                <p className="text-sm font-semibold uppercase tracking-wide text-primary">{entry.year}</p>
                                <h3 className="mt-2 text-lg font-semibold text-slate-900">{entry.label}</h3>
                                <p className="mt-2 text-sm text-slate-700">{entry.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16 text-center">
                    <h2 className="text-2xl font-semibold text-slate-900">What comes next</h2>
                    <p className="text-slate-700">
                        We are preparing a public release with collaborative notebooks, structured study templates, and translation
                        licensing. Join the interest list or connect with us directly to share how your community studies Scripture.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="mailto:phoenix@marginality.app"
                            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/85"
                        >
                            Email the team
                        </a>
                        <Link
                            href="/#contact"
                            className="rounded-xl border border-slate-200 px-5 py-3 text-sm text-slate-700 transition hover:bg-slate-50"
                        >
                            Back to contact form
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
