import { Typography, Input } from 'antd'
import { useRouter } from 'next/router'
const { Text } = Typography
import WelcomeWrapper from '../../components/WelcomeWrapper'

const Welcome = () => {
  const router = useRouter()
  //state - if input is filled
  return (
    <WelcomeWrapper path="/witaj/plec" title="Wiek">
      <Input
        type="number"
        className="welcome__number"
        size="large"
        onPressEnter={() => router.push('/witaj/plec')}
      />
    </WelcomeWrapper>
  )
}

export default Welcome
