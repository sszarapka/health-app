import { Typography } from 'antd'
const { Text } = Typography
import Link from 'next/link'
import { MealIdeaProps } from '../types/types'

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
