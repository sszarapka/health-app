import { Typography } from 'antd'
const { Title } = Typography
import { useRestrictedPage } from '../hooks/useRestrictedPage'
import InputNum from '../components/InputNum'
import ProgressImages from '../components/ProgressImages'
import Loading from '../components/Loading'

const Progress = () => {
  if (useRestrictedPage()) return <Loading />
  return (
    <>
      <Title level={2}>Pomiary</Title>
      <InputNum title="Obwód karku" defaultValue={30} dbTitle="neck" />
      <InputNum
        title="Obwód klatki piersiowej"
        defaultValue={30}
        dbTitle="chest"
      />
      <InputNum title="Obwód ramienia" defaultValue={30} dbTitle="arm" />
      <InputNum title="Obwód talii" defaultValue={30} dbTitle="waist" />
      <InputNum title="Obwód bioder" defaultValue={30} dbTitle="hips" />
      <InputNum title="Obwód uda" defaultValue={30} dbTitle="thigh" />
      <InputNum title="Obwód łydki" defaultValue={30} dbTitle="kalf" />

      <Title level={2}>Zdjęcia sylwetki</Title>
      <ProgressImages />
    </>
  )
}

export default Progress
