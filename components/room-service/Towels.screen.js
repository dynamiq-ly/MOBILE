import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

import { Image } from 'styles/image.module'
import { PhoneDirectoryRow } from 'styles/list.module'

import { __query } from 'hooks/useApi'
import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { LogBox, RefreshControl } from 'react-native'

export default function TowelsScreen() {
  const { data, refetch, isFetched, isError } = useQuery('@towels', towelInstructionFetcher, {
    refetchOnMount: true,
    initialData: [],
  })

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <AreaView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      <Image
        source={{
          uri: 'http://braunlinen.com/wp-content/uploads/2018/01/washing-your-salon-towels.jpg',
        }}
        style={{ marginBottom: 14 }}
      />
      <Text size={18} weight={500} content={'Pool towel with 10$ deposit, you will get a Card (1 towel 1 card ).'} style={{ marginBottom: 5 }} />
      <Text size={18} weight={500} content={'The day of your check out, bring the card or the towel and we give back the deposit.'} style={{ marginBottom: 24 }} />
      <Text size={16} content={'we want to let you know that:'} />

      {data.map((el) => (
        <PhoneDirectoryRow key={el.id}>
          <Text size={16} content={el.TowelsInstruction} />
        </PhoneDirectoryRow>
      ))}
    </AreaView>
  )
}

let towelInstructionFetcher = function () {
  return __query
    .get('api/towels')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
