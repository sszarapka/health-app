import { InputNumber, Typography } from 'antd'
import { PlusCircleFilled, MinusCircleFilled } from '@ant-design/icons'
const { Title } = Typography
import { useState, useEffect, useRef } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { useUser } from '../hooks/useUser'
import { InputNumProps } from '../types/types'
enum OperationType {
  INCREMENT,
  DECREMENT,
}
const InputNum = ({
  title,
  dbTitle,
  size = 'small',
  defaultValue,
}: InputNumProps) => {
  const [value, setValue] = useState<number>(defaultValue)

  const handleChangeWithButtons = (type: OperationType) => {
    if (type === OperationType.INCREMENT)
      setValue(prev => Math.round((prev + 0.1) * 10) / 10)
    if (type === OperationType.DECREMENT)
      setValue(prev => Math.round((prev - 0.1) * 10) / 10)
  }
  const handleChangeWithInput = (value: number) => {
    setValue(Math.round(value * 10) / 10)
  }

  let timeRef = useRef<NodeJS.Timeout>()
  const user = useUser()
  useEffect(() => {
    clearTimeout(timeRef.current)
    timeRef.current = setTimeout(() => {
      set(ref(getDatabase(), `users/${user?.uid}/progress/${dbTitle}`), value)
    }, 1000)
  }, [dbTitle, user, value])

  return (
    <div className={size === 'small' ? 'input-section small' : 'input-section'}>
      <Title level={size === 'small' ? 5 : 4} className="input-section__title">
        {title}
      </Title>
      <div className="input-container">
        <MinusCircleFilled
          className="input-section__minus"
          onClick={() => handleChangeWithButtons(OperationType.DECREMENT)}
        />
        <InputNumber
          type="number"
          size="large"
          className="input-section__input"
          value={Number(value.toFixed(1))}
          min={1}
          max={999}
          controls={false}
          onBlur={e => handleChangeWithInput(Number(e.target.value))}
        />
        <PlusCircleFilled
          className="input-section__plus"
          onClick={() => handleChangeWithButtons(OperationType.INCREMENT)}
        />
      </div>
    </div>
  )
}

export default InputNum
