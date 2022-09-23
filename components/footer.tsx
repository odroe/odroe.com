import { ComponentType } from "react";
import GitHubIcon from "./icons/github";
import { slogan } from "./meta";

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

const TwitterIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
)

type SocialMeta = {
  name: string
  url: string
  Icon: ComponentType<{ className?: string }>,
}

const scoialContactsMetadata: SocialMeta[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/odroeinc',
    Icon: TwitterIcon,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/odroe',
    Icon: GitHubIcon,
  },
]

const SocialContact = () => (
  <div className="flex mt-8 space-x-6 text-gray-600 dark:text-gray-400 justify-center">
    {scoialContactsMetadata.map(({ url, Icon, name }) => (
      <a key={name} className="hover:opacity-75 dark:hover:text-white" href={url} target="_blank" rel="noreferrer">
        <span className="sr-only">{name}</span>
        <Icon className="w-6 h-6" />
      </a>
    ))}
  </div>
);

type LinkMeta = {
  name: string
  url: string
  external?: boolean
  nofollow?: boolean
}

type LinkGroupMeta = {
  title: string
  links: LinkMeta[]
}

const linkGroupsMetadata: LinkGroupMeta[] = [
  {
    title: 'Product',
    links: [
      { name: 'Parrot', url: 'https://parrot.odroe.com' },
      { name: 'Prisma for Dart', url: 'https://prisma.pub' },
      { name: 'Socfony', url: 'https://socfony.com' },
    ],
  },
  {
    title: 'Developer',
    links: [
      { name: 'Documentation', url: '/docs' },
      { name: 'Support', url: '/support' },
      { name: 'Community', url: '/community' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { name: 'Customer Stories', url: '/showcase' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', url: '/about' },
      { name: 'Blog', url: '/blog' },
      { name: 'Careers', url: '/careers' },
      { name: 'Events', url: '/events' },
      { name: 'Legal', url: '/legal' },
    ]
  }
]

const Directory = () => (
  <div className='grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4'>
    {linkGroupsMetadata.map(({ title, links }) => (
      <div key={title}>
        <h2 className="font-medium text-gray-800 dark:text-gray-300">{title}</h2>
        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
          {links.map(({ name, url, external, nofollow }) => (
            <a key={name} className="hover:opacity-75 dark:hover:text-gray-100 dark:hover:opacity-100" href={url} target={external ? '_blank' : undefined} rel={nofollow ? 'nofollow' : undefined}>
              {name}
            </a>
          ))}
        </nav>
      </div>
    ))}
  </div>
);

export default function Footer() {
  return (
    <footer className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <Directory />
        <div className='text-center w-full'>
          <img src="/odroe.svg" className="h-9 lg:h-12 mx-auto" alt="Odroe logo" />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{slogan}</p>
          <SocialContact />
          <Copyright />
        </div>
      </div>
    </footer>
  )
}
