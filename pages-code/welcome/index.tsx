import { Typography } from 'antd'
const { Text } = Typography
import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from '../../constants/routes'
import { WelcomePageProps } from '../../types/types'
import Loading from '../../components/Loading'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import WelcomeWrapper from '../../components/WelcomeWrapper'

const Welcome = ({ username }: WelcomePageProps) => {
  const router = useRouter()
  const handleNext = useCallback(() => router.push(ROUTES.GENDER), [router])

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        handleNext()
      }
    }
    document.addEventListener('keydown', keyDownHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [handleNext, router])

  if (useRestrictedPage() || !username) return <Loading />
  return (
    <WelcomeWrapper handleNext={handleNext} title={`Witaj ${username}`}>
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
