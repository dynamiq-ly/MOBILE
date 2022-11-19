import AreaView from 'utils/TabAreaView'
import SimpleCard from 'components/cards/SimpleCard'

import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { GridLayout } from 'styles/grid.module'
import { baseUrl, __query } from 'hooks/useApi'
import { LogBox, RefreshControl } from 'react-native'

export default function MenuBarScreen({ route, navigation }) {
  const { _id, _data } = route.params

  const { data, refetch } = useQuery(
    ['@bar-detail-menu', _id],
    () => barsFetcherById(_id),
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
            <SimpleCard
              key={el.id}
              title={el.bar_menu_category}
              image={`${baseUrl}storage/bars/menus/${el.bar_menu_category_image}`}
              onPress={() =>
                navigation.navigate('menu-tab-stack-bar-menu-details', {
                  _id: el.id,
                  _data: el.drinks,
                  _name: el.bar_menu_category,
                })
              }
            />
          )
        })}
      </GridLayout>
    </AreaView>
  )
}

let barsFetcherById = function (id) {
  return __query
    .get(`api/bar/menu/type=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
