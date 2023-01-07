import { Typography } from 'antd'
import Meal from '../../components/Meal'
import MealIdea from '../../components/MealIdea'
const { Title } = Typography

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

type RecipeList = Recipe[]

const mockedRecipe: RecipeList = [
  {
    name: 'Naleśniory',
    type: 'Śniadanie',
    ingredients: [
      '30g proszku do pieczenia',
      '100g mąki',
      '450g dobrego humoru',
      'pajda chleba',
    ],
    description:
      'lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem lore lorem ipsum dolor sit amet lorem',
    macro: {
      carbs: 56,
      protein: 34,
      fat: 19,
    },
    image: 'https://tygodnik.pl/news_foto/2018/0817/10127.jpg',
  },
]

const nutrition = () => {
  const mealIdeas = mockedRecipe.map((recipe, i) => (
    <MealIdea recipe={recipe} key={i} />
  ))
  return (
    <>
      <Title level={2}>Posiłki</Title>
      <Meal name="Śniadanie" />
      <Meal name="Obiad" />
      <Meal name="Kolacja" />
      <Title level={2}>Propozycje na dzisiaj</Title>
      {mealIdeas}
    </>
  )
}

export default nutrition
