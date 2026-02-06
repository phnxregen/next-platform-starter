'use client';

import { useEffect, useState } from 'react';

type Message = {
  title: string;
  description?: string;
  kind: 'success' | 'error';
};

const DEFAULT_MESSAGE: Message = {
  title: 'Email verified',
  description: 'You can return to the app to continue.',
  kind: 'success',
};

function pickFirst(...values: Array<string | null | undefined>) {
  return values.find((value) => value && value.length > 0) ?? null;
}

function getErrorMessage(): string | null {
  if (typeof window === 'undefined') return null;

  const searchParams = new URLSearchParams(window.location.search);
  const hash = window.location.hash.startsWith('#')
    ? window.location.hash.slice(1)
    : window.location.hash;
  const hashParams = new URLSearchParams(hash);

  const error = pickFirst(searchParams.get('error'), hashParams.get('error'));
  const description = pickFirst(
    searchParams.get('error_description'),
    hashParams.get('error_description')
  );

  return description ?? error ?? null;
}

export default function AuthCallbackPage() {
  const [message, setMessage] = useState<Message>(DEFAULT_MESSAGE);

  useEffect(() => {
    const errorMessage = getErrorMessage();
    if (errorMessage) {
      setMessage({
        title: 'Verification error',
        description: errorMessage,
        kind: 'error',
      });
    }
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
        background: '#f6f6f4',
        color: '#1a1a1a',
        fontFamily: '"Avenir Next", "Avenir", "Segoe UI", system-ui, sans-serif',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: '440px',
          background: '#ffffff',
          border: '1px solid #e6e2dc',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 16px 40px rgba(18, 18, 18, 0.08)',
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: message.kind === 'error' ? '#ffe6e6' : '#e7f7ef',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            marginBottom: '16px',
          }}
          aria-hidden="true"
        >
          {message.kind === 'error' ? '!' : '✓'}
        </div>
        <h1
          style={{
            margin: '0 0 8px',
            fontSize: '24px',
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          {message.title}
        </h1>
        <p style={{ margin: '0 0 24px', lineHeight: 1.6, color: '#4a4a4a' }}>
          {message.description}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a
            href="marginality://auth"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 16px',
              borderRadius: '10px',
              border: '1px solid #1a1a1a',
              background: '#1a1a1a',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Return to app
          </a>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 16px',
              borderRadius: '10px',
              border: '1px solid #d7d3cc',
              color: '#1a1a1a',
              textDecoration: 'none',
              fontWeight: 600,
              background: '#fbfbfa',
            }}
          >
            Back to homepage
          </a>
        </div>
      </section>
    </main>
  );
}
