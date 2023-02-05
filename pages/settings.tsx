import { Typography } from 'antd'
const { Title } = Typography
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import { getAuth, signOut } from 'firebase/auth'
import { ROUTES } from '../constants/routes'
import { useRestrictedPage } from '../hooks/useRestrictedPage'
import Loading from '../components/Loading'
import SettingsItem from '../components/SettingsItem'
import DangerButton from '../components/DangerButton'

const Settings = () => {
  const router = useRouter()
  const handleSignOut = () => {
    const cookies = new Cookies()
    cookies.remove('uid', { path: '/' })

    signOut(getAuth())
    router.push(ROUTES.LOGIN)
  }

  if (useRestrictedPage()) return <Loading />
  return (
    <section className="settings">
      <div className="settings-container">
        <Title level={2}>Ustawienia</Title>

        <SettingsItem label="Wiek" type="number" />
        <SettingsItem
          label="Płeć"
          type="select"
          options={[
            { label: 'Męzczyzna', value: 'Męzczyzna' },
            { label: 'Kobieta', value: 'Kobieta' },
          ]}
        />
        <SettingsItem label="Waga" type="number" />
        <SettingsItem
          label="Cel"
          type="select"
          options={[
            { label: 'Schudnąć', value: 'Schudnąć' },
            { label: 'Zgrubnąć', value: 'Zgrubnąć' },
          ]}
        />
        <SettingsItem
          label="Aktywność"
          type="select"
          options={[
            { label: 'Niska', value: 'Niska' },
            { label: 'Umiarkowana', value: 'Umiarkowana' },
            { label: 'Wysoka', value: 'Wysoka' },
          ]}
        />

        <SettingsItem label="Tryb ciemny" type="switch" />
      </div>
      <DangerButton className="settings__log-out" onClick={handleSignOut}>
        Wyloguj się
      </DangerButton>
    </section>
  )
}

export default Settings
