import { Typography, Button } from 'antd'
const { Title } = Typography
import Link from 'next/link'

import { WelcomeWrapperProps } from '../types/types'

const WelcomeWrapper = ({ children, path, title }: WelcomeWrapperProps) => {
  return (
    <section className="welcome-wrapper">
      <Title className="welcome-wrapper__title">{title}</Title>
      {children}
      <Link href={path} className="welcome-wrapper__next">
        <Button size="large" className="next__button">
          Dalej
        </Button>
      </Link>
    </section>
  )
}

export default WelcomeWrapper
