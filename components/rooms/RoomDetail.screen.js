import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'

import { palette } from 'themes/palette'
import { View as Gap } from 'react-native'
import { StyledTagCards } from 'styles/cards.module'
import {
  HFLine,
  RadiusView,
  SafeAreaRowWrapperDetail,
  View,
} from 'styles/detail.module'

export default function RoomDetailScreen({ route }) {
  const { _data } = route.params
  return (
    <View>
      <CloseHeader />
      <Carsouel imageArray={_data.room_images} />
      <RadiusView>
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
              {_data.room_price_promotion > 1 ? (
                <Text
                  size={21}
                  up={'cap'}
                  weight={600}
                  color={'dominant'}
                  content={`${
                    _data.room_price - (_data.room_price * 15) / 100
                  }$`}
                />
              ) : (
                <Text
                  size={21}
                  up={'cap'}
                  weight={600}
                  color={'dominant'}
                  content={`${_data.room_price}$`}
                />
              )}

              <Gap>
                <Text size={14} up={'cap'} weight={500} content={'/night'} />
              </Gap>
            </Gap>
          </SafeAreaRowWrapperDetail>
          <Gap style={{ marginTop: 10 }} />
          <Text size={16} color={'gray'} content={_data.room_description} />
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
                  content={`${_data.room_location_floor} - ${_data.room_location_number}`}
                />
              </StyledTagCards>
              <StyledTagCards>
                <Icon
                  name={
                    _data.room_quality_smoking
                      ? 'ri-shield-check-line'
                      : 'ri-alarm-warning-line'
                  }
                  color={
                    _data.room_quality_smoking
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
                <Text
                  size={14}
                  up={'up'}
                  weight={500}
                  content={_data.room_quality_size}
                />
              </StyledTagCards>
              <StyledTagCards>
                <Text
                  size={21}
                  up={'up'}
                  weight={500}
                  content={_data.room_quality_area}
                />
                <Text size={14} up={'up'} weight={500} content={'Area'} />
              </StyledTagCards>
            </SafeAreaRowWrapperDetail>
          </>
          <>
            <HFLine />
            <Text content={'occupency'} weight={500} size={18} up={'cap'} />
            {_data.room_occupency.max_occupency > 0 && (
              <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
                <Text
                  color={'gray'}
                  content={'max occupency'}
                  size={16}
                  up={'cap'}
                />
                <Text
                  content={_data.room_occupency.max_occupency}
                  color={'dominant'}
                  weight={500}
                  size={16}
                  up={'cap'}
                />
              </SafeAreaRowWrapperDetail>
            )}

            {_data.room_occupency.max_adult > 0 && (
              <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
                <Text
                  color={'gray'}
                  content={'max adult'}
                  size={16}
                  up={'cap'}
                />
                <Text
                  content={_data.room_occupency.max_adult}
                  color={'dominant'}
                  weight={500}
                  size={16}
                  up={'cap'}
                />
              </SafeAreaRowWrapperDetail>
            )}

            {_data.room_occupency.max_children > 0 && (
              <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
                <Text
                  color={'gray'}
                  content={'max children'}
                  size={16}
                  up={'cap'}
                />
                <Text
                  content={_data.room_occupency.max_children}
                  color={'dominant'}
                  weight={500}
                  size={16}
                  up={'cap'}
                />
              </SafeAreaRowWrapperDetail>
            )}
            {_data.room_occupency.max_guests > 0 && (
              <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
                <Text
                  color={'gray'}
                  content={'max guests'}
                  size={16}
                  up={'cap'}
                />
                <Text
                  content={_data.room_occupency.max_guests}
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
