import AreaView from 'utils/TabAreaView'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useQuery } from 'react-query'
import { __query } from 'hooks/useApi'

import { useState } from 'react'
import { rooms } from 'mock/rooms'
import { View as Gap } from 'react-native'
import { View } from 'styles/detail.module'
import { GridLayout } from 'styles/grid.module'
import { HScrollView } from 'styles/app.module'
import { VerticalListLine } from 'styles/list.module'
import { SquareCardSmall } from 'components/cards/SquareCard'
import { LogBox, RefreshControl } from 'react-native'

export default function RoomScreen({ navigation }) {
  const [isCategory, setCategory] = useState({ id: -1, room_type_name: 'all' })

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
    isFetched,
  } = useQuery('@rooms', roomsFetcher, {
    refetchOnMount: true,
    initialData: [],
  })

  return (
    <View>
      <Gap>
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[{ id: -1, room_type_name: 'all' }, ...roomCategory].map(
            (el, key) => {
              return (
                <Gap
                  style={{ alignItems: 'center', flexDirection: 'row' }}
                  key={key}>
                  <FixedWidthButton
                    title={el.room_type_name}
                    func={() => setCategory(el)}
                    active={
                      isCategory.room_type_name !== el.room_type_name
                        ? true
                        : false
                    }
                  />
                  {roomCategory.length !== key && <VerticalListLine />}
                </Gap>
              )
            }
          )}
          <Gap style={{ marginLeft: 24 }} />
        </HScrollView>
      </Gap>
      <AreaView>
        <GridLayout>
          {all_Rooms
            .filter((el) =>
              isCategory.room_type_name === 'all'
                ? el
                : el.room_type_name === isCategory.room_type_name
            )
            .map((el) => {
              return (
                <SquareCardSmall
                  key={el.id}
                  title={el.room_name}
                  image={rooms[0].room_images[el.id].image}
                  onPress={() =>
                    navigation.navigate('menu-tab-stack-rooms-detail', {
                      _data: el,
                    })
                  }
                />
              )
            })}
        </GridLayout>
      </AreaView>
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
