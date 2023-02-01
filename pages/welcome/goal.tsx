import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import { useIsAuthLoading } from '../../hooks/useIsAuthLoading'
import Loading from '../../components/Loading'
import WelcomeWrapper from '../../components/WelcomeWrapper'
import RadioGroup from '../../components/RadioGroup'

const Goal = () => {
  useRestrictedPage()
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
  if (useIsAuthLoading()) return <Loading />
  return (
    <WelcomeWrapper path={path} title="Cel">
      <RadioGroup values={['Schudnąć', 'Zbudować mięśnie', 'Utrzymać wagę']} />
    </WelcomeWrapper>
  )
}

export default Goal
