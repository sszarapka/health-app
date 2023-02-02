import { ProductsListProps } from '../types/types'
import Product from './Product'

const ProductsList = ({ products, type }: ProductsListProps) => {
  const productsList = products.map(product => (
    <Product
      name={product.name}
      weigth={product.weigth}
      calories={product.calories}
      type={type}
      key={product.name}
    />
  ))
  return <section className="products-list">{productsList}</section>
}

export default ProductsList
