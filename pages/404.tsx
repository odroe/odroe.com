import Head from "next/head";

export default function Custom404() {
  return (
    <div className="w-full h-screen relative -mt-64 pt-64 sm:-mt-72 sm:pt-72 z-0">
      <Head>
          <title>404 - 耦左科技 | Odroe</title>
      </Head>
      <div className="w-full h-full flex-col sm:flex-row flex justify-center items-center sm:divide-x-4 sm:dark:divide-white sm:divide-black">
        <div className="text-4xl pr-4">404</div>
        <h1 className="text-4xl pl-4">页面未找到</h1>
      </div>
    </div>
  );
}