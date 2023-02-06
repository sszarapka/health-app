import { Progress, Typography } from 'antd'
const { Text } = Typography
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { IntakeSummaryProps } from '../types/types'

ChartJS.register(ArcElement, Tooltip, Legend)

const IntakeSummary = ({ macro }: IntakeSummaryProps) => {
  const { carbs, protein, fat } = macro

  const currentCalories =
    carbs.current * 4 + protein.current * 4 + fat.current * 9

  const totalCalories = carbs.target * 4 + protein.target * 4 + fat.target * 9

  const data = {
    labels: ['Węglowodany', 'Białka', 'Tłuszcze'],
    datasets: [
      {
        label: 'g',
        data:
          currentCalories === 0
            ? [carbs.target, protein.target, fat.target]
            : [carbs.current, protein.current, fat.current],
        backgroundColor: ['#fdcb00', '#6626dc', '#fd084a'],
        borderRadius: 20,
        borderWidth: 3,
        weight: 20,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    cutout: '78%',
    tooltipEnabled: false,
    events: [],
  }

  return (
    <section className="intake-summary">
      <div className="intake-summary__chart">
        <Doughnut data={data} options={options} />
        <div className="chart__calories">
          <Text className="calories__current">{currentCalories}</Text>
          <Text className="calories__target">/ {totalCalories}kcal</Text>
        </div>
      </div>
      <div className="intake-summary__macro">
        <div className="macro__carbs">
          <Text>
            Węglowodany: <span className="macro--bold">{carbs.current}</span> /{' '}
            {carbs.target}g
          </Text>
          <Progress
            percent={(carbs.current / carbs.target) * 100}
            showInfo={false}
            strokeColor="#fdcb00"
          />
        </div>
        <div className="macro__carbs">
          <Text>
            Białko: <span className="macro--bold">{protein.current}</span> /{' '}
            {protein.target}g
          </Text>
          <Progress
            percent={(protein.current / protein.target) * 100}
            showInfo={false}
            strokeColor="#6626dc"
          />
        </div>
        <div className="macro__carbs">
          <Text>
            Tłuszcz: <span className="macro--bold">{fat.current}</span> /{' '}
            {fat.target}g
          </Text>
          <Progress
            percent={(fat.current / fat.target) * 100}
            showInfo={false}
            strokeColor="#fd084a"
          />
        </div>
      </div>
    </section>
  )
}

export default IntakeSummary
