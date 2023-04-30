import AreaView from 'utils/TabAreaView'
import DetailedCard from 'components/cards/DetailedCard'

import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { baseUrl, __query } from 'hooks/useApi'
import { LogBox, RefreshControl } from 'react-native'

export default function MenuFoodListScreen({ navigation, route }) {
  const { _id, _data } = route.params

  const { data, refetch } = useQuery(['@restaurant-food-menu-dish', _id], () => restaurantFoodMenuDishes(_id), {
    refetchOnMount: true,
    initialData: _data,
  })

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <AreaView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      {data.map((el, key) => {
        return (
          <DetailedCard
            key={key}
            title={el.dish_name}
            image={`${baseUrl}storage/restaurants/menu/food/dishes/${el.dish_image}`}
            price={el.dish_price}
            description={el.dish_summary}
            onPress={() => navigation.navigate('menu-tab-stack-restaurant-detail-menu-food-list-detail', { _name: el.dish_name, _data: el })}
          />
        )
      })}
    </AreaView>
  )
}

let restaurantFoodMenuDishes = function (id) {
  return __query
    .get(`api/restaurant/menu?query=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
