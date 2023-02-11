import { useCalculateTargetValuesProps } from '../types/types'

export function useCalculateTargetValues(
  userData: useCalculateTargetValuesProps
) {
  if (userData === null)
    return {
      waterTarget: 0,
      calorieTarget: 0,
      carbsTarget: 0,
      proteinTarget: 0,
      fatTarget: 0,
    }

  const { gender, age, weigth, height, goal, activity } = userData

  const MULTIPLIER = gender === 'Kobieta' ? 655.1 : 66.5
  const WEIGTH_CONSTANT = gender === 'Kobieta' ? 9.563 : 13.75
  const HEIGHT_CONSTANT = gender === 'Kobieta' ? 1.85 : 5.003
  const AGE_CONSTANT = gender === 'Kobieta' ? 4.676 : 6.775

  const WATER_PER_KILO = 40
  const CALORIES_IN_KILO_OF_FAT = 7000
  const CALORIES_IN_GRAM_OF_PROTEIN = 4
  const CALORIES_IN_GRAM_OF_CARBS = 4
  const CALORIES_IN_GRAM_OF_FAT = 9

  const PPM =
    MULTIPLIER +
    WEIGTH_CONSTANT * weigth +
    HEIGHT_CONSTANT * height -
    AGE_CONSTANT * age

  let PAL: number

  switch (activity) {
    case 'Niska':
      PAL = 1.4
      break
    case 'Umiarkowana':
      PAL = 1.8
      break
    case 'Wysoka':
      PAL = 2.1
      break
    default:
      PAL = 1.8
  }
  let PROTEIN_CONSTANT: number
  let FAT_CONSTANT: number

  const calorieDeficit = (weigth * 0.005 * CALORIES_IN_KILO_OF_FAT) / 7
  const calorieSurpluss = (weigth * 0.02 * CALORIES_IN_KILO_OF_FAT) / 30
  let calorieTarget = Math.floor(PPM * PAL)

  switch (goal) {
    case 'Schudnąć':
      PROTEIN_CONSTANT = 2.5
      FAT_CONSTANT = 0.2
      calorieTarget = Math.floor(calorieTarget - calorieDeficit)
      break
    case 'Zbudować mięśnie':
      PROTEIN_CONSTANT = 2
      FAT_CONSTANT = 0.25
      calorieTarget = Math.floor(calorieTarget + calorieSurpluss)

      break
    case 'Utrzymać wagę':
      PROTEIN_CONSTANT = 2
      FAT_CONSTANT = 0.25
      break
    default:
      PROTEIN_CONSTANT = 2
      FAT_CONSTANT = 0.25
  }
  const waterTarget = Math.floor(weigth * WATER_PER_KILO)

  const fatTarget = Math.floor(
    (calorieTarget * FAT_CONSTANT) / CALORIES_IN_GRAM_OF_FAT
  )
  const proteinTarget = Math.floor(PROTEIN_CONSTANT * weigth)
  const carbsTarget = Math.floor(
    (calorieTarget -
      fatTarget * CALORIES_IN_GRAM_OF_FAT -
      proteinTarget * CALORIES_IN_GRAM_OF_PROTEIN) /
      CALORIES_IN_GRAM_OF_CARBS
  )

  return {
    waterTarget,
    calorieTarget,
    carbsTarget,
    proteinTarget,
    fatTarget,
  }
}
