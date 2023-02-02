import { useRestrictedPage } from '../hooks/useRestrictedPage'
import Loading from '../components/Loading'
import InputNum from '../components/InputNum'
import IntakeSummary from '../components/IntakeSummary'
import Water from '../components/Water'

const Dashboard = () => {
  const macro = {
    carbs: {
      current: 190,
      target: 380,
    },
    protein: {
      current: 100,
      target: 120,
    },
    fat: {
      current: 60,
      target: 65,
    },
  }

  if (useRestrictedPage()) return <Loading />
  return (
    <>
      <InputNum title="Aktualna waga" size="large" />
      <IntakeSummary macro={macro} />
      <Water numberOfGlasses={3} waterTarget={2100} />
    </>
  )
}

export default Dashboard
