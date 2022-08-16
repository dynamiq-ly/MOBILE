import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'

import { useState } from 'react'
import { View as Gap } from 'react-native'
import { palette } from '~/themes/palette'
import { fontPixel } from '~/utils/normalization'
import { BoxIcon, BoxText, PhoneDirectoryRow } from 'styles/list.module'

import { useSpring } from '@react-spring/native'
import { FADE_IN_DONW, FADE_IN_UP } from 'animation/FADE_IN'

import {
  RadiusView,
  SafeAreaRowWrapperDetail,
  View,
} from 'styles/detail.module'

export default function PointOfInterestDetailScreen({ route }) {
  const { _data } = route.params
  const [isLiked, setLiked] = useState(false)

  const springContent = useSpring({
    ...FADE_IN_UP.noOpacity,
  })

  const springCarousel = useSpring({
    ...FADE_IN_DONW.noOpacity,
  })

  return (
    <View>
      <CloseHeader />
      <Carsouel imageArray={_data.image} style={{ ...springCarousel }} />
      <RadiusView style={{ ...springContent }}>
        <AreaView mode={'light'}>
          <Gap style={{ marginBottom: 10 }} />
          <SafeAreaRowWrapperDetail
            style={{ alignItems: 'flex-start', marginBottom: 14 }}>
            <Gap style={{ width: '80%' }}>
              <Text content={_data.name} weight={700} up={'cap'} size={28} />
            </Gap>
            <Icon
              size={fontPixel(28)}
              name={`ri-heart-${isLiked ? 'fill' : 'line'}`}
              color={palette.error.accent_500}
              onPress={() => setLiked(!isLiked)}
              style={{ marginTop: 5 }}
            />
          </SafeAreaRowWrapperDetail>

          <Text
            content={_data.description}
            color={'gray'}
            weight={400}
            size={16}
          />
          <Gap style={{ marginBottom: 14 }} />
          <PhoneDirectoryRow align>
            <BoxIcon>
              <Icon name={'ri-time-line'} size={fontPixel(21)} />
            </BoxIcon>
            <BoxText>
              <Text
                content={`${_data.open} – ${_data.close}`}
                weight={400}
                up={'cap'}
                size={18}
              />
            </BoxText>
          </PhoneDirectoryRow>

          <PhoneDirectoryRow align>
            <BoxIcon>
              <Icon name={'ri-direction-line'} size={fontPixel(21)} />
            </BoxIcon>
            <BoxText>
              <Text
                content={_data.location}
                weight={400}
                up={'cap'}
                size={18}
              />
            </BoxText>
          </PhoneDirectoryRow>

          <PhoneDirectoryRow align>
            <BoxIcon>
              <Icon name={'ri-phone-line'} size={fontPixel(21)} />
            </BoxIcon>
            <BoxText>
              <Text
                content={_data.phone_number}
                weight={400}
                up={'cap'}
                size={18}
              />
            </BoxText>
          </PhoneDirectoryRow>
          <Gap style={{ marginBottom: 24 }} />
        </AreaView>
      </RadiusView>
    </View>
  )
}
