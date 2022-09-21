import NotFound from 'components/notFound/NotFound'
import { SquareCardSmall } from 'components/cards/SquareCard'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useQuery } from 'react-query'
import { baseUrl, __query } from 'hooks/useApi'

import { View as Gap } from 'react-native'
import { View } from 'styles/detail.module'
import { useCallback, useState } from 'react'
import { HScrollView } from 'styles/app.module'
import { VerticalListLine } from 'styles/list.module'
import { FlatList, LogBox, RefreshControl } from 'react-native'

export default function RoomScreen({ navigation }) {
  const [isCategory, setCategory] = useState('all')

  const { data: roomCategory } = useQuery(
    '@room-category',
    roomCategoryFetcher,
    {
      refetchOnMount: true,
      initialData: [],
    }
  )

  const {
    data: all_Rooms,
    refetch,
    status,
  } = useQuery('@rooms', roomsFetcher, {
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
      {status === 'error' && <NotFound killProcess />}
      {all_Rooms.length < 1 ? (
        <NotFound />
      ) : (
        status === 'success' && (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
            }
            data={all_Rooms.filter((el) =>
              isCategory === 'all'
                ? el.room_type_name !== 'all'
                : el.room_type_name === isCategory
            )}
            stickyHeaderIndices={[0]}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
              <HScrollView horizontal showsHorizontalScrollIndicator={false}>
                {roomCategory.length > 0 &&
                  [{ id: -1, room_type_name: 'all' }, ...roomCategory].map(
                    (el, key) => {
                      return (
                        <Gap
                          style={{ alignItems: 'center', flexDirection: 'row' }}
                          key={el.id}>
                          <FixedWidthButton
                            title={el.room_type_name}
                            func={() => setCategory(el.room_type_name)}
                            active={
                              isCategory !== el.room_type_name ? true : false
                            }
                          />
                          {roomCategory.length !== key && <VerticalListLine />}
                        </Gap>
                      )
                    }
                  )}
              </HScrollView>
            }
            renderItem={({ item }) => (
              <SquareCardSmall
                key={item.id}
                title={item.room_name}
                image={`${baseUrl}storage/bars/${item.images[0].image}`}
                location={item.room_descripton}
                onPress={() =>
                  navigation.navigate('menu-tab-stack-rooms-detail', {
                    _id: item.id,
                    _data: item,
                  })
                }
              />
            )}
            numColumns={2}
            columnWrapperStyle={{
              paddingTop: 16,
              paddingHorizontal: 16,
            }}
          />
        )
      )}
    </View>
  )
}

let roomCategoryFetcher = function () {
  return __query('api/rooms/room-category')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

let roomsFetcher = function () {
  return __query('api/rooms&status=1')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
