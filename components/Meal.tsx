import { Image } from 'antd'
import { Typography } from 'antd'

const { Text } = Typography

interface MealProps {
  name: string
  weigth: number
  calories: number
}

const Meal = ({ name, weigth, calories }: MealProps) => {
  return (
    <section className="meal-item">
      <Image
        src="https://thumbs.dreamstime.com/b/t%C5%82a-ser-odizolowywaj%C4%85cy-kawa%C5%82ka-biel-42295261.jpg"
        alt="obraz"
        className="meal-item__image"
      />
      <div className="meal-item__info">
        <Text className="meal-item__name">{name}</Text>
        <div className="info-container">
          <Text className="meal-item__weigth">{weigth}g ∙ </Text>
          <Text className="meal-item__calories">{calories}kcal</Text>
        </div>
      </div>
    </section>
  )
}

export default Meal
