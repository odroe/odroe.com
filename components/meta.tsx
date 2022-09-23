import Head from "next/head"

export type Metadata = {
  title?: string
  description?: string
  keywords?: string[]
}

const sitename: string = 'Odroe'
const sitedesc: string = 'Creators of 🦜 Parrot & ◭ Prisma for Dart.'
const sitekeys: string[] = [
  "odroe",
  "open source",
  "software",
  "耦左",
  "耦左科技",
]

export const slogan: string = 'Odroe ♥︎ Open source • One dream one life.';

export default function Meta({ title, description, keywords }: Metadata) {
  title = title ? `${sitename} | ${title.trim()}` : sitename
  description = description ? description : `${slogan} | ${sitedesc}`
  keywords = [...keywords ?? [], ...sitekeys]

  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="description" content={description} />
      <link rel="fluid-icon" href="/fluidicon.png" title={sitename} />
      <link rel="icon" href="/odroe.svg" type="image/svg+xml" />
    </Head>
  )
}
