import Link from 'next/link';

export const metadata = {
    title: 'Windows Download | Marginality',
    description:
        'Download the Windows release of Marginality or check the current installer availability and release details.',
    alternates: {
        canonical: '/download/windows'
    },
    openGraph: {
        title: 'Windows Download | Marginality',
        description:
            'Download the Windows release of Marginality or check the current installer availability and release details.',
        url: 'https://marginality.app/download/windows',
        type: 'website'
    }
};

const installer = {
    url: process.env.WINDOWS_INSTALLER_URL?.trim() || '',
    version: process.env.WINDOWS_INSTALLER_VERSION?.trim() || '',
    sha256: process.env.WINDOWS_INSTALLER_SHA256?.trim() || '',
    updatedAt: process.env.WINDOWS_INSTALLER_UPDATED_AT?.trim() || '',
    notesUrl: process.env.WINDOWS_INSTALLER_NOTES_URL?.trim() || ''
};

const hasInstaller = installer.url.length > 0;
const releaseFacts = [
    {
        label: 'Architecture',
        value: 'Windows x64'
    },
    {
        label: 'Package',
        value: 'MSI installer'
    },
    {
        label: 'Language',
        value: 'English'
    }
];

if (installer.version) {
    releaseFacts.unshift({
        label: 'Current version',
        value: installer.version
    });
}

if (installer.updatedAt) {
    releaseFacts.push({
        label: 'Last updated',
        value: installer.updatedAt
    });
}

if (installer.sha256) {
    releaseFacts.push({
        label: 'SHA-256',
        value: installer.sha256
    });
}

function FactGrid() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {releaseFacts.map((fact) => (
                <div
                    key={fact.label}
                    className="rounded-[1.5rem] border p-5"
                    style={{
                        borderColor: 'var(--line)',
                        background: 'rgba(255,255,255,0.72)'
                    }}
                >
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.22em]"
                        style={{ color: 'rgba(43, 50, 55, 0.5)' }}
                    >
                        {fact.label}
                    </p>
                    <p
                        className="mt-3 break-all text-sm leading-6 sm:text-base"
                        style={{ color: 'rgba(43, 50, 55, 0.8)' }}
                    >
                        {fact.value}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default function WindowsDownloadPage() {
    return (
        <div className="bg-[var(--paper-bright)] text-[var(--ink)]">
            <section className="relative overflow-hidden bg-[var(--ink-deep)] text-white">
                <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(56rem 34rem at 0% 0%, rgba(224, 196, 101, 0.24), rgba(224, 196, 101, 0.08) 36%, rgba(224, 196, 101, 0) 68%), linear-gradient(180deg, #23262c 0%, #2b3237 52%, #23262c 100%)'
                    }}
                />
                <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/54">
                            Windows Download
                        </p>
                        <h1
                            className="mt-5 max-w-[12ch] text-5xl leading-none text-white sm:text-6xl"
                            style={{ fontFamily: '"Fraunces", Georgia, serif' }}
                        >
                            Install Marginality on Windows.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/74 sm:text-lg">
                            Download the current Windows release for Marginality. The installer is packaged for x64
                            systems and the interface is currently available in English.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        {hasInstaller ? (
                            <a
                                href="/download/windows/latest"
                                className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-content no-underline transition hover:brightness-[1.02]"
                            >
                                Download for Windows
                            </a>
                        ) : (
                            <a
                                href="mailto:support@marginality.app?subject=Windows%20Installer%20Availability"
                                className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-content no-underline transition hover:brightness-[1.02]"
                            >
                                Ask about the Windows beta
                            </a>
                        )}
                        <Link
                            href="/privacy"
                            className="inline-flex items-center justify-center rounded-2xl border px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/8"
                            style={{
                                borderColor: 'rgba(255,255,255,0.18)',
                                background: 'rgba(255,255,255,0.04)'
                            }}
                        >
                            Privacy policy
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--paper-bright)]">
                <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
                    <div
                        className="rounded-[2rem] border bg-white/64 p-6 shadow-[0_24px_70px_-54px_rgba(35,38,44,0.55)] sm:p-8"
                        style={{ borderColor: 'var(--line)' }}
                    >
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                            <div className="max-w-2xl">
                                <p
                                    className="text-xs font-semibold uppercase tracking-[0.22em]"
                                    style={{ color: 'rgba(43, 50, 55, 0.5)' }}
                                >
                                    Availability
                                </p>
                                <h2 className="mt-3 text-3xl leading-tight text-[var(--ink-deep)] sm:text-4xl">
                                    {hasInstaller ? 'The current installer is live.' : 'The Windows installer is not live yet.'}
                                </h2>
                                <p className="mt-4 text-base leading-7" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                    {hasInstaller
                                        ? 'Use the button above or the stable link below to download the latest Windows release.'
                                        : 'This page is already in place for the Windows release. Once the hosted installer URL is configured, the download button and stable latest link will start working automatically.'}
                                </p>
                            </div>

                            <div
                                className="rounded-[1.5rem] border px-5 py-4 text-sm"
                                style={{
                                    borderColor: 'var(--line)',
                                    background: 'rgba(233,237,243,0.82)'
                                }}
                            >
                                <p className="font-semibold text-[var(--ink-deep)]">Stable download path</p>
                                <p className="mt-2 break-all leading-6" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                    https://marginality.app/download/windows/latest
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <FactGrid />
                        </div>

                        {installer.notesUrl ? (
                            <div className="mt-8">
                                <a
                                    href={installer.notesUrl}
                                    className="inline-flex items-center rounded-2xl border px-5 py-3 text-sm font-semibold no-underline transition hover:border-primary hover:text-[var(--ink-deep)]"
                                    style={{
                                        borderColor: 'var(--line-strong)',
                                        color: 'rgba(43, 50, 55, 0.78)'
                                    }}
                                >
                                    View release notes
                                </a>
                            </div>
                        ) : null}
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div
                            className="rounded-[1.75rem] border p-6"
                            style={{
                                borderColor: 'var(--line)',
                                background: 'rgba(255,255,255,0.7)'
                            }}
                        >
                            <p
                                className="text-xs font-semibold uppercase tracking-[0.22em]"
                                style={{ color: 'rgba(43, 50, 55, 0.5)' }}
                            >
                                Before you install
                            </p>
                            <ul className="mt-4 space-y-3 text-sm leading-6" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                <li>Use a Windows x64 machine.</li>
                                <li>Expect the current Windows interface to be English only.</li>
                                <li>Keep your installer updated from this page rather than bookmarking raw file URLs.</li>
                            </ul>
                        </div>

                        <div
                            className="rounded-[1.75rem] border p-6"
                            style={{
                                borderColor: 'var(--line)',
                                background: 'rgba(255,255,255,0.7)'
                            }}
                        >
                            <p
                                className="text-xs font-semibold uppercase tracking-[0.22em]"
                                style={{ color: 'rgba(43, 50, 55, 0.5)' }}
                            >
                                Need help?
                            </p>
                            <p className="mt-4 text-sm leading-6" style={{ color: 'rgba(43, 50, 55, 0.78)' }}>
                                If the installer is unavailable or you need a specific release for support, email{' '}
                                <a href="mailto:support@marginality.app">support@marginality.app</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
