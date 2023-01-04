import { Typography } from 'antd'
const { Text } = Typography

interface MealIdeaProps {
  name: string
  type: 'Śniadanie' | 'Obiad' | 'Kolacja'
  url: string
}

const MealIdea = ({ name, type, url }: MealIdeaProps) => {
  return (
    <section
      className="meal-idea"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url('${url}')`,
      }}
    >
      <Text className="meal-idea__type">{type}</Text>
      <Text className="meal-idea__name">{name}</Text>
    </section>
  )
}

export default MealIdea
