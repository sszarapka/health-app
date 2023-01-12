import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import WelcomeLayout from '../components/WelcomeLayout'

import '../styles/styles.scss'
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter().pathname
  if (router.startsWith('/witaj'))
    return (
      <WelcomeLayout>
        <Component {...pageProps} />
      </WelcomeLayout>
    )
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
