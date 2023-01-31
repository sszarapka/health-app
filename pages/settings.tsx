import { Typography, Button } from 'antd'

import SettingsItem from '../components/SettingsItem'
const { Title } = Typography
import DangerButton from '../components/DangerButton'
const settings = () => {
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
      <DangerButton className="settings__log-out">Wyloguj się</DangerButton>
    </section>
  )
}

export default settings
