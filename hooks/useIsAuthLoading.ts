import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'

export function useIsAuthLoading() {
  const [user, loading] = useAuthState(getAuth())
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    setIsLoading(!!loading)
  }, [loading])
  return isLoading
}
