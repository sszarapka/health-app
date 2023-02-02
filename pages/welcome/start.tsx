import { Typography, Button } from 'antd'
import WelcomeWrapper from '../../components/WelcomeWrapper'
const { Text, Title } = Typography
import { ROUTES } from '../../constants/routes'

import Loading from '../../components/Loading'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'

const Start = () => {
  if (useRestrictedPage()) return <Loading />
  return (
    <WelcomeWrapper path={ROUTES.DASHBOARD} title="">
      <div>
        <Title className="welcome-wrapper__title">To juz wszystko!</Title>
        <Text className="welcome-wrapper__info">
          Teraz mozesz w pełni korzytać z aplikacji
        </Text>
      </div>
    </WelcomeWrapper>
  )
}

export default Start
