import InputNum from '../components/InputNum'
import IntakeSummary from '../components/IntakeSummary'
import Water from '../components/Water'

const dashboard = () => {
  return (
    <>
      <InputNum title="Aktualna waga" size="large" />
      <IntakeSummary />
      <Water numberOfGlasses={70} waterTarget={2100} />
    </>
  )
}

export default dashboard
