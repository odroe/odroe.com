import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import './globals.css'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white dark:bg-black max-w-full">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
