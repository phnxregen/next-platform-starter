import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Marginality',
    description:
        'Read the Marginality privacy policy, including how Spark Digital LLC collects, uses, shares, and retains personal information.',
    alternates: {
        canonical: '/privacy'
    },
    openGraph: {
        title: 'Privacy Policy | Marginality',
        description:
            'Read the Marginality privacy policy, including how Spark Digital LLC collects, uses, shares, and retains personal information.',
        url: 'https://marginality.app/privacy',
        type: 'website'
    }
};

const informationWeCollect = [
    {
        title: 'Account information',
        items: ['Email address', 'Authentication identifiers', 'Account profile and role information']
    },
    {
        title: 'Content you create or submit',
        items: [
            'Notes, highlights, bookmarks, notebooks, and verse references',
            'Study content and synced reading data',
            'Transcriptions and related transcription metadata',
            'Feedback, support requests, and bug reports',
            'Community or public content you choose to publish'
        ]
    },
    {
        title: 'Audio and transcription data',
        items: [
            'Audio recordings captured through your device microphone when you use transcription features',
            'Transcripts generated from those recordings',
            'Verse matches, timestamps, and related transcription usage data'
        ]
    },
    {
        title: 'Payment and subscription information',
        items: [
            'Subscription status',
            'Purchase type',
            'Transaction or session identifiers',
            'Billing-related status metadata'
        ],
        note: 'We do not store your full payment card number.'
    },
    {
        title: 'Usage, device, and technical information',
        items: [
            'Device identifiers',
            'Session identifiers',
            'App configuration and diagnostic information',
            'Error logs and service usage information',
            'Local cache and preference data stored on your device'
        ]
    },
    {
        title: 'Bible content request data',
        items: [
            'When you use Bible-content features powered by third-party providers, those providers may receive request-related data such as device, session, or user identifiers as required to deliver content, measure usage, and satisfy licensing obligations.'
        ]
    }
];

const howWeUseInformation = [
    'Provide, operate, and maintain the Services',
    'Authenticate users and manage accounts',
    'Sync notes, notebooks, settings, and other user data across devices',
    'Process subscriptions, credits, and purchase-related workflows',
    'Enable transcription, indexing, and related study features',
    'Deliver Bible content and search functionality',
    'Support community, publishing, and discovery features',
    'Respond to support requests and feedback',
    'Monitor performance, security, and reliability',
    'Enforce our terms, prevent misuse, and comply with legal obligations'
];

const sharingSections = [
    {
        title: 'Service providers',
        body: 'We use service providers to operate parts of the Services, including Supabase for authentication, database, storage, and backend services; Stripe for payments and subscription-related processing; and API.Bible and related services for Bible content delivery and usage reporting. These providers process information on our behalf or according to their own terms and privacy policies.'
    },
    {
        title: 'Public or shared content',
        body: 'If you choose to publish content, follow creators, or otherwise use public or community features, certain information you submit may be visible to other users.'
    },
    {
        title: 'Legal and safety reasons',
        body: 'We may disclose information if required to do so by law or if we believe disclosure is reasonably necessary to comply with legal process, protect our rights or property, prevent fraud or abuse, or protect users or the public.'
    },
    {
        title: 'Business transfers',
        body: 'If we are involved in a merger, acquisition, financing, or sale of assets, information may be transferred as part of that transaction.'
    }
];

const yourChoices = [
    'Access personal information',
    'Correct inaccurate information',
    'Request deletion of your information',
    'Object to or restrict certain processing where applicable',
    'Withdraw consent where processing is based on consent'
];

const additionalChoices = [
    'Decline to create an account, though some features may not work',
    'Stop using microphone and transcription features',
    'Request account access or deletion by emailing support@marginality.app'
];

const thirdPartyServices = ['Supabase', 'Stripe', 'API.Bible'];

function PolicySection({ number, title, children }) {
    return (
        <section className="border-t py-10 sm:py-12" style={{ borderColor: 'var(--line)' }}>
            <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <div>
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.24em]"
                        style={{ color: 'rgba(43, 50, 55, 0.5)' }}
                    >
                        Section {number}
                    </p>
                    <h2 className="mt-3 text-2xl leading-tight text-[var(--ink-deep)] sm:text-3xl">{title}</h2>
                </div>
                <div className="min-w-0">{children}</div>
            </div>
        </section>
    );
}

