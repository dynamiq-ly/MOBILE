import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'

import { useState } from 'react'
import { useQuery } from 'react-query'
import { palette } from 'themes/palette'
import { baseUrl, __query } from 'hooks/useApi'
import { fontPixel } from 'utils/normalization'
import { View as Gap, TouchableOpacity as Button } from 'react-native'
import { BoxIcon, BoxText, PhoneDirectoryRow } from 'styles/list.module'

import { useSpring } from '@react-spring/native'
import { FADE_IN_DONW, FADE_IN_UP } from 'animation/FADE_IN'

import {
  HFLine,
  RadiusView,
  SafeAreaRowWrapperDetail,
  View,
} from 'styles/detail.module'

export default function PointOfInterestDetailScreen({ route }) {
  const { _id, _data } = route.params
  const [isLiked, setLiked] = useState(false)

  const springContent = useSpring({
    ...FADE_IN_UP.noOpacity,
  })

  const springCarousel = useSpring({
    ...FADE_IN_DONW.noOpacity,
  })

  const { data } = useQuery(
    ['@point-interest-detail', _id],
    () => fetchPointById(_id),
    {
      refetchOnMount: true,
      initialData: _data,
    }
  )

  return (
    <View>
      <CloseHeader />
      <Carsouel
        imageArray={[
          ...data.images.map((el) => ({
            image: `${baseUrl}storage/points-of-interest/${el.image}`,
          })),
        ]}
      />
      <RadiusView>
        <AreaView mode={'light'}>
          <Gap style={{ marginBottom: 10 }} />
          <SafeAreaRowWrapperDetail
            style={{ alignItems: 'flex-start', marginBottom: 14 }}>
            <Gap style={{ width: '80%' }}>
              <Text
                content={data.point_title}
                weight={700}
                up={'cap'}
                size={28}
              />
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
            content={data.point_description}
            color={'gray'}
            weight={400}
            size={16}
          />
          <Gap style={{ marginBottom: 5 }} />

          <SafeAreaRowWrapperDetail
            style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
            <Button
              activeOpacity={0.8}
              style={{
                flex: 1,
                height: 36,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: palette.secondary.accent_200,
              }}>
              <Text
                content={'website'}
                color={'dominant'}
                weight={600}
                up={'cap'}
              />
            </Button>
            <Gap style={{ width: 24 }} />
            <Button
              activeOpacity={0.8}
              style={{
                flex: 1,
                height: 36,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: palette.secondary.accent_200,
              }}>
              <Text
                content={'location'}
                color={'dominant'}
                weight={600}
                up={'cap'}
              />
            </Button>
          </SafeAreaRowWrapperDetail>

          <Gap style={{ marginBottom: 5 }} />
          <>
            <PhoneDirectoryRow align>
              <BoxIcon>
                <Icon name={'ri-direction-line'} size={fontPixel(21)} />
              </BoxIcon>
              <BoxText>
                <Text
                  content={data.point_textual_location}
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
                  content={data.point_contact_number}
                  weight={400}
                  up={'cap'}
                  size={18}
                />
              </BoxText>
            </PhoneDirectoryRow>
            <PhoneDirectoryRow align>
              <BoxIcon>
                <Icon name={'ri-whatsapp-line'} size={fontPixel(21)} />
              </BoxIcon>
              <BoxText>
                <Text
                  content={data.point_contact_number}
                  weight={400}
                  up={'cap'}
                  size={18}
                />
              </BoxText>
            </PhoneDirectoryRow>
          </>

          <>
            <HFLine />
            <Text content={'open hours'} weight={500} size={18} up={'cap'} />

            <PhoneDirectoryRow
              style={{ marginBottom: 15, alignItems: 'center' }}>
              <BoxIcon>
                <Icon name={'ri-error-warning-line'} color={'orange'} />
              </BoxIcon>
              <BoxText>
                <Text
                  size={16}
                  color={'gray'}
                  content={'hours may change and can not be updated regularly.'}
                />
              </BoxText>
            </PhoneDirectoryRow>

            {data.schedule &&
              Object.entries(data.schedule).map(([key, val], index) => (
                <SafeAreaRowWrapperDetail
                  key={index}
                  style={{ alignItems: 'center' }}>
                  <Text color={'gray'} content={key} size={16} up={'cap'} />
                  <Text
                    content={val ? val : 'close'}
                    color={val ? 'dominant' : 'red'}
                    weight={600}
                    size={16}
                  />
                </SafeAreaRowWrapperDetail>
              ))}
          </>

          <Gap style={{ marginBottom: 24 }} />
        </AreaView>
      </RadiusView>
    </View>
  )
}

let fetchPointById = function (id) {
  return __query
    .get(`api/point-of-interest/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}
