import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getDatabase, ref, set } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ROUTES } from '../../constants/routes'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import Loading from '../../components/Loading'
import WelcomeWrapper from '../../components/WelcomeWrapper'
import RadioGroup from '../../components/RadioGroup'

const Goal = () => {
  const router = useRouter()

  const [inputValue, setInputValue] = useState<string>('Męzczyzna')
  const [user] = useAuthState(getAuth())
  const userUid = user?.uid

  const handleNext = useCallback(() => {
    set(ref(getDatabase(), `users/${userUid}/generalInfo/goal`), inputValue)
    router.push(ROUTES.ACTIVITY)
  }, [inputValue, router, userUid])

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
  if (useRestrictedPage()) return <Loading />
  return (
    <WelcomeWrapper handleNext={handleNext} title="Cel">
      <RadioGroup
        values={['Schudnąć', 'Zbudować mięśnie', 'Utrzymać wagę']}
        setInputValue={setInputValue}
      />
    </WelcomeWrapper>
  )
}

export default Goal
