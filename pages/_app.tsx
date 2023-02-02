import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase-config'
import Layout from '../components/Layout'
import WelcomeLayout from '../components/WelcomeLayout'

import '../styles/styles.scss'
export default function App({ Component, pageProps }: AppProps) {
  const app = initializeApp(firebaseConfig)

  const router = useRouter().pathname

  if (router.startsWith('/welcome'))
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
