"use client"

import Link from "next/link"
import { createRef, useEffect } from "react"

const navigation = [
  { name: "Product", href: "/products" },
  { name: "Developer", href: "/developer" },
  { name: "Blog", href: "/blog" },
  { name: "Use Cases", href: "/showcase" },
  { name: "Company", href: "/company" },
]

const headerRef = createRef<HTMLElement>();

const CustomDevelopment = () => {
  return (
    <Link href="/" className="rounded-full px-6 py-2 bg-black text-white shadow-md shadow-gray-400 capitalize text-center block relative">
      Custom Development
      <span className="flex h-4 w-4 absolute left-1 -bottom-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
      </span>
    </Link>
  )
}

const MenuButton = () => {
  const toggle = () => {
    if (headerRef.current?.hasAttribute("open")) {
      return headerRef.current.removeAttribute("open")
    }

    headerRef.current?.setAttribute("open", "")
  }

  return (
    <div className="lg:hidden">
      <div className="flex flex-col justify-between transform transition-all duration-300 group-open:-rotate-[45deg] origin-center w-6 aspect-square" onClick={toggle}>
        <div className="bg-black dark:bg-white h-[4px] w-1/2 rounded transform transition-all duration-300 group-open:-rotate-90 group-open:h-[2px] origin-right delay-75 group-open:-translate-y-[1px]"></div>
        <div className="bg-black dark:bg-white h-[2px] rounded"></div>
        <div className="bg-black dark:bg-white h-[4px] w-1/2 rounded self-end transform transition-all duration-300 group-open:-rotate-90 group-open:h-[2px] origin-left delay-75 group-open:translate-y-[1px]"></div>
      </div>
    </div>
  )
}

export function NavBar() {
  useEffect(() => {
    const header = headerRef.current

    const handleScroll = () => {
      if (window.scrollY > 0) {
        return header?.setAttribute("data-scrolled", "")
      }
      header?.removeAttribute("data-scrolled")
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <header className="w-full z-10 top-0 transition-all duration-300 ease-in-out sticky shadow-none data-[scrolled]:shadow-md shadow-gray-50 backdrop-blur-md backdrop-filter dark:shadow-gray-900 px-6 md:px-12 group bg-transparent data-[scrolled]:bg-white/60 data-[scrolled]:dark:bg-black/30" ref={headerRef}>
      <div className="container mx-auto py-3 flex flex-row items-center justify-start">
        <Link href="/" className="flex flex-row items-end mr-auto">
          <span className="sr-only">Odroe home page</span>
          <img src="/odroe.svg" alt="Odroe Logo" className="w-10 aspect-square hover:animate-spin" />
          <span className='ml-1 font-medium text-xs leading-5 bg-slate-900 rounded-full text-white px-2 dark:bg-gray-600 animate-bounce'>ROE</span>
        </Link>
        <nav className="hidden lg:flex flex-row items-center ml-auto sm:mr-12 space-x-12 text-lg font-medium text-black dark:text-white">
          {navigation.map(({ name, href }) => (
            <Link href={href} key={href} className="hover:text-indigo-600">
              {name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block mr-6">
          <CustomDevelopment />
        </div>
        <MenuButton />
      </div>
      <div className="container mx-auto hidden group-open:flex flex-col pb-6 space-y-4 pt-4">
        {navigation.map(({ name, href }) => (
          <Link href={href} key={href} className="block text-lg font-medium text-black dark:text-white">
            {name}
          </Link>
        ))}
        <div className="md:hidden flex justify-center pt-6">
          <CustomDevelopment />
        </div>
      </div>
    </header>
  )
}