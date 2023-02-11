import { Card, Image, Typography } from 'antd'
const { Title } = Typography
const { Meta } = Card
import Link from 'next/link'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import { BlogPageProps } from '../../types/types'
import Loading from '../../components/Loading'

const Blog = ({ blogData }: BlogPageProps) => {
  const blogPosts = Object.keys(blogData).map((post: string, index: number) => {
    const description =
      //@ts-ignore
      blogData[post as keyof typeof blogData].content[1].slice(0, 200) + '...'
    return (
      <Link href={`blog/${post}`} key={index}>
        <Card
          className="blog__card"
          cover={
            <Image
              className="card__image"
              alt="ćwiczenia"
              //@ts-ignore

              src={blogData[post as keyof typeof blogData].coverUrl}
              preview={false}
            />
          }
        >
          {/* @ts-ignore */}
          <Meta title={blogData[post].title} description={description} />
        </Card>
      </Link>
    )
  })
  if (useRestrictedPage()) return <Loading />

  return (
    <section className="blog">
      <Title level={2}>Blog</Title>
      {blogPosts}
    </section>
  )
}

export default Blog
