import { useEffect, useState } from 'react'
import AreaView from 'utils/TabAreaView'
import { wifi_list } from 'mock/wifi_list'
import * as clipboard from 'expo-clipboard'
import ClipBoardButton from './Clibboardbutton'
import Toast from 'components/toast/Toast'
import { Alert, View as VV } from 'react-native'
import { View } from 'styles/detail.module'

export default function Connectivity() {
  const [wifiList, setWifiList] = useState(false)

  return (
    <View>
      <AreaView>
        {wifi_list.map((item, index) => {
          return (
            <ClipBoardButton
              key={index}
              name={item.wifi_name}
              icon={item.wifi_type ? 'ri-router-line' : 'ri-wifi-line'}
              password={item.wifi_type ? 'Private network' : item.wifi_password}
              onPress={() => {
                item.wifi_type
                  ? (Alert.alert('this is a private network'),
                    setWifiList(false))
                  : (clipboard.setString(item.wifi_password), setWifiList(true))
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
