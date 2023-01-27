import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { GoogleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { Typography, Button } from 'antd'

const { Text, Title } = Typography
import { ROUTES } from '../../constants/routes'

// from database
let isSurveyFilled = false

const LogIn = () => {
  const provider = new GoogleAuthProvider()
  const router = useRouter()
  const handleLogIn = () => {
    signInWithPopup(getAuth(), provider)
      .then(result => {
        const path = isSurveyFilled ? ROUTES.DASHBOARD : ROUTES.WELCOME
        const user = result.user
        router.push(path)
        console.log(user)
      })

      .catch(error => {})
  }
  return (
    <section className="log-in">
      <Button className="log-in__button" size="large" onClick={handleLogIn}>
        <GoogleOutlined /> Zaloguj się z Google
      </Button>
    </section>
  )
}

export default LogIn
