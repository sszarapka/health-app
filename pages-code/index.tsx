import { useRestrictedPage } from '../hooks/useRestrictedPage'
import { useCalculateTargetValues } from '../hooks/useCalculateTargetValues'
import { DashboardPageProps } from '../types/types'
import Loading from '../components/Loading'
import InputNum from '../components/InputNum'
import IntakeSummary from '../components/IntakeSummary'
import Water from '../components/Water'

const Dashboard = ({ userData }: DashboardPageProps) => {
  const dataForCalculations = {
    weigth: userData.weigth,
    age: userData.age,
    goal: userData.goal,
    activity: userData.activity,
    gender: userData.gender,
    height: userData.height,
  }

  const { waterTarget, carbsTarget, proteinTarget, fatTarget } =
    useCalculateTargetValues(dataForCalculations)

  if (useRestrictedPage() || userData === null) return <Loading />

  const macro = {
    carbs: {
      current: userData.carbsCurrent,
      target: carbsTarget,
    },
    protein: {
      current: userData.proteinCurrent,
      target: proteinTarget,
    },
    fat: {
      current: userData.fatCurrent,
      target: fatTarget,
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
      <Water numberOfGlasses={userData.drunkWater} waterTarget={waterTarget} />
    </>
  )
}

export default Dashboard
