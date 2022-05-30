import Toast from 'components/toast/Toast'
import AreaView from 'utils/TabAreaView'
import * as clipboard from 'expo-clipboard'
import ClipBoardButton from './Clibboardbutton'

import { useState } from 'react'
import { View } from 'styles/detail.module'
import { Image } from 'styles/image.module'
import { wifi_list } from 'mock/wifi_list'
import { Alert, View as VV } from 'react-native'

export default function Connectivity() {
  const [wifiList, setWifiList] = useState(false)

  return (
    <View>
      <AreaView>
        <Image
          source={{
            uri: 'https://cdn.dribbble.com/users/1022481/screenshots/16115078/media/6dce72ec032f05fec93ac038f2eeb36a.png?compress=1&resize=1200x900&vertical=top',
          }}
        />
        <VV style={{ marginBottom: 24 }} />
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
