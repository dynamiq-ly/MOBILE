import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'
import HouseKeepingCard from 'components/cards/HouseKeepingCard'

import { useState } from 'react'
import { houseTasks } from 'mock/housekeeping'
import { ButtonWrapperDetail, View } from 'styles/detail.module'
import {
  VerticalList,
  VerticalListItem,
  VerticalListLine,
} from 'styles/list.module'

export default function HouseKeepingServicesScreen() {
  const [task, setTasks] = useState([])
  const [isCategory, setCategory] = useState('room')

  return (
    <View>
      <AreaView>
        <VerticalList>
          <VerticalListItem onPress={() => setCategory('room')}>
            <Text
              content={'Rooms'}
              weight={700}
              size={18}
              up={'up'}
              color={isCategory === 'room' ? 'dominant' : 'gray'}
            />
          </VerticalListItem>
          <VerticalListLine />
          <VerticalListItem onPress={() => setCategory('suite')}>
            <Text
              content={'Suites'}
              weight={700}
              size={18}
              up={'up'}
              color={isCategory === 'suite' ? 'dominant' : 'gray'}
            />
          </VerticalListItem>
        </VerticalList>
        {houseTasks
          .filter((el) => el.type.includes(isCategory))
          .map((el) => {
            return (
              <HouseKeepingCard
                key={el.id}
                element={el}
                array={task}
                onChange={setTasks}
              />
            )
          })}
      </AreaView>
      <ButtonWrapperDetail>
        <Button
          title={task.length > 0 ? `order ${task.length} tasks` : 'order tasks'}
        />
      </ButtonWrapperDetail>
    </View>
  )
}
