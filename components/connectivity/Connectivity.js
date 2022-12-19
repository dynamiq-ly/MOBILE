import Toast from 'components/toast/Toast'
import * as clipboard from 'expo-clipboard'
import ClipBoardButton from './Clibboardbutton'

import { useCallback, useState } from 'react'
import { View } from 'styles/detail.module'
import { Image } from 'styles/image.module'
import {
  Alert,
  View as VV,
  LogBox,
  RefreshControl,
  FlatList,
} from 'react-native'

import { useQuery } from 'react-query'
import { __query } from 'hooks/useApi'

export default function Connectivity() {
  const [wifiList, setWifiList] = useState(false)

  const { data, status, refetch } = useQuery(
    '@connectivity',
    connectivityFetcher,
    {
      refetchOnMount: true,
      initialData: [],
    }
  )

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <View>
      <FlatList
        data={data}
        style={{ paddingHorizontal: 16 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ClipBoardButton
            key={item.id}
            name={item.connectivity_name}
            icon={item.connectivity_state ? 'ri-router-line' : 'ri-wifi-line'}
            password={
              item.connectivity_state
                ? 'Private network'
                : item.connectivity_password
            }
            onPress={() => {
              item.connectivity_state
                ? (Alert.alert('this is a private network'), setWifiList(false))
                : (clipboard.setString(item.connectivity_password),
                  setWifiList(true))
              setTimeout(() => {
                setWifiList(false)
              }, 1000)
            }}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <Image
            source={{
              uri: 'https://cdn.dribbble.com/users/1022481/screenshots/16115078/media/6dce72ec032f05fec93ac038f2eeb36a.png?compress=1&resize=1200x900&vertical=top',
            }}
          />
        }
        ListHeaderComponentStyle={{
          marginBottom: 24,
        }}
      />
      <VV style={{ marginBottom: 24 }} />
      <Toast contet={'copied'} state={wifiList} />
    </View>
  )
}

let connectivityFetcher = function () {
  return __query
    .get('api/connectivity')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}
LogBox.ignoreAllLogs(true)
