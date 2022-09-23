import { Fragment } from 'react'
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon, CubeIcon } from '@heroicons/react/20/solid'
import { ChatBubbleOvalLeftIcon, QuestionMarkCircleIcon, BookOpenIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import GitHubIcon from './icons/github'
import parrotLogo from '../assets/parrot.svg'
import prismaDartLogo from '../assets/prisma-dart.svg'
import Search from './search'

function OdroePrimary() {
  return (
    <a href="/" className="flex items-center select-none text-black dark:text-white">
      <img src="/odroe.svg" className="h-6 w-auto " />
      <span className="ml-2 text-xl">Odroe</span>
    </a>
  )
}

type MenuGroupMetadata = {
  name: string
  submenus: {
    name: string
    desc: string
    href: string
    Icon: React.ComponentType<{ className?: string }>
  }[]
  actions?: {
    name: string
    href: string
    Icon?: React.ComponentType<{ className?: string }>
  }[]
}

function MenuGroup({ name, submenus, actions }: MenuGroupMetadata) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`${open ? 'text-primary-500' : 'text-gray-600 dark:text-gray-200'} focus:outline-none inline-flex items-center hover:text-primary-500 font-medium text-base`}
          >
            {name}
            <ChevronDownIcon className={`${open ? "rotate-180 transform" : ""} h-4 w-4`} />
          </Popover.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"      
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidde bg-white dark:bg-gray-900">
                <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                  {submenus.map(({ name, href, Icon, desc }) => (
                    <a key={name} href={href} className="-m-3 p-3 flex items-start rounded-lg text-gray-600 hover:text-primary-500 dark:text-gray-300">
                      <div className="flex shrink-0 items-center justify-center rounded-md p-2 bg-gray-50 dark:bg-gray-800">
                      <div className="w-6 h-6 text-primary-500">
                        <Icon className="w-full h-full" />
                      </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium">{name}</div>
                        <div className="mt-1 text-sm opacity-60 font-normal">{desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
                {(actions && actions.length > 0) && (
                  <div className="px-10 py-5 space-y-2 bg-gray-50 dark:bg-gray-800">
                    {actions.map(({ name, href, Icon }) => (
                      <a key={name} href={href} className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-black">
                        {Icon && <Icon className="flex-shrink-0 h-6 w-6 mr-2" />}
                        {name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

const product: MenuGroupMetadata = {
  name: "Product",
  submenus: [
    {
      name: "Parrot Framework",
      desc: "A progressive Dart framework for building efficient, reliable and scalable server-side apps.",
      href: "https://parrot.odroe.com",
      Icon: ({ className }: { className?: string }) => (
        <Image src={parrotLogo} alt="Parrot Logo" className={className} />
      ),
    },
    {
      name: "Prisma for Dart",
      desc: "Next-generation ORM for Dart & Flutter | PostgreSQL, MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB.",
      href: "https://prisma.pub",
      Icon: ({ className }: { className?: string }) => (
        <Image src={prismaDartLogo} alt="Prisma for Dart Logo" className={className} />
      ),
    },
  ],
  actions: [
    {
      name: "More products",
      href: "/products",
      Icon: CubeIcon,
    },
    {
      name: "Read on GitHub",
      href: "https://github.com/odroe",
      Icon: GitHubIcon,
    },
  ],
}

const developer: MenuGroupMetadata = {
  name: "Developer",
  submenus: [
    {
      name: "Documentation",
      desc: "Refer to our technical documentation to configure, access APIs, develop and deploy your app.",
      href: "/docs",
      Icon: BookOpenIcon,
    },
    {
      name: "Support",
      desc: "Find resources and get help from our support team.",
      href: "/support",
      Icon: QuestionMarkCircleIcon,
    },
    {
      name: "Community",
      desc: "Join the growing Odroe community.",
      href: "/community",
      Icon: ChatBubbleOvalLeftIcon,
    },
  ],
}

const useCases: MenuGroupMetadata = {
  name: "Use Cases",
  submenus: [
    {
      name: "Customer Stories",
      href: "/showcase",
      desc: "Read our customer stories, Learn about apps built with Odroe product.",
      Icon: UserIcon,
    }
  ]
}

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Events', href: '/events' },
  { name: 'Legal', href: '/legal' },
]

function Company() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`${open ? 'text-primary-500' : 'text-gray-600 dark:text-gray-200'} focus:outline-none inline-flex items-center hover:text-primary-500 font-medium text-base`}
          >
            Company
            <ChevronDownIcon className={`${open ? "rotate-180 transform" : ""} h-4 w-4`} />
          </Popover.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"      
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidde bg-white dark:bg-gray-900 flex divide-x divide-gray-100 dark:divide-gray-800">
                <div className="relative grid gap-6 px-5 sm:p-8 w-auto">
                  {companyLinks.map(({ name, href }) => (
                    <a key={href} href={href} className="-m-3 px-3 py-2 flex items-start rounded-lg text-gray-800 hover:text-primary-500 dark:text-gray-300 text-base">
                      {name}
                    </a>
                  ))}
                </div>
                <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8 w-full">
                  <h3 className="text-xl font-normal uppercase tracking-widest text-gray-500">Latest from the blog</h3>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

function PopoverMenu() {
  return (
    <Popover.Group className="hidden md:flex space-x-10 item-center mx-auto">
      <MenuGroup {...product} />
      <MenuGroup {...developer} />
      <MenuGroup {...useCases} />
      <Company />
     </Popover.Group>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex-none text-sm font-semibold leading-6 backdrop-blur-sm backdrop-brightness-100">
      <nav className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center py-4">
          <OdroePrimary />
          <PopoverMenu />
          <Search />
          <div className="hidden lg:flex ml-8 items-center pl-8 border-l border-slate-200 dark:border-slate-800">
            <a href="/login" className="text-gray-800 dark:text-gray-100 hover:text-primary-500">Login</a>
            <a href="/signup" className="rounded-lg text-sm font-semibold py-2 px-4 border border-primary-100 text-primary-500 ml-8 uppercase hover:bg-primary-500 hover:text-white dark:bg-primary-500 dark:text-white dark:border-none">Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
  )
}