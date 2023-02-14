import { initializeApp } from 'firebase/app'
import { ref, getDatabase, get, child } from 'firebase/database'
import { GetStaticProps } from 'next'
import { firebaseConfig } from '../../firebase-config'
import Blog from '../../pages-code/blog/index'
export default Blog

export const getStaticProps: GetStaticProps = async () => {
  initializeApp(firebaseConfig)
  const dbRef = ref(getDatabase())

  const posts = await get(child(dbRef, `posts/`))
  const blogData = posts.val()
  return {
    props: {
      blogData,
    },
  }
}
