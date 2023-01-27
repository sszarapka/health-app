export interface InputNumProps {
  title: string
  size?: 'small' | 'large'
}
export interface MealProps {
  name: 'Śniadanie' | 'Obiad' | 'Kolacja'
}

export interface ProductProps {
  name: string
  weigth: number
  calories: number
  type: 'add' | 'edit'
}

export interface ProductsListProps {
  products: {
    name: string
    weigth: number
    calories: number
  }[]
  type: 'add' | 'edit'
}

export interface SettingsItemProps {
  label: string
  type: 'select' | 'number' | 'switch'
  options?: {
    value: string
    label: string
  }[]
}

export interface WelcomeWrapperProps {
  children: React.ReactNode
  path: string
  title: string
}

interface Recipe {
  name: string
  type: 'Śniadanie' | 'Obiad' | 'Kolacja'
  ingredients: string[]
  description: string
  macro: {
    carbs: number
    protein: number
    fat: number
  }
  image: string
}

export interface MealIdeaProps {
  recipe: Recipe
  key: React.Key
}

export type RecipeList = Recipe[]

export interface IntakeSummaryProps {
  macro: {
    carbs: {
      current: number
      target: number
    }
    protein: {
      current: number
      target: number
    }
    fat: {
      current: number
      target: number
    }
  }
}

export interface ProductActionProps {
  type: 'add' | 'edit'
}

export interface RadioGrupProps {
  values: string[]
}

export interface WaterProps {
  numberOfGlasses: number
  waterTarget: number
}

export interface RecipeProps {
  name: string
  type: 'Śniadanie' | 'Obiad' | 'Kolacja'
  ingredients: string[]
  description: string
  macro: {
    carbs: number
    protein: number
    fat: number
  }
  image: string
}

export interface WelcomeLayoutProps {
  children: React.ReactNode
}

export interface DangerButtonProps {
  children: React.ReactNode
  className: string
}
