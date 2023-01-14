import { Typography, Radio } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const { Text } = Typography
import WelcomeWrapper from '../../components/WelcomeWrapper'

const Gender = () => {
  const router = useRouter()
  const path = '/witaj/aktywnosc'
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
  }, [router])

  return (
    <WelcomeWrapper path={path} title="Cel">
      <Radio.Group
        size="large"
        className="welcome__select-container"
        defaultValue="Zbudować mięśnie"
      >
        <Radio value="Schudnąć" className="welcome__select">
          Schudnąć
        </Radio>
        <Radio value="Zbudować mięśnie" className="welcome__select">
          Zbudować mięśnie
        </Radio>
        <Radio value="Utrzymać wagę" className="welcome__select">
          Utrzymać wagę
        </Radio>
      </Radio.Group>
    </WelcomeWrapper>
  )
}

export default Gender
