import { useRouter } from 'next/router'
import {
  PieChartFilled,
  PieChartOutlined,
  DashboardFilled,
  ReadFilled,
  SettingFilled,
} from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, faUtensils)
import Link from 'next/link'

const Navbar = () => {
  const path = useRouter().pathname

  return (
    <nav className="nav">
      <Link
        href="/"
        className={path === '/' ? 'item-container active' : 'item-container'}
      >
        <PieChartFilled className="nav__item" />
        Panel
      </Link>
      <Link
        href="/pomiary"
        className={
          path.includes('pomiary') ? 'item-container active' : 'item-container'
        }
      >
        <DashboardFilled className="nav__item" />
        Postępy
      </Link>
      <Link
        href="/odzywianie"
        className={
          path.includes('odzywianie')
            ? 'item-container active'
            : 'item-container'
        }
      >
        <FontAwesomeIcon icon={['fas', 'utensils']} className="nav__item" />
        Odywianie
      </Link>
      <Link
        href="/blog"
        className={
          path.includes('blog') ? 'item-container active' : 'item-container'
        }
      >
        <ReadFilled className="nav__item" />
        Blog
      </Link>
      <Link
        href="/ustawienia"
        className={
          path.includes('ustawienia')
            ? 'item-container active'
            : 'item-container'
        }
      >
        <SettingFilled className="nav__item" />
        Ustawienia
      </Link>
    </nav>
  )
}

export default Navbar
