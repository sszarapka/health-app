import { Typography } from 'antd'
const { Title } = Typography
import { useRestrictedPage } from '../hooks/useRestrictedPage'
import { ProgressPageProps } from '../types/types'
import InputNum from '../components/InputNum'
import ProgressImages from '../components/ProgressImages'
import Loading from '../components/Loading'

const Progress = ({ userData }: ProgressPageProps) => {
  if (useRestrictedPage() || !userData) return <Loading />
  return (
    <>
      <Title level={2}>Pomiary</Title>
      <InputNum
        title="Obwód karku"
        defaultValue={userData.neck}
        dbTitle="neck"
      />
      <InputNum
        title="Obwód klatki piersiowej"
        defaultValue={userData.chest}
        dbTitle="chest"
      />
      <InputNum
        title="Obwód ramienia"
        defaultValue={userData.arm}
        dbTitle="arm"
      />
      <InputNum
        title="Obwód talii"
        defaultValue={userData.waist}
        dbTitle="waist"
      />
      <InputNum
        title="Obwód bioder"
        defaultValue={userData.hips}
        dbTitle="hips"
      />
      <InputNum
        title="Obwód uda"
        defaultValue={userData.thigh}
        dbTitle="thigh"
      />
      <InputNum
        title="Obwód łydki"
        defaultValue={userData.kalf}
        dbTitle="kalf"
      />

      <Title level={2}>Zdjęcia sylwetki</Title>

      <ProgressImages imagesArray={userData.imagesArray} />
    </>
  )
}

export default Progress
