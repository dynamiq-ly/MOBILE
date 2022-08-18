import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'
import ShipCard from 'components/cards/ShipCard'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'
import TextOverImage from 'components/cards/TextOverImage'

import { View as Gap } from 'react-native'
import { baseUrl, __query } from 'hooks/useApi'
import { useSpring } from '@react-spring/native'
import { FADE_IN_DONW, FADE_IN_UP } from 'animation/FADE_IN'
import {
  ButtonWrapperDetail,
  View,
  SafeAreaRowWrapperDetail,
  HFLine,
  TextWrapper,
  RadiusView,
} from 'styles/detail.module'
import { useQuery } from 'react-query'

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
              marginBottom: 10,
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

          {data.chefs !== null && (
            <>
              <HFLine />
              <Text content={'chefs'} weight={500} size={18} up={'cap'} />
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

          <SafeAreaRowWrapperDetail>
            <TextOverImage
              image={
                'https://www.heinonwine.com/wp-content/uploads/2019/04/Malaysia.jpg-lr.jpg'
              }
              name={'food'}
              onPress={() =>
                navigation.navigate(
                  'menu-tab-stack-restaurant-detail-menu-food'
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
                  'menu-tab-stack-restaurant-detail-menu-drinks'
                )
              }
            />
          </SafeAreaRowWrapperDetail>

          {data.regulations.length !== 0 && (
            <>
              <HFLine />
              {data.regulations.reverse().map((el) => {
                return (
                  <>
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
                  </>
                )
              })}
            </>
          )}
          <Gap style={{ marginBottom: 32 }} />
        </AreaView>
      </RadiusView>
      <ButtonWrapperDetail>
        <Button title={'book table'} icon={'ri-bookmark-3-line'} />
      </ButtonWrapperDetail>
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
