import AreaView from 'utils/TabAreaView'

import { useState } from 'react'
import { rooms } from 'mock/rooms'
import SquareCard from 'components/cards/SquareCard'
import { GridLayout } from 'styles/grid.module'

export default function RoomScreen({ navigation }) {
  const [isCategory, setCategory] = useState('all')

  return (
    <AreaView>
      <GridLayout>
        {[...Array(10)].map((element) => {
          return (
            <SquareCard
              key={element}
              title={rooms[0].room_name}
              image={rooms[0].room_images[Math.floor(Math.random() * 3)].image}
              onPress={() =>
                navigation.navigate('menu-tab-stack-rooms-detail', {
                  _data: element,
                })
              }
            />
          )
        })}
      </GridLayout>
    </AreaView>
  )
}
