import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import ProductAction from '../../components/ProductAction'
import Loading from '../../components/Loading'

const EditProduct = () => {
  if (useRestrictedPage()) return <Loading />

  return <ProductAction type="edit" />
}

export default EditProduct
