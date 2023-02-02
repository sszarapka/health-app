import { Typography } from 'antd'
const { Text } = Typography
import { ROUTES } from '../../constants/routes'
import Loading from '../../components/Loading'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import WelcomeWrapper from '../../components/WelcomeWrapper'

const Welcome = () => {
  if (useRestrictedPage()) return <Loading />
  return (
    <WelcomeWrapper path={ROUTES.AGE} title="Witaj Nazwa!">
      <div className="welcome__container">
        <Text className="welcome__info">
          Przed rozpoczęciem potrzebujemy o Tobie kilku informacji.
        </Text>

        <Text className="welcome__instruction">
          Przejdź dalej, aby wypełnić ankietę.
        </Text>
      </div>
    </WelcomeWrapper>
  )
}

export default Welcome
