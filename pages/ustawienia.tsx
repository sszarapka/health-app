import { initializeApp } from 'firebase/app'
import { ref, getDatabase, get, child } from 'firebase/database'
import { GetServerSideProps } from 'next'
import { firebaseConfig } from '../firebase-config'
import Settings from '../pages-code/settings'
export default Settings

export const getServerSideProps: GetServerSideProps = async context => {
  const currentUid = context.req.cookies.uid
  initializeApp(firebaseConfig)

  let userData
  if (currentUid) {
    const dbRef = ref(getDatabase())
    userData = await get(child(dbRef, `users/${currentUid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          return {
            age: snapshot.val().generalInfo.age || 0,
            weigth: snapshot.val().generalInfo.weigth || 0,
            goal: snapshot.val().generalInfo.goal || '',
            activity: snapshot.val().generalInfo.activity || '',
            gender: snapshot.val().generalInfo.gender || '',
            height: snapshot.val().generalInfo.height || 0,
          }
        }
      })
      .catch(error => {
        console.error(error)
      })
  } else userData = null

  return {
    props: { userData },
  }
}
