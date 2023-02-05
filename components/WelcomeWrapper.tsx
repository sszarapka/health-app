import { Typography, Button } from 'antd'
const { Title } = Typography

import { WelcomeWrapperProps } from '../types/types'

const WelcomeWrapper = ({
  children,
  handleNext,
  title,
}: WelcomeWrapperProps) => {
  return (
    <section className="welcome-wrapper">
      <Title className="welcome-wrapper__title">{title}</Title>
      {children}

      <Button
        size="large"
        className="next__button welcome-wrapper__next"
        onClick={handleNext}
      >
        Dalej
      </Button>
    </section>
  )
}

export default WelcomeWrapper
