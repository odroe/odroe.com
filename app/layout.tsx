import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import './globals.css'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className='scroll-smooth'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
