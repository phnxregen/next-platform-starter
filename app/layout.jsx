import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    metadataBase: new URL('https://marginality.app'),
    title: 'Marginality — Bible Study with Living Margins',
    description:
        'Marginality is a modern Bible study app by Spark Digital LLC that enables verse-linked margins, organized notebooks, and collaborative studies.',
    openGraph: {
        title: 'Marginality — Bible Study with Living Margins',
        description:
            'A modern way to study Scripture with verse-linked margins, notebooks, and collaborative studies.',
        type: 'website',
        url: 'https://marginality.app',
        images: [
            {
                url: 'https://marginality.app/images/preview.png',
                width: 1200,
                height: 630,
                alt: 'Marginality app preview'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Marginality — Bible Study with Living Margins',
        description:
            'Marginality is a modern Bible study app that enables verse-linked margins, organized notebooks, and collaborative studies.',
        images: ['https://marginality.app/images/preview.png']
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased bg-white text-slate-900">
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
