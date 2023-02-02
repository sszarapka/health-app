import { Input, Typography } from 'antd'
import { PlusCircleFilled, MinusCircleFilled } from '@ant-design/icons'
import { InputNumProps } from '../types/types'
const { Title } = Typography

const InputNum = ({ title, size = 'small' }: InputNumProps) => {
  return (
    <div className={size === 'small' ? 'input-section small' : 'input-section'}>
      <Title level={size === 'small' ? 5 : 4} className="input-section__title">
        {title}
      </Title>
      <div className="input-container">
        <MinusCircleFilled className="input-section__minus" />
        <Input
          type="number"
          size="large"
          className="input-section__input"
          defaultValue={20.8}
        />
        <PlusCircleFilled className="input-section__plus" />
      </div>
    </div>
  )
}

export default InputNum
