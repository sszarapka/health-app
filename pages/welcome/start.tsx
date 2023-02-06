import { Typography } from 'antd'
const { Text, Title } = Typography
import { useCallback, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { child, get, getDatabase, ref, set } from 'firebase/database'
import { useCalculateTargetValues } from '../../hooks/useCalculateTargetValues'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import { useUser } from '../../hooks/useUser'
import { StartPageProps } from '../../types/types'
import WelcomeWrapper from '../../components/WelcomeWrapper'
import { ROUTES } from '../../constants/routes'
import Loading from '../../components/Loading'

const Start = ({ userData }: StartPageProps) => {
  const router = useRouter()
  const user = useUser()
  const { waterTarget, calorieTarget, carbsTarget, proteinTarget, fatTarget } =
    useCalculateTargetValues(userData)

  const handleNext = useCallback(() => {
    if (
      userData.age &&
      userData.weigth &&
      userData.height &&
      userData.goal &&
      userData.activity &&
      userData.gender
    )
      set(ref(getDatabase(), `users/${user?.uid}/isSurveyFilled`), true)

    set(
      ref(getDatabase(), `users/${user?.uid}/nutrition/waterTarget`),
      waterTarget
    )
    set(
      ref(getDatabase(), `users/${user?.uid}/nutrition/calorieTarget`),
      calorieTarget
    )
    set(
      ref(getDatabase(), `users/${user?.uid}/nutrition/carbsTarget`),
      carbsTarget
    )
    set(
      ref(getDatabase(), `users/${user?.uid}/nutrition/proteinTarget`),
      proteinTarget
    )
    set(ref(getDatabase(), `users/${user?.uid}/nutrition/fatTarget`), fatTarget)

    set(ref(getDatabase(), `users/${user?.uid}/nutrition/carbsCurrent`), 0)
    set(ref(getDatabase(), `users/${user?.uid}/nutrition/proteinCurrent`), 0)
    set(ref(getDatabase(), `users/${user?.uid}/nutrition/fatCurrent`), 0)

    router.push(ROUTES.DASHBOARD)
  }, [
    calorieTarget,
    carbsTarget,
    fatTarget,
    proteinTarget,
    router,
    user?.uid,
    userData,
    waterTarget,
  ])

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
    <WelcomeWrapper handleNext={handleNext} title="">
      <div>
        <Title className="welcome-wrapper__title">To juz wszystko!</Title>
        <Text className="welcome-wrapper__info">
          Teraz mozesz w pełni korzytać z aplikacji
        </Text>
      </div>
    </WelcomeWrapper>
  )
}

export default Start

export const getServerSideProps: GetServerSideProps = async context => {
  const dbRef = ref(getDatabase())
  const currentUid = context.req.cookies.uid

  const userData = await get(child(dbRef, `users/${currentUid}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return {
          age: snapshot.val().generalInfo.age || 0,
          weigth: snapshot.val().generalInfo.weigth || 0,
          goal: snapshot.val().generalInfo.goal || '',
          activity: snapshot.val().generalInfo.activity || '',
          gender: snapshot.val().generalInfo.gender || '',
          height: snapshot.val().generalInfo.height || 0,
        }
      }
    })
    .catch(error => {
      console.error(error)
    })

  return {
    props: { userData },
  }
}
