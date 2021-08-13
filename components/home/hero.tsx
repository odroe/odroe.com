import Link from 'next/link';
import HoneHeroImage from './hero-image';

export default function HomeHeroSection() {
  return (
    <section className="relative bg-white dark:bg-black dark:bg-opacity-50 overflow-hidden -mt-2">
      <div className="max-w-7xl mx-auto py-12">
        <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">科技创新，</span>
                <span className="block text-indigo-600 xl:inline">开源共享。</span>
              </h1>
              <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg w-full lg:max-w-lg">
                因梦前行；为生活而奋斗；助力各行各业发展；开源成就事业！<br />
                以用户为中心、以技术创新为基础、以开源共享为目标，推动科技创新，助力各行各业发展，促进和谐社会。
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/products">
                  <a
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    产品与服务
                  </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://github.com/odroe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    开源项目
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="hidden lg:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 justify-center items-center">
        <HoneHeroImage className="h-72 fill-current text-black dark:text-white block" />
      </div>
    </section>
  )
}
