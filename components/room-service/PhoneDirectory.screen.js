import { View } from 'react-native'

import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'

import { Image } from 'styles/image.module'
import { BoxText, PhoneDirectoryRow } from '~/styles/list.module'

import { __query } from 'hooks/useApi'
import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { FlatList, LogBox, RefreshControl } from 'react-native'

export default function PhoneDirectoryScreen() {
  const { data, refetch } = useQuery('@phone-directory', phoneFetcher, {
    refetchOnMount: true,
    initialData: [],
  })

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <AreaView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      <Image
        source={{
          uri: 'https://www.whitepageshull.co.uk/wp-content/uploads/2020/06/Telephone-KCOM-Directory-Enquiries.jpg',
        }}
      />
      <View style={{ marginTop: 10 }} />
      <Text
        size={16}
        content={
          'in this section we will show you how to make use of our phone system. in case you needed to call someone'
        }
      />
      {data.map((el) => (
        <PhoneDirectoryRow key={el.id}>
          <BoxText>
            <Text content={el.phone_title} weight={600} up={'cap'} size={18} />
            <Text
              content={el.phone_instruction}
              color={el.phone_urgent ? 'red' : 'gray'}
              size={16}
            />
          </BoxText>
        </PhoneDirectoryRow>
      ))}

      <View style={{ marginTop: 24 }} />
    </AreaView>
  )
}

let phoneFetcher = function () {
  return __query
    .get('api/directory')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
