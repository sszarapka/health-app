import { GetServerSideProps } from 'next'
import { ref, getDatabase, get, child } from 'firebase/database'
import { useRestrictedPage } from '../hooks/useRestrictedPage'
import { DashboardPageProps } from '../types/types'
import Loading from '../components/Loading'
import InputNum from '../components/InputNum'
import IntakeSummary from '../components/IntakeSummary'
import Water from '../components/Water'

const Dashboard = ({ userData }: DashboardPageProps) => {
  if (useRestrictedPage() || userData === null) return <Loading />

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

  let userData
  if (currentUid) {
    userData = await get(child(dbRef, `users/${currentUid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          return {
            calorieTarget: snapshot.val().nutrition.calorieTarget || 0,
            carbsTarget: snapshot.val().nutrition.carbsTarget || 0,
            proteinTarget: snapshot.val().nutrition.proteinTarget || 0,
            fatTarget: snapshot.val().nutrition.fatTarget || 0,
            waterTarget: snapshot.val().nutrition.waterTarget || 0,
            carbsCurrent: snapshot.val().nutrition.carbsCurrent || 0,
            proteinCurrent: snapshot.val().nutrition.proteinCurrent || 0,
            fatCurrent: snapshot.val().nutrition.fatCurrent || 0,
            drunkWater: snapshot.val().nutrition.drunkWater || 0,
            weigth: snapshot.val().generalInfo.weigth || 0,
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
