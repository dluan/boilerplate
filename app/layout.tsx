import './globals.css'

export const metadata = {
  title: 'Boilerplate',
  description: 'Estrutura para começar a trabalhar rapidamente com tailwindcss'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
