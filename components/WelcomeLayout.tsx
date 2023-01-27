import { WelcomeLayoutProps } from '../types/types'

const WelcomeLayout = ({ children }: WelcomeLayoutProps) => {
  return <main className="welcome-container">{children}</main>
}

export default WelcomeLayout
