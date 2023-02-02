import { Typography } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'
const { Text } = Typography
import Link from 'next/link'
import { MealProps } from '../types/types'
import ProductsList from './ProductsList'

const Meal = ({ name }: MealProps) => {
  const mockProducts = [
    {
      name: 'Serek',
      weigth: 100,
      calories: 100,
    },
    {
      name: 'Serek',
      weigth: 100,
      calories: 100,
    },
    {
      name: 'Serek',
      weigth: 100,
      calories: 100,
    },
  ]
  return (
    <section className="meal">
      <div className="add-meal-container">
        <Text className="meal__name">{name}</Text>
        <div className="meal-container">
          <Text className="meal__calorie">0 kcal</Text>
          <Link href="/odzywianie/znajdz-produkt">
            <PlusCircleFilled className="meal__add" />
          </Link>
        </div>
      </div>
      <ProductsList products={mockProducts} type="edit" />
    </section>
  )
}

export default Meal
