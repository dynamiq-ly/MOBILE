import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import { __auth } from 'store/AuthSusbcribeProvider'
import { SafeAreaRowWrapperDetail } from '~/styles/detail.module'
import { heightPixel, widthPixel } from 'utils/normalization'
import { Image, View, TouchableOpacity } from 'react-native'
import { animated, useSpring } from '@react-spring/native'
import { palette } from '~/themes/palette'

const AnimatedTouchable = animated(TouchableOpacity)

export default function ProfileCard({ navigation, animate = '' }) {
  const { subscribedUser } = __auth()

  const springStyling = useSpring({
    opacity: animate.length === 0 ? 1 : 0,
  })

  return (
    <AnimatedTouchable
      style={{
        ...springStyling,
        marginTop: 5,
        marginBottom: 21,
        borderRadius: 14,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.primary.accent_0,
      }}
      onPress={() => navigation.navigate('menu-tab-stack-profile')}
      activeOpacity={0.8}>
      <SafeAreaRowWrapperDetail
        style={{ marginHorizontal: 15, alignItems: 'center' }}>
        <Image
          source={{ uri: subscribedUser.profile_image }}
          style={{ ...styling.image }}
        />
        <View style={{ ...styling.view }}>
          <Text
            size={20}
            up={'cap'}
            weight={600}
            color={'dominant'}
            content={`${subscribedUser.first_name} ${subscribedUser.last_name}`}
          />
          <Text
            up={'cap'}
            content={`room: ${subscribedUser.hotel_stay.room_floor}-${subscribedUser.hotel_stay.room_number}`}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name='ri-wallet-line'
            color={palette.primary.accent_900}
            style={{ marginRight: 5 }}
            size={21}
          />
          <Text content={'167$'} size={18} weight={700} />
        </View>
      </SafeAreaRowWrapperDetail>
    </AnimatedTouchable>
  )
}

const styling = {
  image: {
    borderRadius: 100,
    width: widthPixel(62),
    height: heightPixel(62),
  },

  view: {
    flex: 1,
    marginHorizontal: 18,
    justifyContent: 'center',
  },
}
