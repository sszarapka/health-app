interface WelcomeLayoutProps {
  children: React.ReactNode
}

const WelcomeLayout = ({ children }: WelcomeLayoutProps) => {
  return <main className="welcome-container">{children}</main>
}

export default WelcomeLayout
