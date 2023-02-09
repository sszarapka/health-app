import { ref, getDatabase, get, child } from 'firebase/database'
import { GetServerSideProps } from 'next'
import Progress from '../pages-code/progress'
export default Progress

export const getServerSideProps: GetServerSideProps = async context => {
  const currentUid = context.req.cookies.uid

  let userData
  if (currentUid) {
    const dbRef = ref(getDatabase())
    userData = await get(child(dbRef, `users/${currentUid}`))
      .then(snapshot => {
        console.log(snapshot)
        if (snapshot.exists()) {
          return {
            arm: snapshot.val().progress?.arm || 0,
            chest: snapshot.val().progress?.chest || 0,
            hips: snapshot.val().progress?.hips || 0,
            kalf: snapshot.val().progress?.kalf || 0,
            neck: snapshot.val().progress?.neck || 0,
            thigh: snapshot.val().progress?.thigh || 0,
            waist: snapshot.val().progress?.waist || 0,
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
