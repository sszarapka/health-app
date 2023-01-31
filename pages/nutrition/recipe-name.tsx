import { Typography, Image } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import { useIsAuthLoading } from '../../hooks/useIsAuthLoading'
import Loading from '../../components/Loading'
import { RecipeProps } from '../../types/types'

const mockedRecipe: RecipeProps = {
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
}

const Recipe = ({ name, type, ingredients, description }: RecipeProps) => {
  useRestrictedPage()
  const recipeIngredients = mockedRecipe.ingredients.map((ingredient, i) => (
    <li key={i} className="ingredients__item">
      {i + 1}. {ingredient}
    </li>
  ))
  if (useIsAuthLoading()) return <Loading />

  return (
    <section className="recipe">
      <Title level={2}>{mockedRecipe.name}</Title>
      <Image
        src={mockedRecipe.image}
        alt="obraz"
        className="recipe__image"
        preview={false}
      />
      <div className="recipe__macro">
        <Text>W: {mockedRecipe.macro.carbs}g</Text>
        <Text>B: {mockedRecipe.macro.protein}g</Text>
        <Text>T: {mockedRecipe.macro.fat}g</Text>
      </div>
      <Title level={4}>Składniki</Title>

      <ul className="recipe__ingredients">{recipeIngredients}</ul>
      <Title level={4}>Wykonanie</Title>

      <Paragraph className="recipe__description">
        {mockedRecipe.description}
      </Paragraph>
      <Text className="recipe__enjoy">Smacznego!</Text>
    </section>
  )
}

export default Recipe
