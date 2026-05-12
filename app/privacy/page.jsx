export const metadata = {
    title: 'Privacy Policy | Marginality',
    description: 'Privacy Policy for Marginality, published by Spark Digital LLC.',
    alternates: {
        canonical: '/privacy'
    },
    openGraph: {
        title: 'Privacy Policy | Marginality',
        description: 'Privacy Policy for Marginality, published by Spark Digital LLC.',
        url: 'https://marginality.app/privacy',
        type: 'website'
    }
};

const sections = [
    {
        title: '1. What Marginality Does',
        body: [
            'Marginality is a Bible study app that supports Bible reading, notes, notebooks, highlights, bookmarks, written-note scanning, personal study content workflows, and account-backed sync.'
        ]
    },
    {
        title: '2. Information We Collect',
        body: ['We may collect the following categories of information:'],
        list: [
            {
                label: 'Account information',
                text: 'your email address, authentication identifiers, and basic profile data needed to sign you in and keep your account active.'
            },
            {
                label: 'User content',
                text: 'notes, notebooks, bookmarks, highlights, study metadata, imported files, scan-related content, feedback submissions, and other content you choose to create, upload, or sync through the app.'
            },
            {
                label: 'Purchase and subscription information',
                text: 'subscription status, purchase references, and transaction-related metadata. Payments may be processed by third parties such as Apple, Google, or Stripe. We do not store your full payment card number in the app.'
            },
            {
                label: 'Device and technical information',
                text: 'app version, platform, device type, crash or error details, IP address, and similar operational data needed to secure and maintain the service.'
            },
            {
                label: 'Support and tester communications',
                text: 'messages, attachments, and diagnostic context you submit when you send feedback or contact us.'
            }
        ]
    },
    {
        title: '3. Camera, Photos, and Files',
        body: [
            'Marginality may request access to your camera, photos, or files when you choose features such as scanning handwritten notes, importing images, or attaching files to feedback or study workflows.'
        ],
        list: [
            {
                text: 'We do not use the camera in the background.'
            },
            {
                text: 'Camera access is only used when you intentionally start a scan or capture flow.'
            },
            {
                text: 'Images and files you choose to provide are used to create, support, process, or sync the content you ask the app to handle.'
            }
        ]
    },
    {
        title: '4. How We Use Information',
        body: ['We use information we collect to:'],
        list: [
            {
                text: 'provide, operate, and secure the Marginality app and related services;'
            },
            {
                text: 'authenticate users and sync notes, notebooks, highlights, bookmarks, and related content;'
            },
            {
                text: 'process written-note scans, personal study content workflows, and other user-initiated actions;'
            },
            {
                text: 'manage subscriptions, billing status, and access to paid features;'
            },
            {
                text: 'respond to support requests, tester feedback, and product inquiries;'
            },
            {
                text: 'monitor reliability, troubleshoot issues, and improve product quality.'
            }
        ]
    },
    {
        title: '5. When We Share Information',
        body: ['We do not sell your personal information. We may share information in the following cases:'],
        list: [
            {
                label: 'Service providers',
                text: 'with vendors that help us operate the service, such as hosted infrastructure, authentication, storage, database, or payment providers.'
            },
            {
                label: 'Platform providers',
                text: 'with Apple, Google, Microsoft, or other distribution and platform services when needed to deliver, validate, or manage the app.'
            },
            {
                label: 'Legal or safety reasons',
                text: 'if required to comply with law, enforce our rights, or protect users, our services, or the public.'
            },
            {
                label: 'Business transfer',
                text: 'if Spark Digital LLC is involved in a merger, acquisition, financing, or asset transfer.'
            }
        ]
    },
    {
        title: '6. Third-Party Services',
        body: ['Marginality may rely on third-party services to support app functionality, including:'],
        list: [
            {
                text: 'Supabase for authentication, database, storage, and backend functions;'
            },
            {
                text: 'Stripe and platform payment providers for subscription and checkout flows;'
            },
            {
                text: 'licensed Bible content and related platform integrations where configured;'
            },
            {
                text: 'video or study-content integrations when you submit external content, such as YouTube links.'
            }
        ],
        after: [
            'Those providers may process data under their own terms and privacy policies in addition to this one.'
        ]
    },
    {
        title: '7. Data Retention',
        body: [
            'We retain information for as long as needed to provide the service, maintain your account, comply with legal obligations, resolve disputes, and enforce agreements. If you remove content from the app or request account deletion, some data may remain in backups, logs, or legal records for a limited period where necessary.'
        ]
    },
    {
        title: '8. Your Choices and Requests',
        body: ['You may be able to:'],
        list: [
            {
                text: 'choose whether to create an account and sync content;'
            },
            {
                text: 'decline optional permissions such as camera access, though some features may not work without them;'
            },
            {
                text: 'edit or remove certain content inside the app;'
            },
            {
                text: 'contact us to request access, correction, or deletion of account-related personal data.'
            }
        ],
        note:
            'To make a privacy request, email contact@marginality.app. We may need to verify your identity before completing a request.'
    },
    {
        title: '9. Security',
        body: [
            'We use reasonable administrative, technical, and organizational measures to protect information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.'
        ]
    },
    {
        title: "10. Children's Privacy",
        body: [
            'Marginality is not directed to children under 13, and we do not knowingly collect personal information from children under 13 without appropriate authorization. If you believe a child has provided us personal information, contact us and we will review the request.'
        ]
    },
    {
        title: '11. Changes to This Policy',
        body: [
            'We may update this Privacy Policy from time to time. When we do, we will update the effective date above. Material changes may also be communicated through the app, website, or other appropriate channels.'
        ]
    },
    {
        title: '12. Contact Us',
        body: ['If you have questions about this Privacy Policy or Marginality\'s privacy practices, contact:'],
        contact: true
    }
];

