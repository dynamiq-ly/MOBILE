import Text from 'components/text/Text'
import SafeAreaView from 'utils/SafeAreaView'

import { View as Gap, Image as RnImage } from 'react-native'
import { __auth } from 'store/AuthSusbcribeProvider'
import { SafeAreaRowWrapperDetail } from 'styles/detail.module'

export default function MainScreen() {
  const { isLoggedIn } = __auth()

  return (
    <SafeAreaView mode={'dark'}>{isLoggedIn && <AccountHeader />}</SafeAreaView>
  )
}

const AccountHeader = function () {
  const { subscribedUser } = __auth()

  return (
    <SafeAreaRowWrapperDetail style={{ alignItems: 'center', marginTop: 14 }}>
      <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RnImage
          style={{ width: 42, height: 42, borderRadius: 100, marginRight: 10 }}
          source={{ uri: subscribedUser.profile_image }}
        />
        <Gap>
          <Text
            size={24}
            up={'cap'}
            content={`Hi!`}
            weight={800}
            color={'dominant'}
          />
          <Text
            size={20}
            up={'cap'}
            content={`${subscribedUser.first_name} ${subscribedUser.last_name}`}
          />
        </Gap>
      </Gap>
    </SafeAreaRowWrapperDetail>
  )
}
