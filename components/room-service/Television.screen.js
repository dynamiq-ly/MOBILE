import Text from 'components/text/Text'
import AreaView from '~/utils/TabAreaView'

import { Image } from 'styles/image.module'
import { View as NewView } from 'react-native'
import { PhoneDirectoryRow } from 'styles/list.module'

import { __query } from 'hooks/useApi'
import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { LogBox, RefreshControl } from 'react-native'

export default function Television() {
  const { data, refetch, isFetched, isError } = useQuery('@towels', televisionInstructionFetcher, {
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
          uri: 'https://cdn.mos.cms.futurecdn.net/chdRXnwnNQTmg9Ax4EvmBb-1024-80.jpg.webp',
        }}
      />
      <NewView style={{ marginBottom: 15 }} />
      <Text size={18} content={'For your entertainment in the room we offer you a selection of television channels, payed movies and more interactive options.'} style={{ marginBottom: 24 }} />

      {data.map((el) => (
        <PhoneDirectoryRow key={el.id}>
          <Text content={el.tvInstruction} />
        </PhoneDirectoryRow>
      ))}
    </AreaView>
  )
}

let televisionInstructionFetcher = function () {
  return __query
    .get('api/television')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
