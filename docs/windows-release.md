# Windows Installer Release

This site now exposes a public Windows download page at `/download/windows` and a stable redirect path at `/download/windows/latest`.

## What gets hosted where

- Keep the source code in the app repo: `/Users/phoenixparks/Projects/Marginally-master`
- Keep the installer binary out of git
- Host the actual `.msi` file at a public, versioned `https://` URL under the Marginality domain or another storage endpoint you control

Recommended file naming:

- `https://marginality.app/downloads/marginality-1.0.0-x64.msi`
- `https://downloads.marginality.app/marginality-1.0.0-x64.msi`

## Build the Windows release

You need a Windows machine for the installer step.

1. On Windows, build the app:

   ```bash
   flutter build windows --release
   ```

2. Wrap the release output in an MSI installer.

   Preferred options:

   - WiX Toolset
   - Advanced Installer

3. Sign the MSI if you have a code-signing certificate.

## Website configuration

Set these environment variables in the website deployment:

- `WINDOWS_INSTALLER_URL`
- `WINDOWS_INSTALLER_VERSION`
- `WINDOWS_INSTALLER_UPDATED_AT`

Optional:

- `WINDOWS_INSTALLER_SHA256`
- `WINDOWS_INSTALLER_NOTES_URL`

Example values:

```text
WINDOWS_INSTALLER_URL=https://marginality.app/downloads/marginality-1.0.0-x64.msi
WINDOWS_INSTALLER_VERSION=1.0.0
WINDOWS_INSTALLER_UPDATED_AT=2026-04-14
WINDOWS_INSTALLER_SHA256=<sha256>
WINDOWS_INSTALLER_NOTES_URL=https://marginality.app/about
```

After updating the variables, redeploy the site.

## Public download URLs

- User-facing page: `https://marginality.app/download/windows`
- Stable latest redirect: `https://marginality.app/download/windows/latest`

The stable latest link is for users.

For Microsoft Store package submission, use the actual versioned installer file URL instead of `/download/windows/latest`.

## Microsoft Store values

For the current Windows release plan:

- App type: `MSI`
- Architecture: `x64`
- Installer parameters: `/qn`
- Language: `English (United States)` if that is your only declared Windows locale

## Updating a release

1. Build the new MSI on Windows.
2. Upload it to a new versioned URL.
3. Update `WINDOWS_INSTALLER_URL` and related environment variables.
4. Redeploy the website.
5. Update the Microsoft Store package URL to the new versioned MSI file.
