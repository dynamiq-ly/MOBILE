import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import Button from 'components/button/Button'
import Radio from 'components/checkbox/Radio'
import CloseHeader from 'components/header/CloseHeader'
import RadioButtonCard from 'components/cards/RadioButtonCard'

import { useState } from 'react'
import { useQuery } from 'react-query'
import { __query, baseUrl } from 'hooks/useApi'
import { HFLine, RadiusView, View } from 'styles/detail.module'
import { LogBox, View as Gap } from 'react-native'

import {
  Image,
  ButtonWrapperDetail,
  SafeAreaRowWrapperDetail,
} from 'styles/detail.module'

const AcloholDrinkDetails = ({ route }) => {
  const { _id, _data } = route.params
  const [type, setType] = useState('bottle')

  const { data } = useQuery(
    ['@restaurant-drink-menu-alcohol-detial', _id],
    () => restaurantDrinkMenuAlcoholById(_id),
    {
      refetchOnMount: true,
      initialData: _data,
    }
  )

  return (
    <View>
      <CloseHeader />
      <Image
        source={{
          uri: `${baseUrl}storage/restaurants/menu/drink/bottles/${data.drink_alcohol_image}`,
        }}
      />
      <RadiusView>
        <AreaView>
          <Text
            content={_data.drink_alcohol_name}
            weight={700}
            up={'cap'}
            size={32}
          />
          <Text
            content={`${_data.drink_alcohol_origin} ${_data.drink_alcohol_year}`}
            up={'cap'}
            size={21}
          />

          <Gap style={{ marginBottom: 10 }} />
          <Text
            content={_data.drink_alcohol_description}
            color={'gray'}
            size={16}
          />
          <SafeAreaRowWrapperDetail
            style={{ marginTop: 24, alignItems: 'center' }}>
            <Gap
              style={{
                backgroundColor: 'white',
                width: '45%',
                padding: 10,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                content={`bottles ${data.drink_alcohol_bottle_size}ml`}
                weight={600}
                up={'cap'}
                size={20}
              />
              <Text
                size={18}
                weight={500}
                color={'dominant'}
                style={{ marginTop: 5 }}
                content={`${data.drink_alcohol_bottle_price}$`}
              />
            </Gap>
            <Gap
              style={{
                backgroundColor: 'white',
                width: '45%',
                padding: 10,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                content={`glass ${data.drink_alcohol_glass_size}ml`}
                weight={600}
                up={'cap'}
                size={20}
              />
              <Text
                size={18}
                weight={500}
                color={'dominant'}
                style={{ marginTop: 5 }}
                content={`${data.drink_alcohol_glass_price}$`}
              />
            </Gap>
          </SafeAreaRowWrapperDetail>

          <>
            <HFLine />
            <SafeAreaRowWrapperDetail
              style={{ alignItems: 'center', marginBottom: 15 }}>
              <Text
                content={'drink alcohol percentage'}
                weight={600}
                up={'cap'}
                size={18}
              />
              <Text
                content={`${data.drink_alcohol_percentage}%`}
                color={'gray'}
                weight={600}
                up={'cap'}
                size={18}
              />
            </SafeAreaRowWrapperDetail>
          </>
          <>
            <HFLine />
            <Gap style={{ marginBottom: 15 }}>
              <Text
                content={'drink alcohol ingredient'}
                weight={600}
                up={'cap'}
                size={18}
              />

              <Gap
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: 12,
                }}>
                {data.drink_alcohol_ingredient.split(',').map((el, key) => (
                  <Gap
                    key={key}
                    style={{
                      backgroundColor: 'white',
                      paddingHorizontal: 8,
                      paddingVertical: 3,
                      borderRadius: 4,
                    }}>
                    <Text content={el} />
                  </Gap>
                ))}
              </Gap>
            </Gap>
          </>
        </AreaView>
      </RadiusView>
    </View>
  )
}

let restaurantDrinkMenuAlcoholById = function (id) {
  return __query
    .get(`api/restaurant/drinks/alcohol/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)

export default AcloholDrinkDetails
