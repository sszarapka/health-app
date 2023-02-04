import { Radio } from 'antd'
import { RadioGrupProps } from '../types/types'

const RadioGroup = ({ values, setInputValue }: RadioGrupProps) => {
  const radioOptions = values.map(value => (
    <Radio key={value} value={value} className="welcome__select">
      {value}
    </Radio>
  ))

  return (
    <Radio.Group
      size="large"
      className="welcome__select-container"
      defaultValue={values[0]}
      onChange={e => setInputValue(e.target.value)}
    >
      {radioOptions}
    </Radio.Group>
  )
}

export default RadioGroup
