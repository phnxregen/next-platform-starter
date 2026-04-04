'use client';

import Image from 'next/image';
import { useState } from 'react';

const previewModes = {
    dark: {
        src: '/images/app_pic_dark.png',
        alt: 'Marginality dark app preview',
        frameBackground: 'linear-gradient(145deg, rgba(35,38,44,1) 0%, rgba(43,50,55,0.98) 100%)',
        imageBackground: '#23262c',
        eyebrow: 'Dark preview',
        description: 'A darker workspace framed by warm accents and restrained chrome.'
    },
    light: {
        src: '/images/app_pic_light.png',
        alt: 'Marginality light app preview',
        frameBackground: 'linear-gradient(145deg, rgba(233,237,243,1) 0%, rgba(221,227,235,1) 100%)',
        imageBackground: '#f1f3f6',
        eyebrow: 'Light preview',
        description: 'A lighter reading surface built to keep notes and Scripture in the same visual flow.'
    }
};

export function HeroPreviewToggle() {
    const [mode, setMode] = useState('dark');
    const activePreview = previewModes[mode];

    return (
        <div className="relative mx-auto w-full max-w-[540px]">
            <div
                aria-hidden="true"
                className="absolute -left-10 -top-10 h-36 w-36 rounded-[2.5rem] blur-3xl transition-all duration-500"
                style={{
                    background:
                        mode === 'dark'
                            ? 'radial-gradient(circle, rgba(224, 196, 101, 0.24) 0%, rgba(224, 196, 101, 0) 72%)'
                            : 'radial-gradient(circle, rgba(255, 255, 255, 0.68) 0%, rgba(255, 255, 255, 0) 72%)'
                }}
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-14 -right-10 h-44 w-44 rounded-full opacity-70 blur-2xl transition-all duration-500"
                style={{
                    background:
                        mode === 'dark'
                            ? 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 72%)'
                            : 'radial-gradient(circle, rgba(35,38,44,0.08) 0%, rgba(35,38,44,0) 72%)'
                }}
            />

            <div
                className="relative overflow-hidden rounded-[2rem] p-3 shadow-[0_32px_80px_-40px_rgba(35,38,44,0.7)] transition-all duration-500"
                style={{ background: activePreview.frameBackground }}
            >
                <div
                    className="relative aspect-square overflow-hidden rounded-[1.5rem] border transition-colors duration-500"
                    style={{
                        borderColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(35,38,44,0.08)',
                        background: activePreview.imageBackground
                    }}
                >
                    {Object.entries(previewModes).map(([key, preview]) => (
                        <Image
                            key={key}
                            src={preview.src}
                            alt={preview.alt}
                            fill
                            priority={key === 'dark'}
                            sizes="(min-width: 1024px) 540px, 92vw"
                            className={`object-cover transition-all duration-500 ease-out ${
                                mode === key ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0'
                            }`}
                        />
                    ))}
                </div>

                <div className="flex flex-col gap-4 px-2 pb-1 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.24em] transition-colors duration-500"
                            style={{ color: mode === 'dark' ? 'rgba(255,255,255,0.55)' : 'rgba(35,38,44,0.48)' }}
                        >
                            {activePreview.eyebrow}
                        </p>
                        <p
                            className="mt-2 text-sm transition-colors duration-500"
                            style={{ color: mode === 'dark' ? 'rgba(255,255,255,0.82)' : 'rgba(43,50,55,0.8)' }}
                        >
                            {activePreview.description}
                        </p>
                    </div>

                    <div
                        className="inline-flex w-fit rounded-full p-1 transition-colors duration-500"
                        style={{
                            background: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(35,38,44,0.08)'
                        }}
                        role="tablist"
                        aria-label="App preview theme"
                    >
                        {Object.keys(previewModes).map((key) => {
                            const selected = mode === key;

                            return (
                                <button
                                    key={key}
                                    type="button"
                                    onClick={() => setMode(key)}
                                    className="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300"
                                    style={{
                                        background: selected ? '#e0c465' : 'transparent',
                                        color: selected
                                            ? '#23262c'
                                            : mode === 'dark'
                                              ? 'rgba(255,255,255,0.72)'
                                              : 'rgba(35,38,44,0.72)'
                                    }}
                                    aria-pressed={selected}
                                >
                                    {key === 'dark' ? 'Dark' : 'Light'}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
