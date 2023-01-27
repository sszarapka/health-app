import { Input } from 'antd'
import { useRouter } from 'next/router'

import WelcomeWrapper from '../../components/WelcomeWrapper'
import { ROUTES } from '../../constants/routes'

const Welcome = () => {
  const router = useRouter()
  const path = ROUTES.GOAL
  return (
    <WelcomeWrapper path={path} title="Waga">
      <Input
        type="number"
        className="welcome__number"
        size="large"
        onPressEnter={() => router.push(path)}
      />
    </WelcomeWrapper>
  )
}

export default Welcome
