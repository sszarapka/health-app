import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'

export function useUser() {
  const [user] = useAuthState(getAuth())
  return user
}
