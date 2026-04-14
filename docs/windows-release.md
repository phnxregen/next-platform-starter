# Windows Installer Release

This site now exposes a public Windows download page at `/download/windows` and a stable redirect path at `/download/windows/latest`.

## What gets hosted where

- Keep the source code and packaging files in the app repo: `C:\Users\phoen\Desktop\marginality_app`
- Keep the installer binary out of git
- Host the actual `.msi` file at a public, versioned `https://` URL under the Marginality domain or another storage endpoint you control

Recommended file naming:

- `https://marginality.app/downloads/marginality-1.0.0-x64.msi`
- `https://downloads.marginality.app/marginality-1.0.0-x64.msi`

## Build the Windows release

You need a Windows machine for the installer step.

1. In `C:\Users\phoen\Desktop\marginality_app`, build the Windows MSI with the repeatable packaging script:

   ```powershell
   .\tool\build_windows_msi.ps1
   ```

2. The installer packaging is defined in the app repo:

   - `tool/build_windows_msi.ps1`
   - `installer/windows/Package.wxs`

3. The Windows app identity should remain aligned with the installed product name `Marginality`:

   - `windows/CMakeLists.txt`
   - `windows/runner/Runner.rc`

4. Sign the MSI if you have a code-signing certificate.

## Current release

Current artifact details for the first public Windows installer:

- File: `marginality-1.0.0-x64.msi`
- SHA-256: `ed95e70e2563c522e47089551e5e5b578e4c7e7b99dac1b2f6b06698066a0748`

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
WINDOWS_INSTALLER_SHA256=ed95e70e2563c522e47089551e5e5b578e4c7e7b99dac1b2f6b06698066a0748
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
