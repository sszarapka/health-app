import { Typography } from 'antd'

import InputNum from '../components/InputNum'
import ProgressImages from '../components/ProgressImages'

const { Title } = Typography
const measurements = () => {
  return (
    <>
      <Title level={2}>Pomiary</Title>
      <InputNum title="Obwód karku" size="small" />
      <InputNum title="Obwód klatki piersiowej" size="small" />
      <InputNum title="Obwód ramienia" size="small" />
      <InputNum title="Obwód talii" size="small" />
      <InputNum title="Obwód bioder" size="small" />
      <InputNum title="Obwód uda" size="small" />
      <InputNum title="Obwód łydki" size="small" />

      <Title level={2}>Zdjęcia sylwetki</Title>
      <ProgressImages />
    </>
  )
}

export default measurements
