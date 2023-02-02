import { Input, Typography } from 'antd'
import { BarcodeOutlined } from '@ant-design/icons'
const { Search } = Input
const { Text } = Typography
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import Loading from '../../components/Loading'
import ProductsList from '../../components/ProductsList'

const FindProduct = () => {
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

  if (useRestrictedPage()) return <Loading />

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
      <ProductsList products={mockProducts} type="add" />
    </>
  )
}

export default FindProduct
