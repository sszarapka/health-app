import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { GoogleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { Typography, Button } from 'antd'

const { Text, Title } = Typography

const LogIn = () => {
  const provider = new GoogleAuthProvider()
  const router = useRouter()
  const handleLogIn = () => {
    signInWithPopup(getAuth(), provider)
      .then(result => {
        const user = result.user
        router.push('/')
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
