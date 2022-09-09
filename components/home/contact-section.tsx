import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const contacts = [
    {
        name: '合作与投资',
        email: 'connect@odroe.com',
        phone: '+86 (028) 8582 0242',
        address: '成都市高新区益州大道北段388号8栋11楼1109',
        message: '我们正在寻求商务合作与投资，投资人或者商务合作对我们有意向可以联系我们。',
    },
    {
        name: '开源团队',
        email: 'hello@odroe.com',
        phone: '+86 (028) 8582 0242',
        address: 'https://github.com/odroe',
        message: '你希望加入我们开源团队或者对我们的开源产品有任何建议请随时联系我们，我们的开源团队非常欢迎你。',
    }
]

export default function HomeContactsSection() {
    return (
        <section id="cantact-us" className="bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">联系我们</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
                        精诚合作，服务至上
                    </p>
                </div>
                <div className="m-auto sm:flex sm:flex-row">
                    {contacts.map(item => (
                        <div className="sm:w-8/12 pt-6 text-gray-500">
                            <h2 className="text-xl leading-6 font-medium tracking-tight text-gray-600 sm:text-2xl dark:text-gray-200 ">{item.name}</h2>
                            <div className="pt-2 text-base text-gray-500 h-16">{item.message}</div>
                            <div className="flex mt-4">
                                <PhoneIcon className="h-6" />
                                <div className="ml-4">
                                    <p>{item.phone}</p>
                                    <p className="mt-2">{item.address}</p>
                                </div>
                            </div>
                            <div className="flex mt-6">
                                <EnvelopeIcon className="h-6" />
                                <div className="ml-4">
                                    {item.email}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}