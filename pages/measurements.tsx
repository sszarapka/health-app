import { Typography } from 'antd'

import InputNum from '../components/InputNum'
import ProgressImages from '../components/ProgressImages'
import { useRestrictedPage } from '../hooks/useRestrictedPage'

import Loading from '../components/Loading'

const { Title } = Typography
const Measurements = () => {
  if (useRestrictedPage()) return <Loading />

  return (
    <>
      <Title level={2}>Pomiary</Title>
      <InputNum title="Obwód karku" />
      <InputNum title="Obwód klatki piersiowej" />
      <InputNum title="Obwód ramienia" />
      <InputNum title="Obwód talii" />
      <InputNum title="Obwód bioder" />
      <InputNum title="Obwód uda" />
      <InputNum title="Obwód łydki" />

      <Title level={2}>Zdjęcia sylwetki</Title>
      <ProgressImages />
    </>
  )
}

export default Measurements
