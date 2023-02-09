import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { firebaseConfig } from '../firebase-config'
import { ROUTES } from '../constants/routes'
import Layout from '../components/Layout'
import WelcomeLayout from '../components/WelcomeLayout'

export default function App({ Component, pageProps }: AppProps) {
  if (!getApps().length) {
    initializeApp(firebaseConfig)
  } else {
    getApp()
  }
  const router = useRouter().pathname

  return (
    <>
      {router.startsWith(ROUTES.WELCOME) ? (
        <WelcomeLayout>
          <Component {...pageProps} />
        </WelcomeLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}
