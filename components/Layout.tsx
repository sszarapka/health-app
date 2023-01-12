import Navbar from './Navbar'
type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="app-container">{children}</main>
      <Navbar />
    </>
  )
}

export default Layout
