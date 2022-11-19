import { GitHubIcon } from "../../components/icons/github_icon"
import { TwitterIcon } from "../../components/icons/twitter_icon"

const follow = [
  {
    name: 'GitHub',
    href: 'https://github.com/odroe',
    icon: () => GitHubIcon({ className: 'w-6 h-6' }),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/odroeinc',
    icon: () => TwitterIcon({ className: 'w-6 h-6' }),
  }
]

const navigation = [
  {
    name: 'Documentation 📖',
    href: '/docs',
    description: 'Read our product and technical documentation, we will index all Odroe documents for you here.',
  },
  {
    name: 'Support 🛠️',
    href: '/support',
    description: 'Get help from our support team, we will answer your questions as soon as possible.',
  },
  {
    name: 'Community 🥳',
    href: '/community',
    description: 'Join our community! \n It is a good place for you to learn and share Odroe technology and products.',
  }
]

export default () => {
  return (
    <main className="bg-[url('/star-bg.svg')] bg-repeat-x bg-left-top -translate-y-12 pt-12">
      <div className="text-5xl font-extrabold text-center mt-24 capitalize">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Developer Center</span>
      </div>
      <div className="text-2xl text-center mt-8 container mx-auto px-6 text-black dark:text-white">
        Gather documentation, community, and support to find Odroe's favorite technologies and more.
      </div>

      {/* Fllow us */}
      <div className="flex flex-row space-x-2 border mx-auto max-w-fit px-8 py-4 mt-12 rounded-lg justify-center items-center text-black dark:text-white">
        <span>Follow us on</span>
        {follow.map((link) => (
          <a key={link.name} className="hover:opacity-75 dark:hover:text-white" href={link.href} target="_blank" rel="noreferrer">
            <span className="sr-only">{link.name}</span>
            <link.icon />
          </a>
        ))}
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex-1">
                <p className="text-xl font-semibold text-black dark:text-white mb-2">{item.name}</p>
                {
                  item.description.split('\n').map(paragraph => <p className="py-1 text-base text-gray-500 dark:text-gray-400">{paragraph}</p> )
                }
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}