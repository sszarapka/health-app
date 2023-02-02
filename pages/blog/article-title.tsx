import { Typography } from 'antd'
const { Title, Paragraph } = Typography
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import Loading from '../../components/Loading'

const Article = () => {
  if (useRestrictedPage()) return <Loading />
  return (
    <article className="article">
      <Title level={2}>ĆWICZENIA NA SIŁOWNI DLA POCZĄTKUJĄCYCH?</Title>
      <Paragraph className="paragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab
        officiis totam explicabo soluta animi quisquam. Iure fugit suscipit, a
        blanditiis voluptas perspiciatis totam, odio ullam adipisci magnam
        nihil?
      </Paragraph>
      <Paragraph className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vitae
        debitis illum aperiam, recusandae eveniet fugit odit illo tempora sequi
        aliquam rem possimus asperiores labore incidunt, dolor ullam officia
        impedit omnis perferendis. Quas veniam dolor officiis aliquid excepturi,
        molestiae aspernatur architecto minus in sunt. Dolore eum tempore
        expedita earum aut consequatur impedit, mollitia nulla quis vitae
        nostrum eveniet harum delectus perferendis, unde provident quidem
        cupiditate veritatis, natus placeat? Possimus laborum et soluta fugiat
        nisi dolor ut eveniet nam explicabo harum consequatur, aliquam doloribus
        dolorum, odit, architecto officia error mollitia exercitationem non?
        Nihil velit explicabo quia, expedita quidem exercitationem voluptatibus
        maiores quo ducimus quibusdam reiciendis consectetur voluptas dolorum,
        similique repellendus incidunt quod nam ipsum nostrum. Odio nostrum
        omnis eos quae temporibus at dolore possimus fugiat reprehenderit cumque
        placeat, ut fugit assumenda a aliquam beatae dolorum. Sapiente debitis,
        non rem autem tenetur reiciendis ipsam vel at accusamus unde! Iste iusto
        consequatur, quisquam deleniti excepturi optio eveniet totam accusantium
        necessitatibus fugit ipsam voluptas, ducimus repellat aspernatur
        assumenda debitis eos qui ea quos id quo vel. Dolorum repellat illum
        voluptatibus exercitationem impedit, eum tempore sequi repellendus
        excepturi voluptas ab, ratione totam veritatis inventore repudiandae
        dicta asperiores quam, saepe alias. Atque quia delectus dolores itaque?
      </Paragraph>
    </article>
  )
}

export default Article
