import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'

import { fontPixel } from '~/utils/normalization'
import { BoxIcon, BoxText, PhoneDirectoryRow } from '~/styles/list.module'
import {
  RadiusView,
  SafeAreaRowWrapperDetail,
  View,
} from 'styles/detail.module'
import { palette } from '~/themes/palette'
import { useState } from 'react'

export default function PointOfInterestDetailScreen({ route }) {
  const { _data } = route.params
  const [isLiked, setLiked] = useState(false)

  return (
    <View>
      <CloseHeader />
      <Carsouel imageArray={_data.image} />
      <RadiusView>
        <AreaView mode={'light'}>
          <SafeAreaRowWrapperDetail
            style={{ alignItems: 'center', marginBottom: 14 }}>
            <Text content={_data.name} weight={700} up={'cap'} size={28} />
            <Icon
              size={fontPixel(28)}
              name={`ri-heart-${isLiked ? 'fill' : 'line'}`}
              color={palette.error.accent_500}
              onPress={() => setLiked(!isLiked)}
            />
          </SafeAreaRowWrapperDetail>

          <Text
            content={_data.description}
            color={'gray'}
            weight={400}
            size={16}
          />

          <PhoneDirectoryRow>
            <BoxIcon>
              <Icon name={'ri-time-line'} size={fontPixel(18)} />
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

          <PhoneDirectoryRow>
            <BoxIcon>
              <Icon name={'ri-direction-line'} size={fontPixel(18)} />
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

          <PhoneDirectoryRow>
            <BoxIcon>
              <Icon name={'ri-phone-line'} size={fontPixel(18)} />
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
        </AreaView>
      </RadiusView>
    </View>
  )
}
