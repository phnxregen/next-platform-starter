import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export function GET(request) {
    const installerUrl = process.env.WINDOWS_INSTALLER_URL?.trim();

    if (!installerUrl) {
        return NextResponse.redirect(new URL('/download/windows', request.url));
    }

    return NextResponse.redirect(installerUrl);
}
