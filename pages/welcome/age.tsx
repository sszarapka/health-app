import { Typography, Input } from 'antd'
import { useRouter } from 'next/router'
const { Text } = Typography
import WelcomeWrapper from '../../components/WelcomeWrapper'
import { ROUTES } from '../../constants/routes'

const Welcome = () => {
  const router = useRouter()
  //state - if input is NOT filled dont allow to proceed
  return (
    <WelcomeWrapper path={ROUTES.GENDER} title="Wiek">
      <Input
        type="number"
        className="welcome__number"
        size="large"
        onPressEnter={() => router.push(ROUTES.GENDER)}
      />
    </WelcomeWrapper>
  )
}

export default Welcome
