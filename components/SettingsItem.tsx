import { Input, Typography, Select, Switch } from 'antd'
const { Text } = Typography

interface SettingsItemProps {
  label: string
  type: 'select' | 'number' | 'switch'
  options?: {
    value: string
    label: string
  }[]
}

const SettingsItem = ({ label, type, options }: SettingsItemProps) => {
  return (
    <div className="settings-item">
      <Text className="settings-item__label">{label}</Text>
      {type === 'select' ? (
        <Select
          popupClassName="settings-item__input"
          className="settings-item__input"
          options={options}
          defaultActiveFirstOption={true}
          size="large"
        />
      ) : type === 'number' ? (
        <Input type="number" className="settings-item__input number" />
      ) : (
        <Switch defaultChecked className="settings-item__switch" />
      )}
    </div>
  )
}

export default SettingsItem
