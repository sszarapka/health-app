import { Typography, Radio } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const { Text } = Typography
import { ROUTES } from '../../constants/routes'

import WelcomeWrapper from '../../components/WelcomeWrapper'

const Gender = () => {
  const router = useRouter()
  const path = ROUTES.WEIGTH
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
    <WelcomeWrapper path={path} title="Płeć">
      <Radio.Group
        size="large"
        className="welcome__select-container"
        defaultValue="Męzczyzna"
      >
        <Radio value="Męzczyzna" className="welcome__select">
          Męzczyzna
        </Radio>
        <Radio value="Kobieta" className="welcome__select">
          Kobieta
        </Radio>
      </Radio.Group>
    </WelcomeWrapper>
  )
}

export default Gender
