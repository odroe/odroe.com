import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function HomeCATSection() {
    return (
      <section className="bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50">
            <span className="block">对我们感兴趣？</span>
            <span className="block text-indigo-600">联系我们以得到更加准确的咨询与合作内容。</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="mailto:connect@odroe.com"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <EnvelopeIcon className="h-6 mr-2" />
                <span>发送邮件</span>
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#cantact-us"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                更多
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}
  