import { Typography, Radio } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const { Text } = Typography
import { ROUTES } from '../../constants/routes'
import WelcomeWrapper from '../../components/WelcomeWrapper'

const Gender = () => {
  const router = useRouter()
  const path = ROUTES.START
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault()

        router.push(path)
      }
    }
    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [path, router])

  return (
    <WelcomeWrapper path={path} title="Aktywność">
      <Radio.Group
        size="large"
        className="welcome__select-container"
        defaultValue="Umiarkowana"
      >
        <Radio value="Wysoka" className="welcome__select">
          Wysoka
        </Radio>
        <Radio value="Umiarkowana" className="welcome__select">
          Umiarkowana
        </Radio>
        <Radio value="Niska" className="welcome__select">
          Niska
        </Radio>
      </Radio.Group>
    </WelcomeWrapper>
  )
}

export default Gender
