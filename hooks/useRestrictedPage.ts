import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import { useEffect } from 'react'
import { ROUTES } from '../constants/routes'

export function useRestrictedPage() {
  const router = useRouter()
  const [user, loading] = useAuthState(getAuth())

  useEffect(() => {
    if (!loading && !user) router.push(ROUTES.LOGIN)
  }, [user, router, loading])
}
