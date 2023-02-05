import { Typography } from 'antd'
const { Text } = Typography
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { getDatabase, ref, child, get } from 'firebase/database'
import { ROUTES } from '../../constants/routes'
import { WelcomePageProps } from '../../types/types'
import Loading from '../../components/Loading'
import { useRestrictedPage } from '../../hooks/useRestrictedPage'
import WelcomeWrapper from '../../components/WelcomeWrapper'

const Welcome = ({ username }: WelcomePageProps) => {
  const router = useRouter()
  const handleNext = () => router.push(ROUTES.AGE)
  if (useRestrictedPage()) return <Loading />
  return (
    <WelcomeWrapper handleNext={handleNext} title={`Witaj ${username}`}>
      <div className="welcome__container">
        <Text className="welcome__info">
          Przed rozpoczęciem potrzebujemy o Tobie kilku informacji.
        </Text>

        <Text className="welcome__instruction">
          Przejdź dalej, aby wypełnić ankietę.
        </Text>
      </div>
    </WelcomeWrapper>
  )
}

export default Welcome

export const getServerSideProps: GetServerSideProps = async context => {
  const dbRef = ref(getDatabase())
  const currentUid = context.req.cookies.uid

  const username = await get(child(dbRef, `users/${currentUid}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        const name: string = snapshot.val().name
        return name
      }
    })
    .catch(error => {
      console.error(error)
    })

  return {
    props: { username },
  }
}
