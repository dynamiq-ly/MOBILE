import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'
import ShipCard from 'components/cards/ShipCard'

import { useQuery } from 'react-query'
import { baseUrl, __query } from 'hooks/useApi'
import { useSpring } from '@react-spring/native'
import { FADE_IN_DONW, FADE_IN_UP } from 'animation/FADE_IN'
import { ImageBackground, View as Gap, TouchableOpacity } from 'react-native'

import {
  View,
  RadiusView,
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
          <HdRow style={{ marginBottom: 5 }}>
            <Icon
              name={'ri-map-pin-line'}
              size={18}
              style={{ marginRight: 5 }}
            />
            <Text content={data.bar_location} />
          </HdRow>

          <>
            <SafeAreaRowWrapperDetail
              style={{ marginBottom: -24, marginTop: -10 }}>
              <ShipCard
                name={'arnold'}
                underName='E.CHEF'
                image={
                  'https://www.sapkoenchev.com/SPK_StsContFiles/1647851-1-marco-674x418.jpg'
                }
              />
              <ShipCard
                name={'alex'}
                underName='S.CHEF'
                image={
                  'https://servingalcohol.com/wp-content/uploads/2021/10/attractive-male-barman-is-making-cocktail-in-bar.jpg'
                }
              />
            </SafeAreaRowWrapperDetail>
          </>

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
          <ImageBackground
            source={{
              uri: 'https://media.istockphoto.com/id/861030682/vector/cocktails-menu-chalkboard-set.jpg?s=612x612&w=0&k=20&c=eCN08wJCq8dJVUaPKD_SUHMQyP8SDpjn6bQ-iodLuMg=',
            }}
            style={{
              height: 100,
              width: '100%',
              borderRadius: 8,
              overflow: 'hidden',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0a0a0a50',
              }}
              onPress={() =>
                navigation.navigate('menu-tab-stack-bar-menu-list', {
                  _id: _id,
                  _data: data.menus,
                })
              }>
              <Text
                size={28}
                up={'cap'}
                weight={600}
                color={'white'}
                content={'bar menu'}
              />
            </TouchableOpacity>
          </ImageBackground>

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
