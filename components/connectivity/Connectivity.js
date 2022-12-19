import Toast from 'components/toast/Toast'
import AreaView from 'utils/TabAreaView'
import * as clipboard from 'expo-clipboard'
import ClipBoardButton from './Clibboardbutton'

import { useState } from 'react'
import { View } from 'styles/detail.module'
import { Image } from 'styles/image.module'
import { wifi_list } from 'mock/wifi_list'
import { Alert, View as VV } from 'react-native'

import { useQuery } from 'react-query'
import { __query } from 'hooks/useApi'
import { LogBox } from 'react-native'
export default function Connectivity() {
  const [wifiList, setWifiList] = useState(false)

  const { data, status } = useQuery('@connectivity', connectivityFetcher, {
    refetchOnMount: true,
    initialData: [],
  })

  return (
    <View>
      <AreaView>
        <Image
          source={{
            uri: 'https://cdn.dribbble.com/users/1022481/screenshots/16115078/media/6dce72ec032f05fec93ac038f2eeb36a.png?compress=1&resize=1200x900&vertical=top',
          }}
        />
        <VV style={{ marginBottom: 24 }} />
        {data.map((item) => {
          return (
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
                  ? (Alert.alert('this is a private network'),
                    setWifiList(false))
                  : (clipboard.setString(item.connectivity_password),
                    setWifiList(true))
                setTimeout(() => {
                  setWifiList(false)
                }, 1000)
              }}
            />
          )
        })}
        <VV style={{ marginBottom: 24 }} />
      </AreaView>
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
