import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import SimpleCard from 'components/cards/SimpleCard'

import { useState } from 'react'
import { GridLayout } from 'styles/grid.module'

import {
  VerticalList,
  VerticalListItem,
  VerticalListLine,
} from 'styles/list.module'

const DrinksServiceScreen = () => {
  const [isCategory, setCategory] = useState('SOFT')

  return (
    <AreaView>
      <Text
        content={
          'Order your drinks from here and enjoy a refreshing beverage at your door step.'
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
        <SimpleCard
          title={'hello'}
          image={
            'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Singapore-sling-7ddad3e.jpg'
          }
        />
      </GridLayout>
    </AreaView>
  )
}

export default DrinksServiceScreen
