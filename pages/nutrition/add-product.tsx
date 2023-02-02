import ProductAction from '../../components/ProductAction'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'

import Loading from '../../components/Loading'
const AddProduct = () => {
  if (useRestrictedPage()) return <Loading />

  return <ProductAction type="add" />
}

export default AddProduct
