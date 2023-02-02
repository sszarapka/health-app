import { Input, message } from 'antd'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from '../../constants/routes'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import Loading from '../../components/Loading'
import WelcomeWrapper from '../../components/WelcomeWrapper'

const Welcome = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState<number>(0)
  const [isFilled, setIsFilled] = useState<boolean>(false)
  const [messageApi, contextHolder] = message.useMessage()
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Wiek musi być większy od 0',
    })
  }
  const handleNext = () => {
    if (inputValue > 0) {
      // send to DB
      router.push(ROUTES.GENDER)
    } else {
      error()
    }
  }

  if (useRestrictedPage()) return <Loading />
  return (
    <WelcomeWrapper path={ROUTES.GENDER} title="Wiek">
      {contextHolder}
      <Input
        type="number"
        className="welcome__number"
        size="large"
        onPressEnter={handleNext}
        onChange={e => setInputValue(parseInt(e.target.value))}
      />
    </WelcomeWrapper>
  )
}

export default Welcome
