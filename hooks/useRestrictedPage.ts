import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import { ROUTES } from '../constants/routes'
import { useEffect, useState } from 'react'
import { getDatabase, ref, child, get } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

export function useRestrictedPage() {
  const router = useRouter()

  const [isRestricted, setIsRestricted] = useState<boolean>(true)
  const [isSurveyFilled, setIsSurveyFilled] = useState<boolean>()

  const [user, loading] = useAuthState(getAuth())
  const isLoginPage =
    router.pathname.includes('login') || router.pathname.includes('logowanie')

  const isWelcomePage =
    router.pathname.startsWith('/welcome') ||
    router.pathname.startsWith('/witaj')

  useEffect(() => {
    if (typeof window !== 'undefined' && !loading) {
      const cookies = new Cookies()
      cookies.set('uid', user?.uid, { path: '/' })

      get(child(ref(getDatabase()), `users/${user?.uid}`))
        .then(snapshot => {
          if (snapshot.exists()) {
            setIsSurveyFilled(snapshot.val().isSurveyFilled)
          }
        })
        .catch(error => {
          alert(error)
        })

      if (isSurveyFilled === undefined && !isLoginPage) setIsRestricted(true)
      else if (isSurveyFilled === false && !isWelcomePage) {
        setIsRestricted(true)
        router.push(ROUTES.WELCOME)
      } else if (isSurveyFilled === true && isWelcomePage) {
        router.push(ROUTES.DASHBOARD)
        setIsRestricted(true)
      } else if (!user && !isLoginPage) {
        router.push(ROUTES.LOGIN)
        setIsRestricted(true)
      } else if (!user && isLoginPage) {
        setIsRestricted(false)
      } else if (user && isLoginPage) {
        router.push(ROUTES.DASHBOARD)
        setIsRestricted(true)
      } else if (!user && isLoginPage) {
        setIsRestricted(false)
      } else if (user && !isLoginPage) {
        setIsRestricted(false)
      }
    }
  }, [isLoginPage, isSurveyFilled, isWelcomePage, loading, router, user])

  return isRestricted
}
