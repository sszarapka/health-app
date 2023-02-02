import {
  PieChartFilled,
  DashboardFilled,
  ReadFilled,
  SettingFilled,
} from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faUtensils } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faUtensils)
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ROUTES } from '../constants/routes'

const Navbar = () => {
  const path = useRouter().pathname

  return (
    <nav className="nav">
      <Link
        href={ROUTES.DASHBOARD}
        className={path === '/' ? 'item-container active' : 'item-container'}
      >
        <PieChartFilled className="nav__item" />
        Panel
      </Link>
      <Link
        href={ROUTES.PROGRESS}
        className={
          path.includes('measurements')
            ? 'item-container active'
            : 'item-container'
        }
      >
        <DashboardFilled className="nav__item" />
        Postępy
      </Link>
      <Link
        href={ROUTES.NUTRITION}
        className={
          path.includes('nutrition')
            ? 'item-container active'
            : 'item-container'
        }
      >
        {/* <FontAwesomeIcon icon={['fas', 'utensils']} className="nav__item" /> */}
        Odywianie
      </Link>
      <Link
        href={ROUTES.BLOG}
        className={
          path.includes('blog') ? 'item-container active' : 'item-container'
        }
      >
        <ReadFilled className="nav__item" />
        Blog
      </Link>
      <Link
        href={ROUTES.SETTINGS}
        className={
          path.includes('settings') ? 'item-container active' : 'item-container'
        }
      >
        <SettingFilled className="nav__item" />
        Ustawienia
      </Link>
    </nav>
  )
}

export default Navbar
