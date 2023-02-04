import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getDatabase, ref, set } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ROUTES } from '../../constants/routes'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import Loading from '../../components/Loading'
import RadioGroup from '../../components/RadioGroup'
import WelcomeWrapper from '../../components/WelcomeWrapper'

const Gender = () => {
  const router = useRouter()
  const path = ROUTES.WEIGTH
  const [inputValue, setInputValue] = useState<string>('Męzczyzna')
  const [user] = useAuthState(getAuth())
  const userUid = user?.uid

  const handleNext = useCallback(() => {
    set(ref(getDatabase(), `users/${userUid}/generalInfo/gender`), inputValue)
    router.push(path)
  }, [inputValue, path, router, userUid])

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
    <WelcomeWrapper handleNext={handleNext} title="Płeć">
      <RadioGroup
        values={['Męzczyzna', 'Kobieta']}
        setInputValue={setInputValue}
      />
    </WelcomeWrapper>
  )
}

export default Gender
