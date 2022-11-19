import { useCallback, useState } from 'react'
import { GridLayout } from 'styles/grid.module'
import { __query, baseUrl } from 'hooks/useApi'
import { LogBox, RefreshControl } from 'react-native'

import AreaView from 'utils/TabAreaView'
import WineCard from 'components/cards/WineCard'
import { useQuery } from 'react-query'

const MenuBarDetails = ({ navigation, route }) => {
  const { _id, _data } = route.params

  const { data, refetch } = useQuery(
    ['@bar-detail-menu-drinks', _id],
    () => barsMenuDrinksFetcher(_id),
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
        {data.map((el) => {
          return (
            <WineCard
              key={el.id}
              image={`${baseUrl}storage/bars/drinks/${el.bar_drink_image}`}
              price={`${el.bar_drink_price}$`}
              origin={el.bar_drink_name}
              onPress={() =>
                navigation.navigate('menu-tab-bar-menu-drink-detail', {
                  _name: el.bar_drink_name,
                  _data: el,
                })
              }
            />
          )
        })}
      </GridLayout>
    </AreaView>
  )
}

let barsMenuDrinksFetcher = function (id) {
  return __query
    .get(`api/bar/menu/drinks/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)

export default MenuBarDetails
