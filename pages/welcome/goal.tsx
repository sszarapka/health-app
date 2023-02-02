import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from '../../constants/routes'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import Loading from '../../components/Loading'
import WelcomeWrapper from '../../components/WelcomeWrapper'
import RadioGroup from '../../components/RadioGroup'

const Goal = () => {
  const router = useRouter()
  const path = ROUTES.ACTIVITY
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
    <WelcomeWrapper path={path} title="Cel">
      <RadioGroup values={['Schudnąć', 'Zbudować mięśnie', 'Utrzymać wagę']} />
    </WelcomeWrapper>
  )
}

export default Goal
