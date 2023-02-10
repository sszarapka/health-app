import { ref, getDatabase, get, child } from 'firebase/database'

import {
  getDownloadURL,
  getMetadata,
  getStorage,
  listAll,
  ref as sRef,
} from 'firebase/storage'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import Progress from '../pages-code/progress'
import { ImageInfo } from '../types/types'
export default Progress

export const getServerSideProps: GetServerSideProps = async context => {
  const currentUid = context.req.cookies.uid

  let userData
  if (currentUid) {
    const storage = getStorage()
    const storageRef = sRef(storage, `/images/${currentUid}`)

    const response = await listAll(storageRef)
    const promises = response.items.map(async item => {
      const url = await getDownloadURL(item)
      const metadata = (await getMetadata(item)).customMetadata
      return {
        url: url,
        date: metadata?.lastModified,
        timeStamp: parseInt(metadata?.timeStamp as string),
      }
    })
    const imagesArray = await Promise.all(promises)

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
            imagesArray: imagesArray || [],
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
