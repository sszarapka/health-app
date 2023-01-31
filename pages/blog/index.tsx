import Link from 'next/link'
import { Card, Image, Typography } from 'antd'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import { useIsAuthLoading } from '../../hooks/useIsAuthLoading'
import Loading from '../../components/Loading'
const { Meta } = Card
const { Title } = Typography
const Blog = () => {
  useRestrictedPage()
  if (useIsAuthLoading()) return <Loading />

  return (
    <section className="blog">
      <Title level={2}>Blog</Title>
      <Link href="blog/tytul-artykulu-w-calosci">
        <Card
          className="blog__card"
          cover={
            <Image
              className="card__image"
              alt="example"
              src="https://www.kartamultisport.pl/headless/fileadmin/_processed_/0/d/csm_silka-min_d3c76fff4f.jpg"
              preview={false}
            />
          }
        >
          <Meta
            title="Siłownia - jak zacząć?"
            description="Wszystko co musisz wiedzieć o treningu siłowym"
          />
        </Card>
      </Link>

      <Card
        className="blog__card"
        cover={
          <Image
            className="card__image"
            alt="example"
            src="https://www.totalfitness.com.pl/wp-content/uploads/2019/05/%C4%86wiczenia-dla-poczatkuj%C4%85cych.jpg"
            preview={false}
          />
        }
      >
        <Meta
          title="ĆWICZENIA NA SIŁOWNI DLA POCZĄTKUJĄCYCH?"
          description="Chcesz zacząć ćwiczyć, ale nie masz pojęcia jak się za to zabrać ? Wchodząc na siłownię nie masz pomysłu jak trenować?"
        />
      </Card>
    </section>
  )
}

export default Blog
