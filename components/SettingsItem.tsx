import { Input, Typography, Select, Switch } from 'antd'
import { set, ref, getDatabase } from 'firebase/database'
const { Text } = Typography
import { useEffect, useState } from 'react'
import { useUser } from '../hooks/useUser'
import { SettingsItemProps } from '../types/types'

const SettingsItem = ({
  label,
  dbLabel,
  type,
  options,
  defaultValue,
}: SettingsItemProps) => {
  const [value, setValue] = useState<string | number>(defaultValue)
  const user = useUser()
  useEffect(() => {
    set(ref(getDatabase(), `users/${user?.uid}/generalInfo/${dbLabel}`), value)
  }, [dbLabel, user?.uid, value])

  return (
    <div className="settings-item">
      <Text className="settings-item__label">{label}</Text>
      {type === 'select' ? (
        <Select
          popupClassName="settings-item__input"
          className="settings-item__input"
          options={options}
          defaultActiveFirstOption={true}
          defaultValue={defaultValue}
          size="large"
          onChange={value => value && setValue(value)}
        />
      ) : type === 'number' ? (
        <Input
          type="number"
          className="settings-item__input number"
          defaultValue={defaultValue as number}
          onBlur={e => setValue(Number(e.target.value))}
        />
      ) : (
        <Switch defaultChecked className="settings-item__switch" />
      )}
    </div>
  )
}

export default SettingsItem
