import { Typography, Image } from 'antd'
const { Title, Paragraph } = Typography
import { GetStaticProps } from 'next'
import { firebaseConfig } from '../../firebase-config'
import { initializeApp } from 'firebase/app'
import { ref, getDatabase, get, child } from 'firebase/database'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import Loading from '../../components/Loading'
import { ArticlePageProps } from '../../types/types'

const Article = ({ postData }: ArticlePageProps) => {
  const paragraphs = postData.content.map((post: string, index: number) => (
    <Paragraph className="paragraph" key={index}>
      {post}
    </Paragraph>
  ))
  if (useRestrictedPage()) return <Loading />
  return (
    <article className="article">
      <Title level={2}>{postData.title}</Title>
      <Image src={postData.coverUrl} alt="ćwiczenia" preview={false} />
      {paragraphs}
    </article>
  )
}

export default Article

export const getStaticPaths = async () => {
  initializeApp(firebaseConfig)
  const dbRef = ref(getDatabase())

  const posts = await get(child(dbRef, `posts`))

  const paths = Object.keys(posts.val()).map((post: string) => {
    return {
      params: {
        title: post,
      },
    }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  initializeApp(firebaseConfig)
  const dbRef = ref(getDatabase())
  const id = context.params?.title
  const post = await get(child(dbRef, `posts/${id}`))
  const postData = post.val()

  return {
    props: {
      postData,
    },
  }
}
