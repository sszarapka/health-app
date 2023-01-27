import { useRouter } from 'next/router'
import { useEffect } from 'react'

import RadioGroup from '../../components/RadioGroup'

import WelcomeWrapper from '../../components/WelcomeWrapper'

const Gender = () => {
  const router = useRouter()
  const path = '/witaj/waga'
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
    <WelcomeWrapper path={path} title="Płeć">
      <RadioGroup values={['Męzczyzna', 'Kobieta']} />
    </WelcomeWrapper>
  )
}

export default Gender
