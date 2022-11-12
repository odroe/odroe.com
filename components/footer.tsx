import Link from "next/link";
import { GitHubIcon } from "./icons/github_icon";
import { TwitterIcon } from "./icons/twitter_icon";

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-8 text-xs text-center text-gray-800 dark:text-gray-400">
      Copyright © {year} Odroe Inc. All rights reserved.
      <br />
      <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-primary-100">蜀ICP备2021021384号-2</a> 
        &nbsp;•&nbsp;
      <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51019002004080" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-primary-100">川公网安备51019002004080号</a>
    </div>
  )
}

const scoialContactsMetadata = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/odroeinc',
    icon: () => TwitterIcon({ className: 'w-6 h-6' }),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/odroe',
    icon: () => GitHubIcon({ className: 'w-6 h-6' }),
  },
]

const SocialContact = () => (
  <div className="flex mt-8 space-x-6 text-gray-600 dark:text-gray-400 justify-center">
    {scoialContactsMetadata.map((link) => (
      <a key={link.name} className="hover:opacity-75 dark:hover:text-white" href={link.href} target="_blank" rel="noreferrer">
        <span className="sr-only">{link.name}</span>
        <link.icon />
      </a>
    ))}
  </div>
);

const linkGroupsMetadata = [
  {
    title: 'Product',
    links: [
      { name: 'Prisma ORM', href: 'https://prisma.pub' },
      { name: 'Parrot', href: 'https://parrot.odroe.com' },
      { name: 'Socfony', href: 'https://socfony.com' },
    ],
  },
  {
    title: 'Developer',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
      { name: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { name: 'Customer Stories', href: '/showcase' },
      { name: 'Enterprise', href: '/enterprise' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Events', href: '/events' },
      { name: 'Legal', href: '/legal' },
    ]
  }
]

const Directory = () => (
  <div className='grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4'>
    {linkGroupsMetadata.map(({ title, links }) => (
      <div key={title}>
        <h2 className="text-xl uppercase font-light tracking-wider text-gray-500 dark:text-gray-400">{title}</h2>
        <nav className="flex flex-col mt-4 space-y-2 text-sm">
          {links.map(({ name, href }) => (
            <Link key={name} href={href} className="text-lg font-medium text-gray-800 hover:text-gray-500 hover:underline hover:underline-offset-4 dark:text-white/80 dark:hover:text-white">
              {name}
            </Link>
          ))}
        </nav>
      </div>
    ))}
  </div>
);

export function Footer() {
  return (
    <footer className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Directory />
        <div className='text-center w-full'>
          <img src="/odroe.svg" className="w-16 aspect-square mx-auto" alt="Odroe logo" />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Odroe ♥︎ Open source • One dream one life.</p>
          <SocialContact />
          <Copyright />
        </div>
      </div>
    </footer>
  )
}