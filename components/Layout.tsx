import Navbar from './Navbar'
type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Navbar />
    </>
  )
}

export default Layout
