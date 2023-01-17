import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import SimpleCard from 'components/cards/SimpleCard'

import { GridLayout } from 'styles/grid.module'

import {
  VerticalList,
  VerticalListItem,
  VerticalListLine,
} from 'styles/list.module'

import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { __query, baseUrl } from 'hooks/useApi'
import { LogBox, RefreshControl } from 'react-native'

export default function DrinksServiceScreen({ navigation }) {
  const [isCategory, setCategory] = useState('SOFT')

  const { data, refetch } = useQuery(
    '@room-service-drink-menu',
    drinkServiceFetcher,
    {
      refetchOnMount: true,
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
      <Text
        size={16}
        content={
          'Order your drinks from here and enjoy a refreshing beverage with your meal.'
        }
      />
      <VerticalList>
        <VerticalListItem onPress={() => setCategory('SOFT')}>
          <Text
            content={'soft drinks'}
            weight={700}
            size={18}
            up={'up'}
            color={isCategory === 'SOFT' ? 'dominant' : 'gray'}
          />
        </VerticalListItem>
        <VerticalListLine />
        <VerticalListItem onPress={() => setCategory('ALCOHOL')}>
          <Text
            content={'alcohol drinks'}
            weight={700}
            size={18}
            up={'up'}
            color={isCategory === 'ALCOHOL' ? 'dominant' : 'gray'}
          />
        </VerticalListItem>
      </VerticalList>
      <GridLayout>
        {data &&
          data
            .filter((el) => el.drink_drink_type === isCategory)
            .map((el, key) => {
              return (
                <SimpleCard
                  key={key}
                  title={el.drink_drink_category}
                  image={`${baseUrl}storage/room-service/drink-service/${el.drink_drink_image}`}
                  onPress={() =>
                    navigation.navigate(
                      el.drink_drink_type === 'ALCOHOL'
                        ? 'menu-tab-stack-restaurant-detail-menu-drinks-details-alcohol'
                        : 'menu-tab-stack-restaurant-detail-menu-drinks-details',
                      {
                        _id: el.id,
                        _data:
                          el.drink_drink_type === 'ALCOHOL'
                            ? el.alcoholdrinks
                            : el.softdrinks,
                        _name: el.drink_drink_category,
                        _image: `${baseUrl}storage/restaurants/menu/drink/thumbnails/${el.drink_drink_image}`,
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

let drinkServiceFetcher = function (id) {
  return __query
    .get('api/room-service/drink-service/category')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)