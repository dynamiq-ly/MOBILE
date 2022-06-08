import { useState } from 'react'
import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import SimpleCard from 'components/cards/SimpleCard'

import { GridLayout } from 'styles/grid.module'

import { array_drinks_restaurant } from 'mock/resto'
import {
  VerticalList,
  VerticalListItem,
  VerticalListLine,
} from 'styles/list.module'

export default function MenuDrinksScreen({ navigation }) {
  const [isCategory, setCategory] = useState('soft')

  return (
    <AreaView>
      <Text
        size={16}
        content={
          'order your drinks from here and enjoy a refreshing beverage with your meal.'
        }
      />
      <VerticalList>
        <VerticalListItem onPress={() => setCategory('soft')}>
          <Text
            content={'soft drinks'}
            weight={700}
            size={18}
            up={'up'}
            color={isCategory === 'soft' ? 'dominant' : 'gray'}
          />
        </VerticalListItem>
        <VerticalListLine />
        <VerticalListItem onPress={() => setCategory('alcohol')}>
          <Text
            content={'alcohol drinks'}
            weight={700}
            size={18}
            up={'up'}
            color={isCategory === 'alcohol' ? 'dominant' : 'gray'}
          />
        </VerticalListItem>
      </VerticalList>
      <GridLayout>
        {array_drinks_restaurant
          .filter((el) => el.type === isCategory)
          .map((el, key) => {
            return <SimpleCard key={key} title={el.name} image={el.image} />
          })}
      </GridLayout>
    </AreaView>
  )
}
