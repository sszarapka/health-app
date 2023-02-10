import { ref, getDatabase, get, child } from 'firebase/database'
import { GetServerSideProps } from 'next'
import Dashoard from '../pages-code/index'
export default Dashoard

export const getServerSideProps: GetServerSideProps = async context => {
  const currentUid = context.req.cookies.uid

  let userData
  if (currentUid) {
    const dbRef = ref(getDatabase())
    userData = await get(child(dbRef, `users/${currentUid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          return {
            carbsCurrent: snapshot.val().nutrition?.carbsCurrent || 0,
            proteinCurrent: snapshot.val().nutrition?.proteinCurrent || 0,
            fatCurrent: snapshot.val().nutrition?.fatCurrent || 0,
            drunkWater: snapshot.val().nutrition?.drunkWater || 0,
            weigth: snapshot.val().generalInfo?.weigth || 0,
            age: snapshot.val().generalInfo?.age || 0,
            goal: snapshot.val().generalInfo?.goal || '',
            activity: snapshot.val().generalInfo?.activity || '',
            gender: snapshot.val().generalInfo?.gender || '',
            height: snapshot.val().generalInfo?.height || 0,
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
