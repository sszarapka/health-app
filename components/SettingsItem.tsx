import { InputNumber, Typography, Select, Switch } from 'antd'
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

  const handleStringChange = (value: string) => {
    if (value) {
      setValue(value)
    }
  }
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseFloat(e.target.value)
    if (newValue >= 0 && newValue < 1000) {
      dbLabel === 'age'
        ? setValue(Math.floor(newValue))
        : setValue(newValue.toFixed(1))
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
        <InputNumber
          type="number"
          className="settings-item__input number"
          defaultValue={defaultValue as number}
          value={value}
          controls={false}
          onBlur={e => handleNumberChange(e)}
          size="large"
        />
      ) : (
        <Switch defaultChecked className="settings-item__switch" />
      )}
    </div>
  )
}

export default SettingsItem
