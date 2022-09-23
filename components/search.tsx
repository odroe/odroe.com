import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
  return (
    <>
      <button className="flex h-8 w-8 items-center justify-center rounded-lg ml-auto lg:ml-0">
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-800 hover:fill-gray-50 dark:text-gray-300 dark:hover:fill-gray-700" />
      </button>
    </>
  )
}