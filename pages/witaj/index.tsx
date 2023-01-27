import { Typography } from 'antd'

const { Text } = Typography
import WelcomeWrapper from '../../components/WelcomeWrapper'
import { ROUTES } from '../../constants/routes'

const Welcome = () => {
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
