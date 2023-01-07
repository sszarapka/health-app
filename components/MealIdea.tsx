import Link from 'next/link'
import { Typography } from 'antd'
const { Text } = Typography

interface Recipe {
  name: string
  type: 'Śniadanie' | 'Obiad' | 'Kolacja'
  ingredients: string[]
  description: string
  macro: {
    carbs: number
    protein: number
    fat: number
  }
  image: string
}

interface MealIdeaProps {
  recipe: Recipe
  key: React.Key
}

const MealIdea = ({ recipe, key }: MealIdeaProps) => {
  return (
    <Link
      href="odzywianie/nazwa-przepisu"
      className="meal-idea"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url('${recipe.image}')`,
      }}
    >
      <Text className="meal-idea__type">{recipe.type}</Text>
      <Text className="meal-idea__name">{recipe.name}</Text>
    </Link>
  )
}

export default MealIdea
