import moment from 'moment'

import { WideListCard } from 'styles/cards.module'
import { __auth } from 'store/AuthSusbcribeProvider'
import { SafeAreaRowWrapperDetail } from '~/styles/detail.module'
import { fontPixel, heightPixel, widthPixel } from 'utils/normalization'
import { Image, View, Text as RNText, TouchableOpacity } from 'react-native'
import { animated, useSpring } from '@react-spring/native'

const AnimatedTouchable = animated(TouchableOpacity)

export default function ProfileCard() {
  const { subscribedUser } = __auth()

  const springStyling = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <AnimatedTouchable
      style={{
        ...springStyling,
        marginTop: 10,
        minHeight: 125,
        marginBottom: 21,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
      activeOpacity={0.8}>
      <SafeAreaRowWrapperDetail
        style={{ marginHorizontal: 10, alignItems: 'center' }}>
        <Image
          source={{ uri: subscribedUser.profile_image }}
          style={{ ...styling.image }}
        />
        <View style={{ ...styling.view }}>
          <RNText
            style={{
              marginBottom: 5,
              ...styling.text,
              color: '#293462',
              fontFamily: 'inter-600',
              fontSize: fontPixel(21),
            }}>{`${subscribedUser.first_name} ${subscribedUser.last_name}`}</RNText>
          <RNText style={{ ...styling.text }}>
            {subscribedUser.hotel_stay.hotel_name}
          </RNText>
          <RNText
            style={{
              ...styling.text,
            }}>{`room: ${subscribedUser.hotel_stay.room_floor}-${subscribedUser.hotel_stay.room_number}`}</RNText>
          <RNText style={{ ...styling.text }}>
            {`period: ${Math.abs(
              moment(subscribedUser.hotel_stay.checkin, 'DD-MM-YYYY')
                .startOf('day')
                .diff(
                  moment(
                    subscribedUser.hotel_stay.checkout,
                    'DD-MM-YYYY'
                  ).startOf('day'),
                  'days'
                )
            )} day`}
          </RNText>
        </View>
      </SafeAreaRowWrapperDetail>
    </AnimatedTouchable>
  )
}

const styling = {
  image: {
    borderRadius: 500,
    width: widthPixel(82),
    height: heightPixel(82),
  },

  view: {
    flex: 1,
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },

  text: {
    letterSpacing: 0.5,
    fontFamily: 'inter-400',
    fontSize: fontPixel(16),
    textTransform: 'capitalize',
  },
}
