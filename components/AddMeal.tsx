import { Button, Typography } from 'antd'
const { Text } = Typography
import { PlusCircleFilled } from '@ant-design/icons'
import Meal from './Meal'

interface AddMealProps {
  name: 'Śniadanie' | 'Obiad' | 'Kolacja'
}

const AddMeal = ({ name }: AddMealProps) => {
  return (
    <section className="meal">
      <div className="add-meal-container">
        <Text className="meal__name">{name}</Text>
        <div className="meal-container">
          <Text className="meal__calorie">0 kcal</Text>
          <PlusCircleFilled className="meal__add" />
        </div>
      </div>
      <Meal name="Ser zółty" weigth={100} calories={100} />
      <Meal name="Ser zółty" weigth={100} calories={100} />
    </section>
  )
}

export default AddMeal
