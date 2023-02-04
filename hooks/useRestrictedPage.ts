import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import { ROUTES } from '../constants/routes'
import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

export function useRestrictedPage() {
  const router = useRouter()

  const [isRestricted, setIsRestricted] = useState<boolean>(true)
  const [user, loading] = useAuthState(getAuth())
  const isLoginPage =
    router.pathname.includes('login') || router.pathname.includes('logowanie')

  useEffect(() => {
    if (typeof window !== 'undefined' && !loading) {
      const cookies = new Cookies()
      cookies.set('uid', user?.uid, { path: '/' })

      if (!user && !isLoginPage) {
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
  }, [isLoginPage, loading, router, user])

  return isRestricted
}
