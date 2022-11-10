import Link from "next/link"

export function NavBar() {
  return (
    <header className="w-full z-10 top-0 transition-all duration-300 ease-in-out sticky shadow-md shadow-gray-50 backdrop-blur-md bg-white/60 dark:bg-black/30 dark:shadow-gray-800">
      <div className="container mx-auto py-3 flex flex-row items-center justify-start">
        <Link href="/" className="flex flex-row items-end">
          <span className="sr-only">Odroe home page</span>
          <img src="/odroe.svg" alt="Odroe Logo" className="w-10 aspect-square" />
          <span className='ml-1 font-medium text-xs leading-5 bg-slate-900 rounded-full text-white px-2 dark:bg-gray-600'>ROE</span>
        </Link>
        <nav className="flex flex-row items-center mx-auto space-x-12 text-lg font-medium">
          <Link href="/">Product</Link>
          <Link href="/">Developer</Link>
          <Link href="/">Use Cases</Link>
          <Link href="/">Company</Link>
        </nav>
        <Link href="/" className="rounded-full px-6 py-2 bg-black text-white shadow-md shadow-gray-400 capitalize">
          Custom Development
        </Link>
      </div>
    </header>
  )
}