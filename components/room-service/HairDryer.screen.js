import Icon from 'react-native-remix-icon'
import { Image } from 'styles/image.module'
import AreaView from '~/utils/TabAreaView'
import { View as NewView } from 'react-native'
import Text from 'components/text/Text'
import { BoxIcon, BoxText, PhoneDirectoryRow } from 'styles/list.module'
import { fontPixel } from 'utils/normalization'

import { __query } from 'hooks/useApi'
import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { LogBox, RefreshControl } from 'react-native'

export default function HairDryer() {
  const { data, refetch, isFetched, isError } = useQuery('@hairDrayer', hairDrayerInstructionFetcher, {
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
          uri: 'https://i.insider.com/5983507cefe3df2b008b45ef?width=1000&format=jpeg&auto=webp',
        }}
      />
      <NewView style={{ marginBottom: 15 }} />
      <Text size={18} content={'Our hotel room is provided with a hair dryer in the bathroom of each hotrl room.'} />
      <Text size={18} color={'gray'} content={'How to use '} />

      {data.map((el) => (
        <PhoneDirectoryRow key={el.id} style={{ alignItems: 'center' }}>
          <BoxIcon>
            <Icon name={el.HairDryerWarning ? 'ri-error-warning-line' : 'ri-arrow-right-circle-fill'} color={el.HairDryerWarning ? '#EE4231' : '#212121'} />
          </BoxIcon>
          <BoxText>
            <Text color={'gray'} size={17} content={el.HairDryerInstruction} />
          </BoxText>
        </PhoneDirectoryRow>
      ))}
      <NewView style={{ marginBottom: 24 }} />
    </AreaView>
  )
}

let hairDrayerInstructionFetcher = function () {
  return __query
    .get('api/hair-dryer')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
