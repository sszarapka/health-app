import InputNum from '../components/InputNum'
import IntakeSummary from '../components/IntakeSummary'

const dashboard = () => {
  return (
    <>
      <InputNum title="Aktualna waga" size="large" />
      <IntakeSummary />
    </>
  )
}

export default dashboard
