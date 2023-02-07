import { Typography } from 'antd'
const { Title } = Typography
import { GetServerSideProps } from 'next'
import { ref, getDatabase, get, child } from 'firebase/database'
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
      <ProgressImages />
    </>
  )
}

export default Progress

export const getServerSideProps: GetServerSideProps = async context => {
  const currentUid = context.req.cookies.uid

  let userData
  if (currentUid) {
    const dbRef = ref(getDatabase())
    userData = await get(child(dbRef, `users/${currentUid}`))
      .then(snapshot => {
        console.log(snapshot)
        if (snapshot.exists()) {
          return {
            arm: snapshot.val().progress?.arm || 0,
            chest: snapshot.val().progress?.chest || 0,
            hips: snapshot.val().progress?.hips || 0,
            kalf: snapshot.val().progress?.kalf || 0,
            neck: snapshot.val().progress?.neck || 0,
            thigh: snapshot.val().progress?.thigh || 0,
            waist: snapshot.val().progress?.waist || 0,
          }
        }
      })
      .catch(error => {
        console.error(error)
      })
  } else userData = null
  return {
    props: { userData },
  }
}
