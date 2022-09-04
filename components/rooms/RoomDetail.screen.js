import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'

import { rooms } from 'mock/rooms'
import { palette } from 'themes/palette'
import { View as Gap } from 'react-native'
import { useSpring } from '@react-spring/native'
import { StyledTagCards } from 'styles/cards.module'
import { FADE_IN_DONW, FADE_IN_UP } from 'animation/FADE_IN'
import {
  HFLine,
  RadiusView,
  SafeAreaRowWrapperDetail,
  View,
} from 'styles/detail.module'

export default function RoomDetailScreen({ route }) {
  const { _data } = route.params

  const springContent = useSpring({
    ...FADE_IN_UP.noOpacity,
  })

  const springCarousel = useSpring({
    ...FADE_IN_DONW.noOpacity,
  })

  return (
    <View>
      <CloseHeader />
      <Carsouel imageArray={rooms.room_images} style={{ ...springCarousel }} />
      <RadiusView style={{ ...springContent }}>
        <AreaView mode={'light'}>
          <Gap style={{ marginTop: 10 }} />
          <SafeAreaRowWrapperDetail style={{ alignItems: 'flex-start' }}>
            <Gap style={{ flex: 1 }}>
              <Text
                content={_data.room_name}
                weight={600}
                up={'cap'}
                size={21}
              />
            </Gap>
            <Gap
              style={{
                width: '25%',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              {/* {_data.room_price_promotion > 1 ? (
                <Text
                  size={21}
                  up={'cap'}
                  weight={600}
                  color={'dominant'}
                  content={`${
                    _data.room_price - (_data.room_price * 15) / 100
                  }$`}
                />
              ) : ( */}
              <Text
                size={21}
                up={'cap'}
                weight={600}
                color={'dominant'}
                content={`${_data.room_price}$`}
              />
              {/* )} */}

              <Gap>
                <Text size={14} up={'cap'} weight={500} content={'/night'} />
              </Gap>
            </Gap>
          </SafeAreaRowWrapperDetail>
          <Gap style={{ marginTop: 10 }} />
          <Text size={16} color={'gray'} content={_data.room_descripton} />
          <Gap style={{ marginTop: 10 }} />
          <Gap style={{ marginTop: 10 }} />
          <>
            <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
              <StyledTagCards>
                <Icon
                  name={'ri-map-pin-range-line'}
                  color={palette.secondary.accent_500}
                />
                <Text
                  size={14}
                  up={'up'}
                  weight={500}
                  content={`${_data.room_floor} - ${_data.room_number}`}
                />
              </StyledTagCards>
              <StyledTagCards>
                <Icon
                  name={
                    _data.room_smoking
                      ? 'ri-shield-check-line'
                      : 'ri-alarm-warning-line'
                  }
                  color={
                    _data.room_smoking
                      ? palette.success.accent_500
                      : palette.error.accent_500
                  }
                />
                <Text size={14} up={'up'} weight={500} content={'smoking'} />
              </StyledTagCards>

              <StyledTagCards>
                <Icon
                  name={'ri-hotel-bed-line'}
                  color={palette.secondary.accent_500}
                />
                <Text size={14} up={'up'} weight={500} content={'double'} />
              </StyledTagCards>
              <StyledTagCards>
                <Text
                  size={21}
                  up={'up'}
                  weight={500}
                  content={_data.room_space_area}
                />
                <Text size={14} up={'up'} weight={500} content={'Area'} />
              </StyledTagCards>
            </SafeAreaRowWrapperDetail>
          </>
          <>
            <HFLine />
            <Text content={'occupency'} weight={500} size={18} up={'cap'} />
            {_data.room_occupency_max > 0 && (
              <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
                <Text
                  color={'gray'}
                  content={'max occupency'}
                  size={16}
                  up={'cap'}
                />
                <Text
                  content={_data.room_occupency_max}
                  color={'dominant'}
                  weight={500}
                  size={16}
                  up={'cap'}
                />
              </SafeAreaRowWrapperDetail>
            )}

            {_data.room_occupency_max_adultt > 0 && (
              <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
                <Text
                  color={'gray'}
                  content={'max adult'}
                  size={16}
                  up={'cap'}
                />
                <Text
                  content={_data.room_occupency_max_adult}
                  color={'dominant'}
                  weight={500}
                  size={16}
                  up={'cap'}
                />
              </SafeAreaRowWrapperDetail>
            )}

            {_data.room_occupency_max_children > 0 && (
              <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
                <Text
                  color={'gray'}
                  content={'max children'}
                  size={16}
                  up={'cap'}
                />
                <Text
                  content={_data.room_occupency_max_children}
                  color={'dominant'}
                  weight={500}
                  size={16}
                  up={'cap'}
                />
              </SafeAreaRowWrapperDetail>
            )}
            {_data.room_occupency_max_guest > 0 && (
              <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
                <Text
                  color={'gray'}
                  content={'max guests'}
                  size={16}
                  up={'cap'}
                />
                <Text
                  content={_data.room_occupency_max_guest}
                  color={'dominant'}
                  weight={500}
                  size={16}
                  up={'cap'}
                />
              </SafeAreaRowWrapperDetail>
            )}
          </>
          {_data.room_features && (
            <>
              <HFLine />
              <Text content={'features'} weight={500} size={18} up={'cap'} />
              <Gap
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                {_data.room_features.split(',').map((el, key) => (
                  <Gap
                    key={key}
                    style={{
                      backgroundColor: '#fffffe',
                      marginRight: 5,
                      borderRadius: 5,
                      paddingVertical: 2,
                      paddingHorizontal: 10,
                    }}>
                    <Text size={16} content={el} />
                  </Gap>
                ))}
              </Gap>
            </>
          )}
          <Gap style={{ marginBottom: 42 }} />
        </AreaView>
      </RadiusView>
    </View>
  )
}
