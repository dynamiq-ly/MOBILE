import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import FullImageCard from 'components/cards/FullImageCard'

import { View } from 'react-native'
import { GridLayout } from 'styles/grid.module'
import { array_swimming_pool } from 'mock/swimmingpool'

export default function SwimmingPoolScreen() {
  return (
    <AreaView>
      <Text up={'cap'} size={24} weight={600} content={'our pool types'} />
      <Text
        size={16}
        weight={400}
        color={'gray'}
        content={
          'we present to you a large type of pools, you may enjoy and suits your needs and desires, you are welcome to check them out.'
        }
      />
      <View style={{ marginBottom: 24 }} />
      <GridLayout>
        {array_swimming_pool.map((el, key) => {
          return <FullImageCard key={key} title={el.name} image={el.image} />
        })}
      </GridLayout>
    </AreaView>
  )
}
