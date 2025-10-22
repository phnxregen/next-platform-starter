export const metadata = {
    title: 'About Marginality | Marginality',
    description:
        'Learn more about Marginality and our mission to help readers study Scripture with clarity and reverence.'
};

const values = [
    {
        title: 'Scripture-first product design',
        description:
            'We\'ve built a tool that respects the integrity of the biblical text, helping readers link notes, questions, and insights to the Living Word.'
    },
    {
        title: 'Crafted for clarity and order',
        description:
            'Marginality was shaped by pastors, researchers, and designers who care about structured study, storage, and retrieval.'
    },
    {
        title: 'Community collaboration',
        description:
            'Church is community. Features on our roadmap are thought out with churches, small groups, and individuals in mind.'
    }
];

export default function AboutPage() {
    return (
        <div className="bg-white text-slate-800">
            <section className="bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About</p>
                    <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                        Marginality doesn’t build your faith— it just helps you put the pieces together
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-700">
                        Marginality supports thoughtful, ordered Bible study. The app gives readers a space
                        to preserve insights in the margins, connect them to Scripture, and revisit them with contextual awareness. We
                        design every feature to be reverent, reliable, and ready for teams as well as individuals.
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900">Who we are</h2>
                        <p className="text-slate-700">
                            Marginality is a project created and maintained by Spark Digital LLC. We focus on Bible study software,
                            archival research tooling, and digital publishing support so we can collaborate with pastors, scholars, and
                            readers who want to treat Scripture with precision and care.
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

            <section className="bg-white">
                <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16 text-center">
                    <h2 className="text-2xl font-semibold text-slate-900">What comes next</h2>
                    <p className="text-slate-700">
                        We are preparing collaborative notebooks, in-app communities, online study features, reading plans, and translation
                        licensing. Join the interest list or connect with us directly to share how your community studies Scripture.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="mailto:phoenix@marginality.app"
                            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/85"
                        >
                            Email Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
