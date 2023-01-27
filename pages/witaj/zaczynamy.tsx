import { Typography, Button } from 'antd'
import WelcomeWrapper from '../../components/WelcomeWrapper'
const { Text, Title } = Typography
const LetsStart = () => {
  return (
    <WelcomeWrapper path="/" title="">
      <div>
        <Title className="welcome-wrapper__title">To juz wszystko!</Title>
        <Text className="welcome-wrapper__info">
          Teraz mozesz w pełni korzytać z aplikacji
        </Text>
      </div>
    </WelcomeWrapper>
  )
}

export default LetsStart
