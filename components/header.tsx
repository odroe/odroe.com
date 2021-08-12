import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
  ChipIcon,
  MenuIcon,
  ExternalLinkIcon,
  ShieldCheckIcon,
  XIcon,
  ViewGridIcon,
  NewspaperIcon,
  EmojiHappyIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import FullLogo from './full-logo'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

const products = [
  {
    name: 'Socfony',
    description: 'Socfony 是 100% 开源的，你可以使用 Socfony 直接部署或者以此为基础开发你的 App。',
    href: 'https://github.com/odroe/socfony',
    icon: ChipIcon,
    props: { rel: "noopener noreferrer", target: "_blank" },
  },
  {
    name: 'OOTP',
    description: 'OOTP 是一个支持多种编程语言，生成的一次性密码完全符合 HOTP 和 TOTP。🎉使用起来非常简单！',
    href: 'https://github.com/odroe/ootp',
    icon: ShieldCheckIcon,
    props: { rel: "noopener noreferrer", target: "_blank" },
  },
]
const productActions = [
  { name: '查看全部', href: '/products', icon: ViewGridIcon },
  { name: '开源项目', href: 'https://github.com/odroe', icon: ExternalLinkIcon, props: { rel: "noopener noreferrer", target: "_blank" } },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const router = useRouter()
  return (
    <Popover as="header" className="fixed w-full bg-white dark:bg-black border-b-2 border-gray-100 dark:border-transparent z-50">
      <Head>
        <title>Odroe | 耦左</title>
        <meta name="keywords" content="Odroe, 耦左, 科技, Socfony, OOTP" />
        <meta name="description" content="One dream, One life. 耦左成立于2019年5月的互联网公司。我们的使命“科技创新，开源共享”。因梦前行；为生活而奋斗；助力各行各业发展；开源成就事业！" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <Link href="/">
            <a href="#" className="flex justify-start lg:w-0 lg:flex-1 flex-row items-cente">
                <span className="sr-only">耦左科技 | Odroe</span>
                <FullLogo className="w-auto h-8 sm:h-10 fill-current text-black dark:text-white" />
            </a>
          </Link>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none">
              <span className="sr-only">菜单</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400',
                      'group bg-transparent rounded-md inline-flex items-center text-base font-medium focus:outline-none hover:text-gray-900 dark:hover:text-gray-100'
                    )}
                  >
                    <span>产品与服务</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-300',
                        'ml-1 h-5 w-5 hover:text-gray-900 dark:hover:text-gray-100'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidde bg-white dark:bg-gray-900">
                        <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                          {products.map((item) => (
                            <a
                              {...item.props}
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-black"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 dark:text-gray-300">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {productActions.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                {...item.props}
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-black"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/news">
                <a className={classNames(
                    router.pathname === '/news' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400',
                    'text-base font-medium hover:text-gray-900 dark:hover:text-gray-100'
                )}>
                新闻
                </a>
            </Link>

            <Link href="/jobs">
                <a className={classNames(
                    router.pathname === '/jobs' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400',
                    'text-base font-medium hover:text-gray-900 dark:hover:text-gray-100'
                )}>
                工作
                </a>
            </Link>

            <Link href="/">
                <a className={classNames(
                    router.pathname === '/' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400',
                    'text-base font-medium hover:text-gray-900 dark:hover:text-gray-100'
                )}>
                关于耦左
                </a>
            </Link>

          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              登入
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-base font-medium text-gray-900 border-gray-900 dark:text-gray-300 dark:border-gray-300"
            >
              注册账号
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <FullLogo className="w-auto h-8 fill-current text-black dark:text-white"/>
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                    <span className="sr-only">关闭导航</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                    <Link href="/products">
                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-black" >
                            <ViewGridIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">产品与服务</span>
                        </a>
                    </Link>
                    <Link href="/news">
                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-black" >
                            <NewspaperIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">新闻</span>
                        </a>
                    </Link>
                    <Link href="/jobs">
                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-black" >
                            <OfficeBuildingIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">工作</span>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-black" >
                            <EmojiHappyIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">关于耦左</span>
                        </a>
                    </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-base font-medium border-gray-900 dark:border-gray-400 text-black dark:text-gray-300"
                >
                  注册账号
                </a>
                <a className="mt-6 text-center text-base font-medium text-gray-500 block cursor-pointer">
                 登入
                </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
