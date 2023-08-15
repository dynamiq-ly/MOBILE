/* package */
import { useCallback, useState } from 'react'
import { RefreshControl } from 'react-native'

/* components */
import { Dialog } from '@/components'

/* utilities */
import { Text } from '@/common'
import { Container } from '@/shared'
import { variables } from '@/constant/variables'

/* mocks */
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

export default ({ navigation }) => {
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery('@Policies-Hotel', getClientSideQueries.hotelPolicies)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <Container safeArea={false} gap='sm' refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      {data.map((item, index) => (
        <Dialog
          key={index}
          small={false}
          background='tag'
          padding={false}
          icon={require('@/assets/icons/product/monocrome/sensor-alert-dark.png')}
          onPress={() => navigation.navigate('[stack] stack-safety-details', { name: item.title, file: `${variables.STORAGE_LINK}/pdf/policies/${item.filePath}` })}>
          <Text size={9} t={'capitalize'} weight='md'>
            {item.title}
          </Text>
          <Text size={7} color='sub'>
            {item.subTitle}
          </Text>
        </Dialog>
      ))}
    </Container>
  )
}

const getClientSideQueries = {
  hotelPolicies: () =>
    useFetch('/api/policies?policy=HOTEL')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}