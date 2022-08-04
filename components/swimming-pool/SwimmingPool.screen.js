import Text from 'components/text/Text'
import FullImageCard from 'components/cards/FullImageCard'

import { View } from 'styles/detail.module'
import { View as Gap, FlatList } from 'react-native'

import { array_swimming_pool } from 'mock/swimmingpool'

export default function SwimmingPoolScreen({ navigation }) {
  return (
    <View>
      <Gap style={{ paddingHorizontal: 14, marginBottom: 24 }}>
        <Text up={'cap'} size={24} weight={600} content={'our pool types'} />
        <Text
          size={16}
          weight={400}
          color={'gray'}
          content={
            'we present to you a large type of pools, you may enjoy and suits your needs and desires, you are welcome to check them out.'
          }
        />
      </Gap>
      <FlatList
        numColumns={2}
        horizontal={false}
        data={array_swimming_pool}
        style={{ paddingHorizontal: 14 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FullImageCard
            title={item.name}
            image={item.image}
            position={item.id % 2 !== 1 && 'end'}
            onPress={() =>
              navigation.navigate('menu-tab-stack-swimming-pool-list', {
                _name: item.name,
                _data: item.pools,
              })
            }
          />
        )}
      />
    </View>
  )
}
