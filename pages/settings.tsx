import { Typography } from 'antd'
const { Title } = Typography
import { useEffect } from 'react'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { ref, getDatabase, get, child, set } from 'firebase/database'
import { getAuth, signOut } from 'firebase/auth'
import { ROUTES } from '../constants/routes'
import { SettingsPageProps } from '../types/types'
import { useRestrictedPage } from '../hooks/useRestrictedPage'
import { useCalculateTargetValues } from '../hooks/useCalculateTargetValues'
import Loading from '../components/Loading'
import SettingsItem from '../components/SettingsItem'
import DangerButton from '../components/DangerButton'
import { useUser } from '../hooks/useUser'

const Settings = ({ userData }: SettingsPageProps) => {
  const router = useRouter()
  const user = useUser()

  const { waterTarget, calorieTarget, carbsTarget, proteinTarget, fatTarget } =
    useCalculateTargetValues(userData)

  const handleSignOut = () => {
    const cookies = new Cookies()
    cookies.remove('uid', { path: '/' })

    signOut(getAuth())
    router.push(ROUTES.LOGIN)
  }

  useEffect(() => {
    if (user) {
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
      set(
        ref(getDatabase(), `users/${user?.uid}/nutrition/fatTarget`),
        fatTarget
      )
    }
  })

  if (useRestrictedPage() || !userData) return <Loading />
  return (
    <section className="settings">
      <div className="settings-container">
        <Title level={2}>Ustawienia</Title>

        <SettingsItem
          label="Płeć"
          dbLabel="gender"
          type="select"
          options={[
            { label: 'Męzczyzna', value: 'Męzczyzna' },
            { label: 'Kobieta', value: 'Kobieta' },
          ]}
          defaultValue={userData.gender}
        />
        <SettingsItem
          label="Wiek"
          dbLabel="age"
          type="number"
          defaultValue={userData.age}
        />
        <SettingsItem
          label="Waga"
          dbLabel="weigth"
          type="number"
          defaultValue={userData.weigth}
        />
        <SettingsItem
          label="Wzrost"
          dbLabel="height"
          type="number"
          defaultValue={userData.height}
        />

        <SettingsItem
          label="Cel"
          dbLabel="goal"
          type="select"
          options={[
            { label: 'Schudnąć', value: 'Schudnąć' },
            { label: 'Zgrubnąć', value: 'Zgrubnąć' },
          ]}
          defaultValue={userData.goal}
        />
        <SettingsItem
          label="Aktywność"
          dbLabel="activity"
          type="select"
          options={[
            { label: 'Niska', value: 'Niska' },
            { label: 'Umiarkowana', value: 'Umiarkowana' },
            { label: 'Wysoka', value: 'Wysoka' },
          ]}
          defaultValue={userData.activity}
        />

        {/* <SettingsItem label="Tryb ciemny" type="switch" defaultValue={3}/> */}
      </div>
      <DangerButton className="settings__log-out" onClick={handleSignOut}>
        Wyloguj się
      </DangerButton>
    </section>
  )
}

export default Settings

export const getServerSideProps: GetServerSideProps = async context => {
  const dbRef = ref(getDatabase())
  const currentUid = context.req.cookies.uid

  let userData
  if (currentUid) {
    userData = await get(child(dbRef, `users/${currentUid}`))
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
  } else userData = null

  return {
    props: { userData },
  }
}
