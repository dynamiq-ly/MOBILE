import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'
import ShipCard from 'components/cards/ShipCard'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'
import TextOverImage from 'components/cards/TextOverImage'

import { useQuery } from 'react-query'
import { palette } from 'themes/palette'
import { baseUrl, __query } from 'hooks/useApi'
import { useSpring } from '@react-spring/native'
import { FADE_IN_DONW, FADE_IN_UP } from 'animation/FADE_IN'
import { View as Gap, TouchableOpacity } from 'react-native'
import {
  ButtonWrapperDetail,
  View,
  SafeAreaRowWrapperDetail,
  HFLine,
  TextWrapper,
  RadiusView,
} from 'styles/detail.module'

export default function DetailScreen({ navigation, route }) {
  const { _id, _data } = route.params

  const springContent = useSpring({
    ...FADE_IN_UP.noOpacity,
  })

  const springCarousel = useSpring({
    ...FADE_IN_DONW.noOpacity,
  })

  const { data } = useQuery(
    ['@restaurant-details', _id],
    () => fetchRestaurantById(_id),
    {
      initialData: _data,
      refetchOnMount: true,
    }
  )

  return (
    <View>
      <CloseHeader />

      <Carsouel
        style={{ ...springCarousel }}
        imageArray={[
          ...data.images.map((el) => ({
            image: `${baseUrl}storage/restaurants/${el.image}`,
          })),
        ]}
      />

      <RadiusView style={{ ...springContent }}>
        <AreaView mode={'light'}>
          <Gap style={{ marginBottom: 10 }} />
          <Text
            content={data.restaurant_name}
            weight={700}
            up={'cap'}
            size={28}
          />

          <Gap
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name={'ri-phone-line'} size={18} style={{ marginRight: 5 }} />
            <Text content={`28 10 54 45`} />
          </Gap>
          <Gap
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name={'ri-map-pin-line'}
              style={{ marginRight: 5 }}
              size={18}
            />
            <Text content={'Main Hall'} />
          </Gap>
          <Gap
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <Icon name={'ri-time-line'} style={{ marginRight: 5 }} size={18} />
            <Text
              content={`${data.restaurant_opens} to ${data.restaurant_closes}`}
            />
          </Gap>

          <Text
            content={data.restaurant_descripton}
            color={'gray'}
            weight={400}
            size={16}
          />

          <>
            <HFLine />
            <Gap style={{ flexDirection: 'row' }}>
              <Text up={'cap'} size={16} content={'speciality: '} />
              <Text
                up={'cap'}
                size={16}
                weight={600}
                content={data.restaurant_speciality}
              />
            </Gap>
          </>

          {data.chefs !== null && (
            <>
              <SafeAreaRowWrapperDetail>
                <ShipCard
                  name={data.chefs.restaurant_chef_exec_name}
                  underName='E.CHEF'
                  image={`${baseUrl}storage/restaurants/chefs/${data.chefs.restaurant_chef_exec_image}`}
                />
                <ShipCard
                  name={data.chefs.restaurant_chef_name}
                  underName='S.CHEF'
                  image={`${baseUrl}storage/restaurants/chefs/${data.chefs.restaurant_chef_image}`}
                />
              </SafeAreaRowWrapperDetail>
            </>
          )}

          <HFLine />
          <Text content={'Menus'} weight={500} size={18} up={'cap'} />

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}
            onPress={() =>
              navigation.navigate('menu-tab-stack-safety-detail', {
                _id: 2,
                _name: 'food allergy',
                _data: {
                  measure_content: '',
                },
              })
            }>
            <Icon
              name={'ri-focus-2-line'}
              style={{ marginRight: 5 }}
              color={palette.secondary.accent_700}
              size={18}
            />
            <Text content={'food protocol'} up={'cap'} color={'dominant'} />
          </TouchableOpacity>

          <SafeAreaRowWrapperDetail>
            <TextOverImage
              image={
                'https://www.heinonwine.com/wp-content/uploads/2019/04/Malaysia.jpg-lr.jpg'
              }
              name={'food'}
              onPress={() =>
                navigation.navigate(
                  'menu-tab-stack-restaurant-detail-menu-food',
                  {
                    _id: data.id,
                    _data: [...data.food_categories],
                  }
                )
              }
            />
            <TextOverImage
              image={
                'https://cdn.shopify.com/s/files/1/0021/4355/1535/files/Taylors-Very-Very-Old-Tawny-Port-1_500x500.png?v=1650901488'
              }
              name={'drinks'}
              onPress={() =>
                navigation.navigate(
                  'menu-tab-stack-restaurant-detail-menu-drinks',
                  {
                    _id: data.id,
                    _data: [...data.drink_categories],
                  }
                )
              }
            />
          </SafeAreaRowWrapperDetail>

          {data.schedule && (
            <>
              <HFLine />
              <Text
                content={'weekly themes'}
                style={{ marginBottom: 15 }}
                weight={500}
                up={'cap'}
                size={18}
              />
              {Object.entries(data.schedule).map(([key, val], index) => (
                <SafeAreaRowWrapperDetail
                  key={index}
                  style={{ alignItems: 'center' }}>
                  <Text color={'gray'} content={key} size={16} up={'cap'} />
                  <Text
                    content={val ? val : 'all round'}
                    color={!val && 'gray'}
                    weight={600}
                    up={'cap'}
                    size={16}
                  />
                </SafeAreaRowWrapperDetail>
              ))}
            </>
          )}

          {data.regulations.length !== 0 && (
            <>
              <HFLine />
              {data.regulations.reverse().map((el) => {
                return (
                  <Gap key={el.id}>
                    <Text
                      content={el.restaurant_regulations_name}
                      weight={500}
                      size={18}
                      up={'cap'}
                    />
                    <Gap style={{ marginBottom: 5 }} />
                    <TextWrapper>
                      <Text
                        content={el.restaurant_regulations_description}
                        color={'gray'}
                        weight={400}
                        size={16}
                      />
                    </TextWrapper>
                    <Gap style={{ marginBottom: 22 }} />
                  </Gap>
                )
              })}
            </>
          )}
          <Gap style={{ marginBottom: 32 }} />
        </AreaView>
      </RadiusView>
      {data.restaurant_can_book === 1 && (
        <ButtonWrapperDetail>
          <Button title={'book table'} icon={'ri-bookmark-3-line'} />
        </ButtonWrapperDetail>
      )}
    </View>
  )
}

let fetchRestaurantById = function (id) {
  return __query
    .get(`api/restaurant/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}
