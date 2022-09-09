import { GlobeAltIcon, ShieldCheckIcon, BoltIcon, FaceSmileIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: '全球化',
    description:
      '团队和所提供的产品及服务面向全球用户，我们不会因为肤色、种族、性别而歧视任何人！',
    icon: GlobeAltIcon,
  },
  {
    name: '安全可靠',
    description:
      '我们所提供的开源产品都是经过社区验证和公众监督的，私有化产品和服务也是在开源产品上进行演化而来。',
    icon: ShieldCheckIcon,
  },
  {
    name: '技术实力',
    description:
      '我们都是极客，我们都热爱生活！对技术的追求保持一颗求学的心。Flutter、Node.JS、TypeScript、Rust 这些都是我们所热爱的。',
    icon: BoltIcon,
  },
  {
    name: '诚信与法律',
    description:
      '秉承以人为本，用户为中心！法律是我们所必须遵守的最低标准，我们希望可以建立更高更可靠的关系与信任。',
    icon: FaceSmileIcon,
  },
]

export default function HomeMissionSection() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">愿景及使命</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
            One dream, One life
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            我们正在努力建设一个以开源为目标的理想国度，我们希望能够为各行各业以及创业者提供安全、稳定、可靠、可持续的产品和服务。
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
