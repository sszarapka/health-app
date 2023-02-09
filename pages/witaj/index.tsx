import { ref, getDatabase, get, child } from 'firebase/database'
import { GetServerSideProps } from 'next'
import Welcome from '../../pages-code/welcome/index'
export default Welcome

export const getServerSideProps: GetServerSideProps = async context => {
  const currentUid = context.req.cookies.uid

  let username
  if (currentUid) {
    const dbRef = ref(getDatabase())
    username = await get(child(dbRef, `users/${currentUid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          const name: string = snapshot.val().name
          return name
        }
      })
      .catch(error => {
        console.error(error)
      })
  } else username = null

  return {
    props: { username },
  }
}
