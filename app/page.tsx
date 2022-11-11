const Hero = () => {
  return (
    <div className="container mx-auto relative pt-36 before:absolute before:bg-gradient-to-r before:from-indigo-500 before:to-blue-500 before:opacity-20 before:blur-3xl before:inset-36 before:-mb-12 before:-z-10 dark:before:inset-0 dark:before:mt-12 dark:before:-mb-0">
      <h1 className="text-6xl md:text-9xl font-medium text-center text-black dark:text-white px-6 md:px-0">Hi, We're Odroe</h1>
      <div className='text-center text-base italic text-gray-900 dark:text-gray-400'>One dream, One life.</div>
      <div className="w-full sm:w-2/3 lg:1/2 px-6 md:px-0 mx-auto mt-6 text-2xl text-gray-500 text-center dark:text-gray-300">We are creative, creating tools and projects that are easy to use for developers and teams. We can also provide you with high-quality MVP project implementation solutions and assistance.</div>
    </div>
  )
}

const statistics: { title: string, description: string }[] = [
  {
    title: '2019',
    description: 'We started our journey'
  },
  {
    title: '100%',
    description: 'Remote employees'
  },
  {
    title: '10+',
    description: 'Customers'
  },
  {
    title: '20+',
    description: 'Open source projects',
  },
];
const Statistic = () => {
  return (
    <div className="container mx-auto mt-24 lg:flex lg:flex-row lg:justify-between grid grid-cols-2 gap-y-8">
      {statistics.map(({ title, description }, index) => (
        <div className="flex flex-col items-center" key={index}>
          <span className="text-4xl md:text-6xl font-bold text-black dark:text-white">{title}</span>
          <span className="text-xs md:text-xl font-medium text-gray-500 mt-2 dark:text-gray-400">{description}</span>
        </div>
      ))}
    </div>
  )
}

const Story = () => {
  return (
    <div className="container mx-auto mt-24">
      <div className="w-full md:w-2/3 border-l-4 border-black py-4 md:py-12 px-6 md:pr-0 md:pl-12 lg:pl-24 dark:border-white/60">
        <h3 className="text-gray-500 text-xl uppercase font-medium dark:text-gray-400">Story</h3>
        <h1 className="text-black text-3xl capitalize font-bold dark:text-white/95">The Founders</h1>
        <div className="mt-6 text-black dark:text-white/90">
          <a href="https://twitter.com/shiweidu" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-indigo-600 dark:text-indigo-400">Seven Du</a> discovered his interest in programming when he first entered an Internet cafe at the age of 14. Two years later, he dropped out of school for some reasons. He started to teach himself programming. He went to Internet cafes to learn or write codes on paper without a computer.
          <br />
          <br />
          After the age of 18, he embarked on a formal programming journey. In the ten years of work, he never tired of learning new programming knowledge and programming languages, so that he can do his job well.
        </div>
      </div>

      <div className="w-full md:w-4/5 lg:w-3/5 border-r-4 border-black pr-6 md:pr-12 lg:pr-24 py-12 text-right ml-auto mt-12 dark:border-white/60">
        <h3 className="text-gray-500 text-xl uppercase font-medium dark:text-gray-400">Story</h3>
        <h1 className="text-black text-3xl capitalize font-bold dark:text-white/95">The Company</h1>
        <div className="mt-6 text-black dark:text-white/90">
          Odroe was born in 2019, and has developed a strategic deployment with open source as the core since its inception.
          <br />
          <br />
          Since our inception, we have developed many open source projects to helped more that 1000+ developers and teams.
          We've also built-quality MVP project implementation solutions and assistance for more than 10+ customers.
        </div>
      </div>
    </div>
  )
}

const Mission = () => (
  <div className="container mx-auto w-full lg:w-3/5 text-center mt-12 mb-6 lg:my-48 text-2xl font-bold text-black dark:text-white/90 px-6">
    <div className="italic font-light text-xl">Mission</div>
    "Our goal is to provide developers with easy-to-use tools and projects to enhance the programming experience."
  </div>
)

export default function Home() {
  return (
    <>
      <Hero />
      <Statistic />
      <Story />
      <Mission />
    </>
  )
}
