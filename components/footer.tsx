import FullLogo from "./full-logo";

export default function Footer() {
  const now = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-black w-full">
      <div className="p-6 pt-16 flex-col justify-center items-center flex text-black dark:text-white">
        <FullLogo className="w-auto h-8 sm:h-10 fill-current" />
        <div className="pt-2">One dream, One life.</div>
      </div>
      <div className="text-center pb-6 text-gray-700 dark:text-gray-400">
          <p>&copy; {now} 四川耦左科技有限公司</p>
          <p>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">蜀ICP备2021021384号-2</a>
            <a className="ml-4" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51019002004080" target="_blank" rel="noopener noreferrer">
              <img src="/beian.png" className="inline w-5" />
              川公网安备51019002004080号
            </a>
          </p>
      </div>
    </footer>
  )
}
