import { Input, Typography } from 'antd'
import { PlusCircleFilled, MinusCircleFilled } from '@ant-design/icons'

const { Title } = Typography

interface InputNumProps {
  title: string
  size: 'small' | 'large'
}

const InputNum = ({ title, size }: InputNumProps) => {
  return (
    <section
      className={size === 'small' ? 'input-section small' : 'input-section'}
    >
      <Title level={size === 'small' ? 5 : 4} className="input-section__title">
        {title}
      </Title>
      <div className="input-container">
        <MinusCircleFilled className="input-section__minus" />
        <Input type="number" size="large" className="input-section__input" />
        <PlusCircleFilled className="input-section__plus" />
      </div>
    </section>
  )
}

export default InputNum