function BulletList({ items }) {
    return (
        <ul className="space-y-3">
            {items.map((item) => (
                <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span style={{ color: 'rgba(43, 50, 55, 0.78)' }}>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export default function PrivacyPage() {
    return (
        <div className="bg-[var(--paper-bright)] text-[var(--ink)]">
            <section className="relative overflow-hidden bg-[var(--ink-deep)] text-white">
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(64rem 38rem at 0% 0%, rgba(224, 196, 101, 0.24), rgba(224, 196, 101, 0.08) 36%, rgba(224, 196, 101, 0) 68%), linear-gradient(180deg, #23262c 0%, #2b3237 52%, #23262c 100%)'
                    }}
                />
                <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/54">
                            Privacy Policy
                        </p>
                        <h1
                            className="mt-5 max-w-[12ch] text-5xl leading-none text-white sm:text-6xl"
                            style={{ fontFamily: '"Fraunces", Georgia, serif' }}
                        >
                            How Marginality handles personal information.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/74 sm:text-lg">
                            Effective April 14, 2026. This Privacy Policy explains what information Spark Digital LLC
                            collects through Marginality, how we use it, when we share it, and the choices available
                            to you.
                        </p>
                    </div>

                    <div
                        className="mt-10 grid gap-5 border-t pt-6 text-sm sm:grid-cols-3"
                        style={{ borderColor: 'rgba(255,255,255,0.12)' }}
                    >
                        <div>
                            <p className="font-semibold text-white">Operator</p>
                            <p className="mt-2 text-white/72">Spark Digital LLC</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Support</p>
                            <a href="mailto:support@marginality.app" className="mt-2 inline-block text-primary">
                                support@marginality.app
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Website</p>
                            <a
                                href="https://marginality.app/"
                                className="mt-2 inline-block text-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                marginality.app
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--paper-bright)]">
                <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
                    <div
                        className="rounded-[2rem] border bg-white/64 p-6 shadow-[0_24px_70px_-54px_rgba(35,38,44,0.55)] sm:p-8"
                        style={{ borderColor: 'var(--line)' }}
                    >
                        <p className="text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.8)' }}>
                            Marginality (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides the Marginality
                            website, applications, and related services (the &quot;Services&quot;). This policy applies
                            to information collected through the Services and related support or account interactions.
                        </p>

                        <PolicySection number="1" title="Information We Collect">
                            <div className="space-y-8">
                                {informationWeCollect.map((section) => (
                                    <div key={section.title}>
                                        <h3 className="text-lg font-semibold text-[var(--ink-deep)]">{section.title}</h3>
                                        <div className="mt-4">
                                            <BulletList items={section.items} />
                                        </div>
                                        {section.note ? (
                                            <p className="mt-4 text-sm leading-6" style={{ color: 'rgba(43, 50, 55, 0.68)' }}>
                                                {section.note}
                                            </p>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </PolicySection>

                        <PolicySection number="2" title="How We Use Information">
                            <BulletList items={howWeUseInformation} />
                        </PolicySection>

                        <PolicySection number="3" title="How We Share Information">
                            <div className="space-y-8">
                                {sharingSections.map((section) => (
                                    <div key={section.title}>
                                        <h3 className="text-lg font-semibold text-[var(--ink-deep)]">{section.title}</h3>
                                        <p className="mt-3 text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                            {section.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </PolicySection>

                        <PolicySection number="4" title="Local Storage and Device Data">
                            <p className="text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                Some information may be stored locally on your device, such as preferences, cached
                                content, notes, bookmarks, and other app data. Local storage helps the Services
                                function properly and improve performance.
                            </p>
                        </PolicySection>

                        <PolicySection number="5" title="Data Retention">
                            <p className="text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                We retain information for as long as reasonably necessary to provide the Services,
                                comply with legal obligations, resolve disputes, and enforce agreements. If you delete
                                your account, we will take reasonable steps to delete or de-identify account-linked data
                                we control, subject to legal, security, backup, fraud-prevention, or operational
                                retention needs.
                            </p>
                        </PolicySection>

                        <PolicySection number="6" title="Your Choices">
                            <p className="mb-5 text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                Depending on your location, you may have rights to:
                            </p>
                            <BulletList items={yourChoices} />
                            <p className="mb-5 mt-8 text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                You may also:
                            </p>
                            <BulletList items={additionalChoices} />
                        </PolicySection>

                        <PolicySection number="7" title="Third-Party Services">
                            <p className="mb-5 text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                The Services may rely on or link to third-party services. Their privacy practices are
                                governed by their own policies, not ours. We encourage you to review the privacy
                                policies of any third-party services you use with Marginality.
                            </p>
                            <BulletList items={thirdPartyServices} />
                        </PolicySection>

                        <PolicySection number="8" title="Children&apos;s Privacy">
                            <p className="text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                The Services are not directed to children under 13, and we do not knowingly collect
                                personal information from children under 13. If you believe a child has provided
                                personal information, contact us and we will investigate.
                            </p>
                        </PolicySection>

                        <PolicySection number="9" title="Security">
                            <p className="text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                We use reasonable administrative, technical, and organizational measures designed to
                                protect personal information. However, no method of transmission over the internet or
                                electronic storage is completely secure, and we cannot guarantee absolute security.
                            </p>
                        </PolicySection>

                        <PolicySection number="10" title="International Users">
                            <p className="text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                If you access the Services from outside your home jurisdiction, your information may be
                                processed and stored in countries where privacy laws may differ from those in your
                                jurisdiction.
                            </p>
                        </PolicySection>

                        <PolicySection number="11" title="Changes to This Privacy Policy">
                            <p className="text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                We may update this Privacy Policy from time to time. If we make material changes, we
                                will update the effective date above and may provide additional notice where
                                appropriate.
                            </p>
                        </PolicySection>

                        <PolicySection number="12" title="Contact Us">
                            <div className="space-y-3 text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                <p>If you have questions or requests about this Privacy Policy, contact:</p>
                                <p className="font-semibold text-[var(--ink-deep)]">Spark Digital LLC</p>
                                <p>
                                    <a href="mailto:support@marginality.app" className="text-primary">
                                        support@marginality.app
                                    </a>
                                </p>
                                <p>
                                    <a href="https://marginality.app/" className="text-primary" target="_blank" rel="noreferrer">
                                        https://marginality.app/
                                    </a>
                                </p>
                            </div>
                        </PolicySection>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <p style={{ color: 'rgba(43, 50, 55, 0.62)' }}>
                            Need account access or deletion help? Email support and include the address attached to
                            your Marginality account.
                        </p>
                        <Link href="/#contact" className="font-semibold text-[var(--ink-deep)]">
                            Return to the main site
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
