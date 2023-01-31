import ProductAction from '../../components/ProductAction'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import { useIsAuthLoading } from '../../hooks/useIsAuthLoading'
import Loading from '../../components/Loading'
const EditProduct = () => {
  useRestrictedPage()
  if (useIsAuthLoading()) return <Loading />

  return <ProductAction type="edit" />
}

export default EditProduct
