import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from '../../constants/routes'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import Loading from '../../components/Loading'
import RadioGroup from '../../components/RadioGroup'
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
  }, [router])
  if (useRestrictedPage()) return <Loading />
  return (
    <WelcomeWrapper path={path} title="Płeć">
      <RadioGroup values={['Męzczyzna', 'Kobieta']} />
    </WelcomeWrapper>
  )
}

export default Gender
