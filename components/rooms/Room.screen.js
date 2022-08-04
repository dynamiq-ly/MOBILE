import AreaView from 'utils/TabAreaView'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useState } from 'react'
import { rooms } from 'mock/rooms'
import { View as Gap } from 'react-native'
import { View } from 'styles/detail.module'
import { GridLayout } from 'styles/grid.module'
import { HScrollView } from 'styles/app.module'
import { VerticalListLine } from 'styles/list.module'
import { SquareCardSmall } from 'components/cards/SquareCard'

export default function RoomScreen({ navigation }) {
  const [isCategory, setCategory] = useState('all')

  return (
    <View>
      <Gap>
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          {room_category_Array.map((el, key) => {
            return (
              <Gap
                style={{ alignItems: 'center', flexDirection: 'row' }}
                key={key}>
                <FixedWidthButton
                  title={el}
                  func={() => setCategory(el)}
                  active={isCategory !== el ? true : false}
                />
                {room_category_Array.length !== key + 1 && <VerticalListLine />}
              </Gap>
            )
          })}
        </HScrollView>
      </Gap>
      <AreaView>
        <GridLayout>
          {[...Array(10)].map((_, key) => {
            return (
              <SquareCardSmall
                key={key}
                title={rooms[0].room_name}
                image={
                  rooms[0].room_images[Math.floor(Math.random() * 3)].image
                }
                onPress={() =>
                  navigation.navigate('menu-tab-stack-rooms-detail', {
                    _data: rooms[0],
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

const room_category_Array = ['all', 'suites', 'rooms', 'deluxe', 'themed']
