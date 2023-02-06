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

  const [user, loading] = useAuthState(getAuth())
  const isLoginPage =
    router.pathname.includes('login') || router.pathname.includes('logowanie')

  const isWelcomePage =
    router.pathname.startsWith('/welcome') ||
    router.pathname.startsWith('/witaj')
  const [calledPush, setCalledPush] = useState(false)

  useEffect(() => {
    async function restrictedPage() {
      if (user) {
        await get(child(ref(getDatabase()), `users/${user?.uid}`))
          .then(snapshot => {
            if (snapshot.exists()) {
              const isSurveyFilled = snapshot.val().isSurveyFilled

              if (typeof window !== 'undefined' && !loading) {
                const cookies = new Cookies()
                cookies.set('uid', user?.uid, { path: '/' })

                if (user) {
                  if (isLoginPage) {
                    setIsRestricted(true)
                    !calledPush && router.push(ROUTES.DASHBOARD)
                    setCalledPush(true)
                  } else if (isWelcomePage) {
                    if (isSurveyFilled) {
                      setIsRestricted(true)
                      !calledPush && router.push(ROUTES.DASHBOARD)
                      setCalledPush(true)
                    } else if (!isSurveyFilled) {
                      setIsRestricted(false)
                    }
                  } else {
                    if (!isSurveyFilled) {
                      setIsRestricted(true)
                      !calledPush && router.push(ROUTES.WELCOME)
                      setCalledPush(true)
                    } else if (isSurveyFilled) {
                      setIsRestricted(false)
                    }
                  }
                }
              }
            }
          })
          .catch(error => {
            alert(error)
          })
      }
      if (!user) {
        if (isLoginPage) {
          setIsRestricted(false)
        } else {
          setIsRestricted(true)
          !calledPush && router.push(ROUTES.LOGIN)
          setCalledPush(true)
        }
      }
      // if (typeof window !== 'undefined' && !loading) {
      //   const cookies = new Cookies()
      //   cookies.set('uid', user?.uid, { path: '/' })

      //   if (user) {
      //     if (isLoginPage) {
      //       setIsRestricted(true)
      //       !calledPush && router.push(ROUTES.DASHBOARD)
      //       setCalledPush(true)
      //     } else if (isWelcomePage) {
      //       if (isSurveyFilled) {
      //         setIsRestricted(true)
      //         !calledPush && router.push(ROUTES.DASHBOARD)
      //         setCalledPush(true)
      //       } else if (!isSurveyFilled) {
      //         setIsRestricted(false)
      //       }
      //     } else {
      //       if (!isSurveyFilled) {
      //         setIsRestricted(true)
      //         !calledPush && router.push(ROUTES.WELCOME)
      //         setCalledPush(true)
      //       } else if (isSurveyFilled) {
      //         setIsRestricted(false)
      //       }
      //     }
      //   } else if (!user) {
      //     if (isLoginPage) {
      //       setIsRestricted(false)
      //     } else {
      //       setIsRestricted(true)
      //       !calledPush && router.push(ROUTES.LOGIN)
      //       setCalledPush(true)
      //     }
      //   }
      // }
    }
    restrictedPage()
  }, [calledPush, isLoginPage, isWelcomePage, loading, router, user])

  return isRestricted
}
