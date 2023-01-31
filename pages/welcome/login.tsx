import { GoogleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useIsAuthLoading } from '../../hooks/useIsAuthLoading'
import Loading from '../../components/Loading'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth'
import { ROUTES } from '../../constants/routes'
import { useEffect } from 'react'

// from database
let isSurveyFilled = false
const LogIn = () => {
  const router = useRouter()
  const provider = new GoogleAuthProvider()

  const handleLogIn = () => {
    signInWithPopup(getAuth(), provider)
      .then(result => {
        const path = isSurveyFilled ? ROUTES.DASHBOARD : ROUTES.WELCOME
        const user = result.user
        router.push(path)
        console.log(user)
      })
      .catch(error => {
        alert(error)
      })
  }
  const [user, loading] = useAuthState(getAuth())
  console.log(user?.displayName)

  useEffect(() => {
    if (!loading && user) router.push(ROUTES.DASHBOARD)
  }, [user, router, loading])
  if (useIsAuthLoading()) return <Loading />
  return (
    <section className="log-in">
      <Button className="log-in__button" size="large" onClick={handleLogIn}>
        <GoogleOutlined /> Zaloguj się z Google
      </Button>
    </section>
  )
}

export default LogIn
