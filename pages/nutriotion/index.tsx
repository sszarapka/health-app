import { Typography } from 'antd'
import Meal from '../../components/Meal'
import MealIdea from '../../components/MealIdea'
const { Title } = Typography

import { RecipeList } from '../../types/types'

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
  {
    name: 'Pierozki z mięsem',
    type: 'Obiad',
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
    image:
      'https://chojnice24.pl/cmsdata/library/reklamowe/ppdomowejedzenie.jpg',
  },
  {
    name: 'Sushi',
    type: 'Kolacja',
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
    image:
      'https://czestochowanews.pl/foto/pics/631c49ba12094f86bb8d0ce0c3847e6d.jpg',
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
