import { Input, Typography } from 'antd'
import { BarcodeOutlined } from '@ant-design/icons'
import ProductsList from '../../components/ProductsList'
const { Search } = Input
const { Text } = Typography

const AddProduct = () => {
  const mockProducts = [
    {
      name: 'Serek',
      weigth: 100,
      calories: 100,
    },
    {
      name: 'Serek',
      weigth: 100,
      calories: 100,
    },
    {
      name: 'Serek',
      weigth: 100,
      calories: 100,
    },
  ]
  return (
    <>
      <div className="search">
        <Search
          placeholder="Znajdź produkt"
          allowClear
          size="large"
          maxLength={50}
        />
        <div className="barcode-container">
          <BarcodeOutlined className="search__barcode" />
          <Text className="search__barcode-label">Skanuj</Text>
        </div>
      </div>
      <ProductsList products={mockProducts} type="edit" />
    </>
  )
}

export default AddProduct
