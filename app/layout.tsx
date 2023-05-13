import './globals.css'

export const metadata = {
  title: 'Todo List',
  description: 'This is a todo list app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
