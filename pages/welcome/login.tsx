import { GoogleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'

import Loading from '../../components/Loading'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ROUTES } from '../../constants/routes'

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
