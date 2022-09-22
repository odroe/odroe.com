export const slogan: string = 'Odroe ♥︎ Open source • One dream one life.';

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-8 text-xs text-gray-800 text-center">
      Copyright © {year} Odroe Inc. All rights reserved.
      <br />
      <a href="https://beian.miit.gov.cn" className="text-gray-400" target="_blank" rel="noopener noreferrer nofollow">蜀ICP备2021021384号-2</a> 
        &nbsp;•&nbsp;
      <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51019002004080" className="text-gray-400 " target="_blank" rel="noopener noreferrer nofollow">川公网安备51019002004080号</a>
    </div>
  )
}

const GitHubIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
)

type SocialMeta = {
  name: string
  url: string
  icon: React.ReactNode
}

const scoialContactsMetadata: SocialMeta[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/odroeinc',
    icon: <TwitterIcon />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/odroe',
    icon: <GitHubIcon />,
  },
]

const SocialContact = () => (
  <div className="flex mt-8 space-x-6 text-gray-600 justify-center">
    {scoialContactsMetadata.map(({ url, icon, name }) => (
      <a key={name} className="hover:opacity-75" href={url} target="_blank" rel="noreferrer">
        <span className="sr-only">{name}</span>
        {icon}
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
      { name: 'Customer stories', url: '/showcase' },
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
        <h2 className="font-medium">{title}</h2>
        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
          {links.map(({ name, url, external, nofollow }) => (
            <a key={name} className="hover:opacity-75" href={url} target={external ? '_blank' : undefined} rel={nofollow ? 'nofollow' : undefined}>
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
          <p className="mt-4 text-sm text-gray-600">{slogan}</p>
          <SocialContact />
          <Copyright />
        </div>
      </div>
    </footer>
  )
}
