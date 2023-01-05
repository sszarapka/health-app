import { Button, Typography } from 'antd'
const { Text } = Typography
import { PlusCircleFilled } from '@ant-design/icons'
import ProductsList from './ProductsList'

interface MealProps {
  name: 'Śniadanie' | 'Obiad' | 'Kolacja'
}

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
          <PlusCircleFilled className="meal__add" />
        </div>
      </div>
      <ProductsList products={mockProducts} type="add" />
    </section>
  )
}

export default Meal
