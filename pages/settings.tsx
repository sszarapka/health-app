import { Typography, Button } from 'antd'
import { getAuth, signOut } from 'firebase/auth'
import { ROUTES } from '../constants/routes'
import { useRouter } from 'next/router'
import { useRestrictedPage } from '../hooks/useRestrictedPage'
import { useIsAuthLoading } from '../hooks/useIsAuthLoading'
import Loading from '../components/Loading'
import SettingsItem from '../components/SettingsItem'
const { Title } = Typography
import DangerButton from '../components/DangerButton'
const Settings = () => {
  useRestrictedPage()
  const router = useRouter()
  const handleSignOut = () => {
    signOut(getAuth())
    router.push(ROUTES.LOGIN)
  }
  if (useIsAuthLoading()) return <Loading />

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
