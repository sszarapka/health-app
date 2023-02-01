import ProductAction from '../../components/ProductAction'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import { useIsAuthLoading } from '../../hooks/useIsAuthLoading'
import Loading from '../../components/Loading'
const AddProduct = () => {
  useRestrictedPage()
  if (useIsAuthLoading()) return <Loading />

  return <ProductAction type="add" />
}

export default AddProduct
