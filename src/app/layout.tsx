import './globals.css'
import Navbar from '@/components/header/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en" data-theme="emerald">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="flex flex-col items-center h-screen h-[100svh]">
        <div className="w-full max-w-6xl flex-grow">
          <Navbar />
          <div className="p-4 pb-10">
            {children}

          </div>
        </div>
      </body>
    </html>
  )
}
