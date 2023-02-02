import Navbar from './Navbar'
import { LayoutProps } from './../types/types'

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="app-container">{children}</main>
      <Navbar />
    </>
  )
}

export default Layout