function PolicySection({ section }) {
    return (
        <section
            className="mt-6 rounded-[1.25rem] border p-6 sm:mt-8 sm:p-7"
            style={{
                background: 'rgba(255, 253, 248, 0.82)',
                borderColor: 'rgba(219, 205, 184, 0.9)'
            }}
        >
            <h2 className="text-[1.45rem] font-semibold leading-tight text-[#1f140d]">{section.title}</h2>

            <div className="mt-4 space-y-4 text-[1.02rem] leading-7 text-[var(--ink)]">
                {section.body?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}

                {section.list ? (
                    <ul className="space-y-3 pl-6">
                        {section.list.map((item) => (
                            <li key={`${item.label || 'item'}-${item.text}`}>
                                {item.label ? <strong className="font-semibold text-[#1b130c]">{item.label}</strong> : null}
                                {item.label ? ': ' : null}
                                {item.text}
                            </li>
                        ))}
                    </ul>
                ) : null}

                {section.after?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}

                {section.note ? (
                    <p
                        className="rounded-xl border-l-4 px-4 py-4"
                        style={{
                            borderLeftColor: 'var(--accent)',
                            background: 'var(--accent-soft)'
                        }}
                    >
                        {section.note.split('contact@marginality.app')[0]}
                        <a href="mailto:contact@marginality.app" className="text-[var(--accent)] underline underline-offset-2">
                            contact@marginality.app
                        </a>
                        {section.note.split('contact@marginality.app')[1]}
                    </p>
                ) : null}

                {section.contact ? (
                    <p>
                        Spark Digital LLC
                        <br />
                        Email:{' '}
                        <a href="mailto:contact@marginality.app" className="text-[var(--accent)] underline underline-offset-2">
                            contact@marginality.app
                        </a>
                        <br />
                        Website:{' '}
                        <a
                            href="https://marginality.app/"
                            className="text-[var(--accent)] underline underline-offset-2"
                        >
                            marginality.app
                        </a>
                    </p>
                ) : null}
            </div>
        </section>
    );
}

export default function PrivacyPage() {
    return (
        <div
            className="min-h-full"
            style={{
                '--accent': '#8a5a2b',
                '--accent-soft': '#f1e3cf',
                '--muted': '#695b4d',
                background:
                    'radial-gradient(circle at top, rgba(138, 90, 43, 0.12), transparent 32%), linear-gradient(180deg, #f8f2e8 0%, #f4efe5 100%)'
            }}
        >
            <main className="mx-auto max-w-[920px] px-5 py-12 sm:px-6 sm:py-[4.5rem]">
                <section
                    className="rounded-[1.5rem] border px-7 py-8 shadow-[0_20px_50px_rgba(36,26,18,0.08)]"
                    style={{
                        background: '#fffdf8',
                        borderColor: '#dbcdb8'
                    }}
                >
                    <div
                        className="inline-block rounded-full px-3 py-1 text-[0.8rem] font-bold uppercase tracking-[0.08em]"
                        style={{
                            background: 'var(--accent-soft)',
                            color: 'var(--accent)',
                            fontFamily: 'Arial, Helvetica, sans-serif'
                        }}
                    >
                        Spark Digital LLC
                    </div>
                    <h1 className="mt-4 text-[clamp(2.2rem,6vw,3.5rem)] font-semibold leading-none text-[#1f140d]">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 max-w-3xl text-[1.02rem] leading-7 text-[var(--ink)]">
                        This Privacy Policy explains how Marginality collects, uses, stores, and shares information
                        when you use the Marginality app, website, and related services.
                    </p>
                    <p
                        className="mt-4 text-[0.95rem] leading-7"
                        style={{
                            color: 'var(--muted)',
                            fontFamily: 'Arial, Helvetica, sans-serif'
                        }}
                    >
                        Effective date: May 12, 2026
                        <br />
                        Publisher: Spark Digital LLC
                        <br />
                        Contact:{' '}
                        <a href="mailto:contact@marginality.app" className="text-[var(--accent)] underline underline-offset-2">
                            contact@marginality.app
                        </a>
                    </p>
                </section>

                {sections.map((section) => (
                    <PolicySection key={section.title} section={section} />
                ))}

                <footer
                    className="mt-7 text-[0.95rem] leading-7"
                    style={{
                        color: 'var(--muted)',
                        fontFamily: 'Arial, Helvetica, sans-serif'
                    }}
                >
                    This page is intended to serve as the publishable Marginality privacy policy page for app-store and
                    website use.
                </footer>
            </main>
        </div>
    );
}
