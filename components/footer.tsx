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
          <p>备案号 - TODO</p>
      </div>
    </footer>
  )
}
