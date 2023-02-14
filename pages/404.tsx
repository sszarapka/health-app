import { Button, Result } from 'antd'
import Link from 'next/link'
import { ROUTES } from '../constants/routes'

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Strona nie istnieje"
      extra={
        <Link href={ROUTES.DASHBOARD}>
          <Button type="primary">Wróć na stronę główną</Button>
        </Link>
      }
    />
  )
}

export default NotFound
