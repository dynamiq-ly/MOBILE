import Icon from 'react-native-remix-icon'
import NotFound from 'components/notFound/NotFound'
import SquareCard from 'components/cards/SquareCard'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { baseUrl, __query } from 'hooks/useApi'
import { View } from 'styles/detail.module'
import { View as Gap } from 'react-native'
import { CartView } from 'styles/cart.module'
import { HScrollView } from 'styles/app.module'
import { fontPixel } from 'utils/normalization'
import { VerticalListLine } from 'styles/list.module'

import { FlatList, LogBox, RefreshControl } from 'react-native'

export default function PointInterestScreen({ navigation }) {
  const [isCategory, setCategory] = useState('all')

  const { data: points_type } = useQuery(
    '@point-interest-type',
    pointOfinterestTypesFetcher,
    {
      refetchOnMount: true,
      initialData: [],
    }
  )

  const {
    data: places,
    refetch,
    status,
  } = useQuery('@point-interest', pointOfInterestFetcher, {
    refetchOnMount: true,
    initialData: [],
  })

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <View>
      {status === 'loading' && <NotFound />}
      {status === 'error' && <NotFound killProcess />}
      {status === 'success' && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          data={places.filter((el) =>
            isCategory === 'all' ? el : el.point_type.point_type === isCategory
          )}
          stickyHeaderIndices={[0]}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <HScrollView horizontal showsHorizontalScrollIndicator={false}>
              {points_type.length > 0 &&
                [{ id: 0, point_type: 'all' }, ...points_type].map(
                  (el, key) => {
                    return (
                      <Gap
                        style={{ alignItems: 'center', flexDirection: 'row' }}
                        key={el.id}>
                        <FixedWidthButton
                          title={el.point_type}
                          func={() => setCategory(el.point_type)}
                          active={isCategory !== el.point_type ? true : false}
                        />
                        {points_type.length !== key && <VerticalListLine />}
                        {points_type.length === key && (
                          <Gap style={{ marginRight: 16 }} />
                        )}
                      </Gap>
                    )
                  }
                )}
            </HScrollView>
          }
          ListHeaderComponentStyle={{
            marginBottom: 16,
          }}
          renderItem={({ item }) => (
            <SquareCard
              key={item.id}
              title={item.point_title}
              image={`${baseUrl}storage/points-of-interest/${item.images[0].image}`}
              rating={2}
              location={item.point_small_summary}
              onPress={() =>
                navigation.navigate('menu-tab-stack-point-of-interest-detail', {
                  _id: item.id,
                  _data: item,
                })
              }
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 1,
              }}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{
            paddingHorizontal: 16,
            justifyContent: 'space-between',
          }}
        />
      )}
    </View>
  )
}

/**
 * @description icon for favorit in point of interest
 * @returns {React.Component}
 */
export const PointInterestScreenOptions = ({ func }) => {
  return (
    <CartView onPress={func}>
      <Icon name='ri-heart-line' size={fontPixel(24)} />
    </CartView>
  )
}

let pointOfinterestTypesFetcher = function () {
  return __query
    .get('api/point-of-interest/type')
    .then((res) => res.data)
    .catch(() => {
      throw new Error(err.message)
    })
}

let pointOfInterestFetcher = function () {
  return __query
    .get('api/point-of-interest&status=1')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
