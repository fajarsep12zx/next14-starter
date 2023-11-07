import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>test{children}</body>
    </html>
  )
}