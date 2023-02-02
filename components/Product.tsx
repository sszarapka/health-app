import { RightOutlined, FormOutlined } from '@ant-design/icons'
import { Image, Typography } from 'antd'
const { Text } = Typography
import Link from 'next/link'
import { ProductProps } from '../types/types'

const Product = ({ name, weigth, calories, type }: ProductProps) => {
  return (
    <Link
      href={
        type === 'edit'
          ? '/odzywianie/edytuj-produkt'
          : '/odzywianie/dodaj-produkt'
      }
      className="product"
    >
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
        <FormOutlined className="product__action" />
      ) : (
        <RightOutlined className="product__action" />
      )}
    </Link>
  )
}

export default Product
