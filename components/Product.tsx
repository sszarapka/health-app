import { Image } from 'antd'
import { Typography } from 'antd'
import { RightOutlined, EditOutlined, FormOutlined } from '@ant-design/icons'
const { Text } = Typography

interface ProductProps {
  name: string
  weigth: number
  calories: number
  type: 'add' | 'edit'
}

const Product = ({ name, weigth, calories, type }: ProductProps) => {
  return (
    <div className="product">
      <Image
        src="https://thumbs.dreamstime.com/b/t%C5%82a-ser-odizolowywaj%C4%85cy-kawa%C5%82ka-biel-42295261.jpg"
        alt="obraz"
        className="product__image"
      />
      <div className="product__info">
        <Text className="product__name">{name}</Text>
        <div className="info-container">
          <Text className="product__weigth">{weigth}g ∙ </Text>
          <Text className="product__calories">{calories}kcal</Text>
        </div>
      </div>
      {type === 'edit' ? (
        <RightOutlined className="product__action" />
      ) : (
        <FormOutlined className="product__action" />
      )}
    </div>
  )
}

export default Product
