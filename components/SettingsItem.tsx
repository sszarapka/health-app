import { Input, Typography, Select, Switch } from 'antd'
import { set, ref, getDatabase } from 'firebase/database'
const { Text } = Typography
import { useEffect, useState } from 'react'
import { useCalculateTargetValues } from '../hooks/useCalculateTargetValues'
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

  const handleStringChange = (value: string) => {
    if (value) {
      setValue(value)
    }
  }
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value > 0 && value < 1000) {
      setValue(Number(e.target.value))
    }
  }

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
          onChange={value => handleStringChange(value as string)}
        />
      ) : type === 'number' ? (
        <Input
          type="number"
          className="settings-item__input number"
          defaultValue={defaultValue as number}
          onBlur={e => handleNumberChange(e)}
        />
      ) : (
        <Switch defaultChecked className="settings-item__switch" />
      )}
    </div>
  )
}

export default SettingsItem
