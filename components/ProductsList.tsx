import Product from './Product'

interface ProductsListProps {
  products: {
    name: string
    weigth: number
    calories: number
  }[]
  type: 'add' | 'edit'
}

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
