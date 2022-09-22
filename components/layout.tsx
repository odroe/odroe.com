import Head from "next/head"
import Footer, { slogan } from "./footer"

type Props = {
  title?: string
  description?: string
  keywords?: string[]
  children: React.ReactNode
}

const defaultTitle: string = "Odroe"
const defaultKeywords: string[] = [
  "odroe",
  "open source",
  "software",
  "耦左",
  "耦左科技",
]
const descriptionPart: string = 'Creators of 🦜 Parrot & ◭ Prisma for Dart.'

export default function Layout({ title, description, keywords = [], children }: Props) {
  const _keywords: string = [...keywords, ...defaultKeywords].join(", ")
  const _title = title ? `${defaultTitle} | ${title.trim()}` : defaultTitle
  const _description = description ? description : `${slogan} | ${descriptionPart}`

  return (
    <>
      <Head>
        <title>{_title}</title>
        <meta name="keywords" content={_keywords} />
        <meta name="description" content={_description} />
        
        <link rel="fluid-icon" href="/fluidicon.png" title="Odroe" />
        <link rel="icon" href="/odroe.svg" type="image/svg+xml" />
      </Head>
      {children}
      <Footer />
    </>
  )
}