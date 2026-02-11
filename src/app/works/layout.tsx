/**
 * Works Layout - Dark Theme Enforcement
 *
 * This layout wraps all case study pages (/works/*) and enforces dark theme
 * regardless of user's system or manual theme preference.
 */

export default function WorksLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div data-theme="dark">{children}</div>
}
