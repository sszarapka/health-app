import { Image, Typography, Divider, Input, Select, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
const { Text } = Typography

const ProductAction = () => {
  return (
    <section className="action">
      <Image
        src="https://thumbs.dreamstime.com/b/t%C5%82a-ser-odizolowywaj%C4%85cy-kawa%C5%82ka-biel-42295261.jpg"
        alt="obraz"
        className="action__image"
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
      <Button type="primary" size="large" className="action__confirm">
        Dodaj produkt
      </Button>
      <Button danger className="action__delete">
        Usuń <DeleteOutlined />
      </Button>
    </section>
  )
}

export default ProductAction
