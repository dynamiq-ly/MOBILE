import AreaView from 'utils/TabAreaView'
import SimpleCard from 'components/cards/SimpleCard'

import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { GridLayout } from 'styles/grid.module'
import { baseUrl, __query } from 'hooks/useApi'
import { LogBox, RefreshControl } from 'react-native'

export default function MenuRestaurantScreen({ route, navigation }) {
  const { _id, _data } = route.params

  const { data, refetch } = useQuery(
    ['@restaurant-food-menu', _id],
    () => restaurantFoodMenuById(_id),
    {
      refetchOnMount: true,
      initialData: _data,
    }
  )

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <AreaView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      <GridLayout>
        {data.map((el, key) => {
          return (
            <SimpleCard
              key={key}
              title={el.restaurant_food_category}
              image={`${baseUrl}storage/restaurants/menu/food/thumbnails/${el.restaurant_food_image}`}
              onPress={() =>
                navigation.navigate(
                  'menu-tab-stack-restaurant-detail-menu-food-list',
                  {
                    _id: el.id,
                    _data: [...el.dishes],
                    _name: el.restaurant_food_category,
                  }
                )
              }
            />
          )
        })}
      </GridLayout>
    </AreaView>
  )
}

let restaurantFoodMenuById = function (id) {
  return __query
    .get(`api/restaurant/menu/food=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
