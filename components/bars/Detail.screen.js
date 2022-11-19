import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'
import TextOverImage from 'components/cards/TextOverImage'

import { useQuery } from 'react-query'
import { ImageBackground, View as Gap } from 'react-native'
import { baseUrl, __query } from 'hooks/useApi'
import { useSpring } from '@react-spring/native'
import { FADE_IN_DONW, FADE_IN_UP } from 'animation/FADE_IN'
import {
  View,
  RadiusView,
  ButtonWrapperDetail,
  HdRow,
  HFLine,
  SafeAreaRowWrapperDetail,
} from 'styles/detail.module'
import { palette } from '~/themes/palette'

export default function DetailScreen({ route, navigation }) {
  const { _id, _data } = route.params

  const springContent = useSpring({
    ...FADE_IN_UP.noOpacity,
  })

  const springCarousel = useSpring({
    ...FADE_IN_DONW.noOpacity,
  })

  const { data } = useQuery(['@bar-details', _id], () => fetchBarById(_id), {
    initialData: _data,
    refetchOnMount: true,
  })

  return (
    <View>
      <CloseHeader />
      <Carsouel
        style={{ ...springCarousel }}
        imageArray={[
          ...data.images.map((el) => ({
            image: `${baseUrl}storage/bars/${el.image}`,
          })),
        ]}
      />
      <RadiusView style={{ ...springContent }}>
        <AreaView mode={'light'}>
          <Gap style={{ marginBottom: 10 }} />
          <Text content={data.bar_name} weight={700} up={'cap'} size={28} />

          <HdRow style={{ marginTop: 5 }}>
            <Icon name={'ri-phone-line'} size={18} style={{ marginRight: 5 }} />
            <Text content={data.bar_phone_number} />
          </HdRow>
          <HdRow style={{ marginTop: 5, marginBottom: 5 }}>
            <Icon name={'ri-time-line'} size={18} style={{ marginRight: 5 }} />
            <Text content={data.bar_open_time} />
          </HdRow>
          {/* to get back later */}
          <HdRow style={{ marginBottom: 10 }}>
            <Icon
              name={'ri-map-pin-line'}
              size={18}
              style={{ marginRight: 5 }}
              color={palette.secondary.accent_700}
            />
            <Text content={'location'} color={'dominant'} />
          </HdRow>

          <SafeAreaRowWrapperDetail
            style={{ alignItems: 'center', marginTop: 5 }}>
            <ImageBackground
              style={{
                width: 42,
                height: 42,
              }}
              source={{
                uri: 'https://w7.pngwing.com/pngs/529/271/png-transparent-panagiotis-giannakis-t-shirt-arm-shoulder-professional-fitness-coach-tshirt-physical-fitness-arm.png',
              }}
            />
            <Gap style={{ flex: 1, marginLeft: 24 }}>
              <Text
                color={'gray'}
                content={
                  'This is Liam the head of the animation and inhote activities departement.'
                }
              />
            </Gap>
          </SafeAreaRowWrapperDetail>

          <>
            <HFLine />
            <Text
              style={{ marginBottom: 10 }}
              content={'descripton'}
              weight={500}
              size={18}
              up={'cap'}
            />
            <Text
              content={data.bar_description}
              color={'gray'}
              weight={400}
              size={16}
            />
          </>
          <Gap style={{ marginBottom: 10 }} />
          <TextOverImage
            image={
              'https://img.freepik.com/premium-vector/vector-mock-up-white-glass-blank-wine-close-bootle-with-cap-white-label-illustration-realistic-with-shadow-template-design-isolated-dark-background_111984-477.jpg?w=360'
            }
            name={'drinks menu'}
            onPress={() =>
              navigation.navigate('menu-tab-stack-bar-menu-list', {
                _id: _id,
                _data: data.menus,
              })
            }
          />

          {data.bar_closed_days.length > 0 && (
            <>
              <HFLine />
              <Text content={'closed days'} weight={500} size={18} up={'cap'} />
              <Gap
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                {data.bar_closed_days.split(',').map((el, key) => (
                  <Gap
                    key={key}
                    style={{
                      marginRight: 5,
                      borderRadius: 5,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      backgroundColor: '#f87171',
                    }}>
                    <Text size={16} content={el} color={'white'} up={'up'} />
                  </Gap>
                ))}
              </Gap>
            </>
          )}
          <Gap style={{ marginBottom: 24 }} />
        </AreaView>
      </RadiusView>
      {/* removed for extra purpose maybe he don't want bars to be reserved a place */}
      {/* {data.bar_can_book === 1 && (
        <ButtonWrapperDetail>
          <Button title={'reserve your stand'} />
        </ButtonWrapperDetail>
      )} */}
    </View>
  )
}

let fetchBarById = function (id) {
  return __query
    .get(`api/bar/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}
