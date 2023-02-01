import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import { useIsAuthLoading } from '../../hooks/useIsAuthLoading'
import Loading from '../../components/Loading'
import RadioGroup from '../../components/RadioGroup'

import WelcomeWrapper from '../../components/WelcomeWrapper'

const Gender = () => {
  useRestrictedPage()
  const router = useRouter()
  const path = '/witaj/zaczynamy'
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
    <WelcomeWrapper path={path} title="Aktywność">
      <RadioGroup values={['Niska', 'Umiarkowana', 'Wysoka']} />
    </WelcomeWrapper>
  )
}

export default Gender
