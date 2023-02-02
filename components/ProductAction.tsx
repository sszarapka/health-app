import { DeleteOutlined } from '@ant-design/icons'
import { Image, Typography, Divider, Input, Select, Button } from 'antd'
const { Text } = Typography
import Link from 'next/link'
import DangerButton from '../components/DangerButton'
import { ROUTES } from '../constants/routes'
import { ProductActionProps } from '../types/types'

const ProductAction = ({ type }: ProductActionProps) => {
  return (
    <section className="action">
      <Image
        src="https://thumbs.dreamstime.com/b/t%C5%82a-ser-odizolowywaj%C4%85cy-kawa%C5%82ka-biel-42295261.jpg"
        alt="obraz"
        className="action__image"
        preview={false}
      />
      <Text className="action__name">Serek kozi</Text>

      <div className="action__macro">
        <Text>W: 100g</Text>
        <Text>B: 100g</Text>
        <Text>T: 100g</Text>
      </div>
      <Divider />
      <div className="action__data">
        <Input type="number" className="data__weigth" size="large" />
        <Select
          options={[
            { value: 'gramy (g)', label: 'gramy (g)' },
            { value: 'porcja (25g)', label: 'porcja (25g)' },
          ]}
          className="data__type"
          size="large"
        />
      </div>
      <Link href={ROUTES.NUTRITION}>
        <Button type="primary" size="large" className="action__confirm">
          {type === 'add' ? 'Dodaj produkt' : 'Zapisz zmiany'}
        </Button>
      </Link>
      {type === 'edit' && (
        <Link href={ROUTES.NUTRITION}>
          <DangerButton className="action__delete">
            Usuń <DeleteOutlined />
          </DangerButton>
        </Link>
      )}
    </section>
  )
}

export default ProductAction
