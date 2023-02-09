import { Typography } from 'antd'
const { Title } = Typography
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import { ref, getDatabase, set } from 'firebase/database'
import { getAuth, signOut } from 'firebase/auth'
import { ROUTES } from '../constants/routes'
import { SettingsPageProps } from '../types/types'
import { useRestrictedPage } from '../hooks/useRestrictedPage'
import { useUser } from '../hooks/useUser'
import { useCalculateTargetValues } from '../hooks/useCalculateTargetValues'
import Loading from '../components/Loading'
import SettingsItem from '../components/SettingsItem'
import DangerButton from '../components/DangerButton'

const Settings = ({ userData }: SettingsPageProps) => {
  const router = useRouter()
  const user = useUser()

  const { waterTarget, calorieTarget, carbsTarget, proteinTarget, fatTarget } =
    useCalculateTargetValues(userData)

  const [valueChanged, setValueChanged] = useState<boolean>(false)
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
  }, [
    calorieTarget,
    carbsTarget,
    fatTarget,
    proteinTarget,
    user,
    valueChanged,
    waterTarget,
  ])

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
          setValueChanged={setValueChanged}
        />
        <SettingsItem
          label="Wiek"
          dbLabel="age"
          type="number"
          defaultValue={userData.age}
          setValueChanged={setValueChanged}
        />
        <SettingsItem
          label="Waga"
          dbLabel="weigth"
          type="number"
          defaultValue={userData.weigth}
          setValueChanged={setValueChanged}
        />
        <SettingsItem
          label="Wzrost"
          dbLabel="height"
          type="number"
          defaultValue={userData.height}
          setValueChanged={setValueChanged}
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
          setValueChanged={setValueChanged}
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
          setValueChanged={setValueChanged}
        />

        {/* <SettingsItem label="Tryb ciemny" type="switch" defaultValue={3} /> */}
      </div>
      <DangerButton className="settings__log-out" onClick={handleSignOut}>
        Wyloguj się
      </DangerButton>
    </section>
  )
}

export default Settings
