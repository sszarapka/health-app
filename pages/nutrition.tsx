import { Typography } from 'antd'
import AddMeal from '../components/AddMeal'
import MealIdea from '../components/MealIdea'
const { Title } = Typography

const nutrition = () => {
  return (
    <>
      <Title level={2}>Posiłki</Title>
      <AddMeal name="Śniadanie" />
      <AddMeal name="Obiad" />
      <AddMeal name="Kolacja" />
      <Title level={2}>Propozycje na dzisiaj</Title>
      <MealIdea
        name="Naleśniory"
        type="Śniadanie"
        url="https://tygodnik.pl/news_foto/2018/0817/10127.jpg"
      />
      <MealIdea
        name="Pierogi z mięsem"
        type="Obiad"
        url="https://chojnice24.pl/cmsdata/library/reklamowe/ppdomowejedzenie.jpg"
      />
      <MealIdea
        name="Sushi chlebushi"
        type="Kolacja"
        url="https://czestochowanews.pl/foto/pics/631c49ba12094f86bb8d0ce0c3847e6d.jpg"
      />
    </>
  )
}

export default nutrition
