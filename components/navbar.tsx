import Link from "next/link"
import { MenuButton } from "./menu_button"
import { navigation } from "./navigation"

export function NavBar() {
  return (
    <header className="w-full z-10 top-0 transition-all duration-300 ease-in-out sticky shadow-md shadow-gray-50 backdrop-blur-md bg-white/60 dark:bg-black/30 dark:shadow-gray-900 px-6 md:px-12">
      <div className="container mx-auto py-3 flex flex-row items-center justify-start">
        <Link href="/" className="flex flex-row items-end">
          <span className="sr-only">Odroe home page</span>
          <img src="/odroe.svg" alt="Odroe Logo" className="w-10 aspect-square" />
          <span className='ml-1 font-medium text-xs leading-5 bg-slate-900 rounded-full text-white px-2 dark:bg-gray-600 animate-bounce'>ROE</span>
        </Link>
        <nav className="hidden lg:flex flex-row items-center ml-auto mr-auto sm:mr-12 space-x-12 text-lg font-medium text-black dark:text-white">
          {navigation.map(({ name, href }) => (
            <Link href={href} key={href} className="hover:text-indigo-600">
              {name}
            </Link>
          ))}
        </nav>
        <Link href="/" className="rounded-full px-6 py-2 bg-black text-white shadow-md shadow-gray-400 capitalize hidden md:block ml-auto mr-6">
          Custom Development
        </Link>
        <MenuButton />
      </div>
    </header>
  )
}