import { GetServerSideProps } from 'next'
import { ref, getDatabase, get, child } from 'firebase/database'
import { useRestrictedPage } from '../hooks/useRestrictedPage'
import { DashboardPageProps } from '../types/types'
import Loading from '../components/Loading'
import InputNum from '../components/InputNum'
import IntakeSummary from '../components/IntakeSummary'
import Water from '../components/Water'

const Dashboard = ({ userData }: DashboardPageProps) => {
  const macro = {
    carbs: {
      current: userData.carbsCurrent,
      target: userData.carbsTarget,
    },
    protein: {
      current: userData.proteinCurrent,
      target: userData.proteinTarget,
    },
    fat: {
      current: userData.fatCurrent,
      target: userData.fatTarget,
    },
  }

  if (useRestrictedPage()) return <Loading />
  return (
    <>
      <InputNum
        title="Aktualna waga"
        size="large"
        defaultValue={userData.weigth}
        dbTitle="weigth"
      />
      <IntakeSummary macro={macro} />
      <Water
        numberOfGlasses={userData.drunkWater}
        waterTarget={userData.waterTarget}
      />
    </>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async context => {
  const dbRef = ref(getDatabase())
  const currentUid = context.req.cookies.uid

  const userData = await get(child(dbRef, `users/${currentUid}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return {
          calorieTarget: snapshot.val().nutrition.calorieTarget,
          carbsTarget: snapshot.val().nutrition.carbsTarget,
          proteinTarget: snapshot.val().nutrition.proteinTarget,
          fatTarget: snapshot.val().nutrition.fatTarget,
          waterTarget: snapshot.val().nutrition.waterTarget,
          carbsCurrent: snapshot.val().nutrition.carbsCurrent,
          proteinCurrent: snapshot.val().nutrition.proteinCurrent,
          fatCurrent: snapshot.val().nutrition.fatCurrent,
          drunkWater: snapshot.val().nutrition.drunkWater,
          weigth: snapshot.val().generalInfo.weigth,
        }
      }
    })
    .catch(error => {
      console.error(error)
    })

  return {
    props: { userData },
  }
}
