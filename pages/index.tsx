import { GetServerSideProps } from 'next'
import { ref, getDatabase, get, child, set } from 'firebase/database'
import { useRestrictedPage } from '../hooks/useRestrictedPage'
import { DashboardPageProps } from '../types/types'
import Loading from '../components/Loading'
import InputNum from '../components/InputNum'
import IntakeSummary from '../components/IntakeSummary'
import Water from '../components/Water'
import { useEffect, useState } from 'react'
import { useCalculateTargetValues } from '../hooks/useCalculateTargetValues'
import { useUser } from '../hooks/useUser'

const Dashboard = ({ userData }: DashboardPageProps) => {
  const dataForCalculations = {
    weigth: userData.weigth,
    age: userData.age,
    goal: userData.goal,
    activity: userData.activity,
    gender: userData.gender,
    height: userData.height,
  }

  const { waterTarget, carbsTarget, proteinTarget, fatTarget } =
    useCalculateTargetValues(dataForCalculations)

  if (useRestrictedPage() || userData === null) return <Loading />

  const macro = {
    carbs: {
      current: userData.carbsCurrent,
      target: carbsTarget,
    },
    protein: {
      current: userData.proteinCurrent,
      target: proteinTarget,
    },
    fat: {
      current: userData.fatCurrent,
      target: fatTarget,
    },
  }

  return (
    <>
      <InputNum
        title="Aktualna waga"
        size="large"
        defaultValue={userData.weigth}
        dbTitle="weigth"
      />
      <IntakeSummary macro={macro} />
      <Water numberOfGlasses={userData.drunkWater} waterTarget={waterTarget} />
    </>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async context => {
  const currentUid = context.req.cookies.uid

  let userData
  if (currentUid) {
    const dbRef = ref(getDatabase())
    userData = await get(child(dbRef, `users/${currentUid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          return {
            carbsCurrent: snapshot.val().nutrition.carbsCurrent || 0,
            proteinCurrent: snapshot.val().nutrition.proteinCurrent || 0,
            fatCurrent: snapshot.val().nutrition.fatCurrent || 0,
            drunkWater: snapshot.val().nutrition.drunkWater || 0,
            weigth: snapshot.val().generalInfo.weigth || 0,
            age: snapshot.val().generalInfo.age || 0,
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
