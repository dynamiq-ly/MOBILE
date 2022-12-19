import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import AreaView from 'utils/TabAreaView'
import DetailedCard from 'components/cards/DetailedCard'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { palette } from '/themes/palette'
import { View } from 'styles/detail.module'
import { useCallback, useState } from 'react'
import { HScrollView } from 'styles/app.module'
import { VerticalListLine } from 'styles/list.module'
import { LogBox, View as Gap, RefreshControl } from 'react-native'

import { baseUrl, __query } from 'hooks/useApi'

import { useQuery } from 'react-query'

export default function FoodService({ navigation }) {
  const [isCategory, setCategory] = useState('breakfast')

  const { data, isFetched, refetch } = useQuery(
    'food-service',
    foodServiceFetcher,
    {
      refetchOnMount: true,
      initialData: [],
    }
  )

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <>
      {isFetched && (
        <View>
          <Gap>
            <HScrollView horizontal showsHorizontalScrollIndicator={false}>
              {data.map((el, key) => {
                return (
                  <Gap
                    style={{ alignItems: 'center', flexDirection: 'row' }}
                    key={key}>
                    <FixedWidthButton
                      title={el.food_service_name}
                      func={() => setCategory(el.food_service_name)}
                      active={
                        isCategory !== el.food_service_name ? true : false
                      }
                    />
                    {data.length !== key + 1 && <VerticalListLine />}
                  </Gap>
                )
              })}
              <Gap style={{ marginRight: 26 }} />
            </HScrollView>
          </Gap>

          <AreaView
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
            }>
            <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                size={21}
                name='ri-time-line'
                color={palette.secondary.accent_700}
              />
              {data
                .filter((el) => el.food_service_name === isCategory)
                .map((el, key) => {
                  return (
                    <Text
                      key={key}
                      size={16}
                      up={'cap'}
                      weight={500}
                      style={{ marginLeft: 5 }}
                      content={`from ${el.food_service_opens} to ${el.food_service_closes}`}
                    />
                  )
                })}
            </Gap>

            <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name='ri-money-dollar-circle-line'
                color={palette.secondary.accent_700}
                size={21}
              />
              {data
                .filter((el) => el.food_service_name === isCategory)
                .map((el, key) => {
                  return (
                    <Text
                      key={key}
                      size={16}
                      weight={500}
                      style={{ marginLeft: 5 }}
                      content={`Minimum order of ${el.food_service_min_order}`}
                    />
                  )
                })}
            </Gap>

            {data
              .filter((el) => el.food_service_name === isCategory)
              .slice(0, 1)
              .map((el, key) => {
                return (
                  <Text
                    key={key}
                    content={el.food_service_description}
                    color={'gray'}
                    style={{ marginTop: 10, marginBottom: 24 }}
                  />
                )
              })}

            {data
              .find((el) => el.food_service_name === isCategory)
              .plates.map((el, key) => {
                return (
                  <DetailedCard
                    key={key}
                    title={el.plate_name}
                    price={el.plate_price}
                    image={`${baseUrl}storage/room-service/food-service/${el.plate_image}`}
                    description={
                      el.plate_descripiton.length > 70
                        ? `${el.plate_descripiton.slice(0, 70)}...`
                        : el.plate_descripiton
                    }
                    onPress={() =>
                      navigation.navigate(
                        'menu-tab-stack-room-service-food-service-detail',
                        { _name: el.plate_name, _data: el, _id: el.id }
                      )
                    }
                  />
                )
              })}
          </AreaView>
        </View>
      )}
    </>
  )
}

let foodServiceFetcher = function () {
  return __query
    .get('api/room-service/food-service')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
