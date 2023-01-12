import { Input } from 'antd'
import { useRouter } from 'next/router'

import WelcomeWrapper from '../../components/WelcomeWrapper'

const Welcome = () => {
  const router = useRouter()
  const path = '/witaj/cel'
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
