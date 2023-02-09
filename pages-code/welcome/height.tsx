import { InputNumber } from 'antd'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getDatabase, ref, set } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { ROUTES } from '../../constants/routes'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import Loading from '../../components/Loading'
import WelcomeWrapper from '../../components/WelcomeWrapper'

const Height = () => {
  const router = useRouter()

  const [inputValue, setInputValue] = useState<number>(0)
  const [user] = useAuthState(getAuth())
  const userUid = user?.uid

  const handleNext = () => {
    set(ref(getDatabase(), `users/${userUid}/generalInfo/height`), inputValue)
    inputValue > 0 && router.push(ROUTES.GOAL)
  }

  if (useRestrictedPage()) return <Loading />
  return (
    <WelcomeWrapper handleNext={handleNext} title="Wzrost">
      <InputNumber
        type="number"
        className="welcome__number"
        size="large"
        onPressEnter={handleNext}
        min={1}
        max={999}
        step={1}
        onChange={value => value && setInputValue(value)}
      />
    </WelcomeWrapper>
  )
}

export default Height
