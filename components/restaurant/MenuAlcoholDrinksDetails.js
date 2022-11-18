import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { View } from 'styles/detail.module'
import { baseUrl, __query } from 'hooks/useApi'
import { GridLayout } from 'styles/grid.module'
import { HScrollView } from 'styles/app.module'
import { VerticalListLine } from 'styles/list.module'

import { LogBox, RefreshControl, View as Gap } from 'react-native'

import AreaView from 'utils/TabAreaView'
import WineCard from 'components/cards/WineCard'
import FixedWidthButton from 'components/button/FixedWidthButton'

const MenuAlcoholDrinksDetails = ({ navigation, route }) => {
  const { _id, _data } = route.params

  const { data, refetch } = useQuery(
    ['@restaurant-drink-menu-alchol', _id],
    () => restaurantDrinkMenuAlcohol(_id),
    {
      refetchOnMount: true,
      initialData: _data,
    }
  )

  const category = [...data.map((el) => el.drink_alcohol_type)]
  const [isCategory, setCategory] = useState(category[0])

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <View>
      <Gap style={{ marginBottom: 12 }}>
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          {category.map((el, key) => {
            return (
              <Gap
                style={{ alignItems: 'center', flexDirection: 'row' }}
                key={key}>
                <FixedWidthButton
                  title={el}
                  func={() => setCategory(el)}
                  active={isCategory !== el ? true : false}
                />
                {category.length !== key + 1 && <VerticalListLine />}
              </Gap>
            )
          })}
        </HScrollView>
      </Gap>
      <AreaView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <GridLayout>
          {data
            .filter((elem) => elem.drink_alcohol_type === isCategory)
            .map((el) => {
              return (
                <WineCard
                  key={el.id}
                  title={el.drink_alcohol_name}
                  image={`${baseUrl}storage/restaurants/menu/drink/bottles/${el.drink_alcohol_image}`}
                  price={`${el.drink_alcohol_bottle_price}$`}
                  origin={`${el.drink_alcohol_origin} ${el.drink_alcohol_year}`}
                  onPress={() =>
                    navigation.navigate(
                      'menu-tab-stack-restaurant-alcohol-details',
                      { _name: el.bottle_name, _id: el.id, _data: el }
                    )
                  }
                />
              )
            })}
        </GridLayout>
      </AreaView>
    </View>
  )
}

let restaurantDrinkMenuAlcohol = function (id) {
  return __query
    .get(`api/restaurant/drinks/alcohol=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)

export default MenuAlcoholDrinksDetails
