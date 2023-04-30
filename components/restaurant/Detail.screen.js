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
import { View as Gap, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ButtonWrapperDetail, View, SafeAreaRowWrapperDetail, HFLine, TextWrapper, RadiusView } from 'styles/detail.module'

export default function DetailScreen({ navigation, route }) {
  const { _id, _data } = route.params

  const springContent = useSpring({
    ...FADE_IN_UP.noOpacity,
  })

  const springCarousel = useSpring({
    ...FADE_IN_DONW.noOpacity,
  })

  const { data } = useQuery(['@restaurant-details', _id], () => fetchRestaurantById(_id), {
    initialData: _data,
    refetchOnMount: true,
  })

  const { id, isBuffet, ...schedule } = data.schedule

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
          <Text content={data.restaurant_name} weight={700} up={'cap'} size={28} />

          <Gap
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name={'ri-phone-line'} size={18} style={{ marginRight: 5 }} />
            <Text content={data.restaurant_phone} />
          </Gap>

          <Gap
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name={'ri-mail-line'} size={18} style={{ marginRight: 5 }} />
            <Text content={data.restaurant_email} />
          </Gap>

          <Gap
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name={'ri-map-pin-line'} style={{ marginRight: 5 }} size={18} />
            <Text content={data.restaurant_location} />
          </Gap>

          <Gap style={{ marginTop: 15 }}>
            <Text content={data.restaurant_description} color={'gray'} weight={400} size={16} />
          </Gap>

          <>
            <HFLine />
            <Text content={'specialities'} weight={500} size={18} up={'cap'} />
            <Gap style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8, marginBottom: 10 }}>
              {data.specialities
                .sort((a, b) => b.speciality_main - a.speciality_main) // sort based on speciality_main
                .map((el) => (
                  <Gap
                    key={el.id}
                    style={{
                      backgroundColor: el.speciality_main ? '#f6ad55' : '#cbd5e0', // set different background color for speciality_main
                      borderRadius: 6,
                      marginRight: 8,
                      marginBottom: 8,
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                    }}>
                    <Text up={'cap'} size={16} weight={600} content={el.speciality_name} />
                  </Gap>
                ))}
            </Gap>
          </>

          {data.servings &&
            data.servings
              .sort((a, b) => b.speciality_main - a.speciality_main) // sort based on speciality_main
              .map((el) => (
                <Gap key={el.id} style={{ marginBottom: 8 }}>
                  <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text up={'cap'} size={18} weight={600} content={el.serving_name} />
                    <Text up={'cap'} size={16} weight={600} content={`${el.serving_opens} - ${el.serving_closes}`} style={{ marginLeft: 16 }} />
                  </Gap>
                  <Text color={'gray'} up={'cap'} size={14} weight={600} content={el.serving_description} />
                </Gap>
              ))}

          <>
            {data.chefs !== null && (
              <>
                <HFLine />
                <Text content={'Chefs'} weight={500} size={18} up={'cap'} />
                <Gap style={{ marginBottom: -10 }}>
                  {data.chefs.map((el) => (
                    <ShipCard key={el.id} name={el.chef_name} underName={el.chef_role} image={`${baseUrl}storage/restaurants/chefs/${el.chef_image}`} />
                  ))}
                </Gap>
              </>
            )}
          </>

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
            <Icon name={'ri-focus-2-line'} style={{ marginRight: 5 }} color={palette.secondary.accent_700} size={18} />
            <Text content={'food protocol'} up={'cap'} color={'dominant'} />
          </TouchableOpacity>

          <SafeAreaRowWrapperDetail>
            <TextOverImage
              image={'https://www.heinonwine.com/wp-content/uploads/2019/04/Malaysia.jpg-lr.jpg'}
              name={'food'}
              // onPress={() =>
              //   navigation.navigate('menu-tab-stack-restaurant-detail-menu-food', {
              //     _id: data.id,
              //     _data: [...data.food_catalog],
              //   })
              // }
            />
            <TextOverImage
              image={'https://cdn.shopify.com/s/files/1/0021/4355/1535/files/Taylors-Very-Very-Old-Tawny-Port-1_500x500.png?v=1650901488'}
              name={'drinks'}
              // onPress={() =>
              //   navigation.navigate('menu-tab-stack-restaurant-detail-menu-drinks', {
              //     _id: data.id,
              //     _data: [...data.drink_catalog],
              //   })
              // }
            />
          </SafeAreaRowWrapperDetail>

          <>
            <HFLine />
            <Text content={'weekly themes'} style={{ marginBottom: 15 }} weight={500} up={'cap'} size={18} />
            {isBuffet ? (
              Object.entries(schedule).map(([key, val], index) => (
                <SafeAreaRowWrapperDetail key={index} style={{ alignItems: 'center' }}>
                  <Text color={'gray'} content={key} size={16} up={'cap'} />
                  <Text content={val ? val : 'all round'} color={!val && 'gray'} weight={600} up={'cap'} size={16} />
                </SafeAreaRowWrapperDetail>
              ))
            ) : (
              <Text content={'This restaurant is not a buffet, scroll up to serving to see its time table.'} color={'gray'} weight={500} size={16} />
            )}
          </>

          {data.regulations.length !== 0 && (
            <>
              <HFLine />
              {data.regulations.map((el) => {
                return (
                  <Gap key={el.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: `${baseUrl}storage/restaurants/regulations/${el.regulation_images}` }} style={{ height: 36, width: 36, borderRadius: '50%', marginRight: 10 }} />
                    <TextWrapper>
                      <Text content={el.regulation_name} weight={500} size={18} up={'cap'} />
                      <Text content={el.regulation_description} color={'gray'} weight={400} size={16} />
                    </TextWrapper>
                  </Gap>
                )
              })}
            </>
          )}
          <Gap style={{ marginBottom: 32 }} />
        </AreaView>
      </RadiusView>
      {data.booking.can_book === 1 && (
        <ButtonWrapperDetail>
          <Button title={'make reservation'} icon={'ri-bookmark-line'} />
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
