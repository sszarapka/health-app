import { Button } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getDatabase, ref, child, get, set } from 'firebase/database'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ROUTES } from '../../constants/routes'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import Loading from '../../components/Loading'

const LogIn = () => {
  const router = useRouter()
  const provider = new GoogleAuthProvider()

  const [isRouterUsed, setIsRouterUsed] = useState<boolean>(false)

  const databaseRef = getDatabase()

  const handleLogIn = () => {
    signInWithPopup(getAuth(), provider)
      .then(async result => {
        const user = result.user
        set(ref(databaseRef, `users/${user.uid}/fullName`), user.displayName)
        set(
          ref(databaseRef, `users/${user.uid}/name`),
          user.displayName?.split(' ')[0]
        )

        await get(child(ref(databaseRef), `users/${user.uid}`)).then(
          snapshot => {
            if (snapshot.exists()) {
              const isSurveyFilled: boolean = snapshot.val().isSurveyFilled
              const path = isSurveyFilled ? ROUTES.DASHBOARD : ROUTES.WELCOME
              console.log(isSurveyFilled)
              if (!isRouterUsed) {
                router.push(path)
                setIsRouterUsed(true)
              }
            }
          }
        )
      })
      .catch(error => {
        alert(error)
      })
  }

  if (useRestrictedPage()) return <Loading />

  return (
    <>
      <section className="log-in">
        <Button className="log-in__button" size="large" onClick={handleLogIn}>
          <GoogleOutlined /> Zaloguj się z Google
        </Button>
      </section>
    </>
  )
}

export default LogIn
