import { Typography, Row } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faGlassWater } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, faGlassWater)
import { WaterProps } from '../types/types'

const Water = ({ numberOfGlasses, waterTarget }: WaterProps) => {
  const glasses = [...Array(numberOfGlasses)].map((e, i) => (
    <FontAwesomeIcon
      icon={['fas', 'glass-water']}
      className="water__glass"
      key={i}
    />
  ))

  const drunkWater = numberOfGlasses * 250
  let waterStatusClassName:
    | 'water__data--green'
    | 'water__data--orange'
    | 'water__data--red'

  if (drunkWater > waterTarget) {
    waterStatusClassName = 'water__data--green'
  } else if (drunkWater > waterTarget * 0.6) {
    waterStatusClassName = 'water__data--orange'
  } else waterStatusClassName = 'water__data--red'

  return (
    <>
      <div className="title-data">
        <Title className="water__title" level={2}>
          Wypita woda
        </Title>
        <Text className="water__data">
          <span className={waterStatusClassName}>{drunkWater}</span> /{' '}
          {waterTarget}ml
        </Text>
      </div>
      <div className="glasses">
        {/* {glasses} */}
        <PlusCircleOutlined className="water__add" />
      </div>
    </>
  )
}

export default Water
