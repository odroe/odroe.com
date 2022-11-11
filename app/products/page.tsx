import Link from "next/link"
import { GitHubIcon } from "../../components/icons/github_icon"

const products = [
  {
    name: "Prisma ORM for Dart",
    description: "Next-generation ORM for Dart & Flutter | PostgreSQL, MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB.",
    image: "/prisma.svg",
    keywords: ["ORM", "Dart", "Flutter", "PostgreSQL", "MySQL", "MariaDB", "SQL Server", "SQLite", "MongoDB", "CockroachDB"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/odroe/prisma-dart",        
      },
      {
        name: "Documentation",
        href: "https://prisma.pub",
      },
    ]
  },
  {
    name: "Parrot",
    description: "A progressive Dart framework for building efficient, reliable and scalable applications.",
    image: "/parrot.svg",
    keywords: ["Dart", "Flutter", "Framework"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/odroe/parrot",
      },
    ]
  },
  {
    name: "Socfony",
    description: "Socfony is an open source social application, and basic security modules and social function modules have been preset in the software. Whether it is to deploy Socfony directly or as a basis for program development is wonderful.",
    keywords: ["Dart", "Flutter", "App"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/odroe/socfony",
      },
      {
        name: "Website",
        href: "https://socfony.com",
      },
    ]
  },
  {
    name: "OOTP",
    description: "OOTP (Open One-time Password) is a supports multiple programming languages. The generated one-time passwords are fully compliant with HOTP (HMAC-based One-time Password) and TOTP (Time-based One-time Password). 🚀It's easy to use!",
    keywords: ["Dart", "Rust", "JavaScipt", "TypeScript", "Node.js", "HOTP", "TOTP", "App"],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/odroe/ootp",
      },
      {
        name: "App Store",
        href: "https://apps.apple.com/us/app/open-authenticator/id1583588049",
      },
      {
        name: "Android",
        href: "https://github.com/odroe/ootp/tree/main/open-authenticator",
      },
    ]
  }
]

const Hero = () => {
  return (
    <div className="w-full bg-[url('/pattern.svg')] bg-no-repeat bg-contain bg-right-bottom bg-height-fit">
       <div className="w-full flex flex-col items-center md:items-start pb-12 pt-24 container mx-auto px-6 md:px-12 xl:px-0">
        <h1 className="text-5xl sm:text-3xl md:text-5xl font-semibold leading-tall mb-8 md:mb-12 text-black dark:text-white">Products</h1>
        <h3 className="text-3xl sm:text-xl md:text-3xl font-semibold mb-4 text-black dark:text-white">Odroe ♥︎ Open Source</h3>
        <div className="text-grey-700 mb-12 leading-normal text-center md:text-left max-w-xl text-black dark:text-white">Open source software is the cornerstone of Odroe, and we collaborate with developers and teams around the world.</div>
        <Link
          href="https://github.com/odroe"
          className="shadow-md py-2 px-8 rounded-full hover:shadow-lg transition-auto duration-300 ease-in-out border border-gray-100 flex flex-row max-w-max justify-center items-center bg-white dark:bg-black dark:text-white dark:hover:text-indigo-600 dark:hover:border-indigo-600"
        >
          <GitHubIcon className="w-6 h-6" />
          <span className="text-lg ml-2">View all on GitHub</span>
        </Link>
      </div>
    </div>
  )
}

export default () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto mt-24 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 xl:px-0">
        {products.map((product, index) => (
          <div key={index} className="bg-white px-6 py-8 flex flex-col rounded-2xl hover:shadow-2xl transition-auto duration-300 ease-in-out shadow-sm dark:bg-gray-900 ">
            {product.image && (
              <div className="w-12 aspect-square bg-cover bg-center rounded-xl mb-6" style={{ backgroundImage: `url(${product.image})` }} />
            )}
            <h3 className=" text-black font-medium text-2xl tracking-wide dark:text-white">{product.name}</h3>

            {/* keywords */}
            <div className="flex flex-wrap mt-2 text-gray-500 text-sm font-extralight dark:text-gray-500">
              {product.keywords.join(", ")}
            </div>

            {/* description */}
            <div className="mt-4 text-black/80 text-md font-normal break-words dark:text-gray-200">{product.description}</div>

            {/* links */}
            <div className="mt-auto flex flex-row space-x-4 pt-6">
              {product.links.map((link, index) => (
                <Link key={index} href={link.href} className="py-2 px-4 rounded-full bg-gray-200 text-black text-xs font-normal transition-auto duration-300 ease-in-out hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:text-indigo-600">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}