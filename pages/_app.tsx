import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

/**
 * The App component is the wrapper around all of the pages in the
 * application.
 * 
 * @param {AppProps} props The properties passed to the component.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
