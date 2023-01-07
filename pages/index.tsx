import InputNum from '../components/InputNum'
import IntakeSummary from '../components/IntakeSummary'
import Water from '../components/Water'

const dashboard = () => {
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
  return (
    <>
      <InputNum title="Aktualna waga" size="large" />
      <IntakeSummary macro={macro} />
      <Water numberOfGlasses={3} waterTarget={2100} />
    </>
  )
}

export default dashboard
