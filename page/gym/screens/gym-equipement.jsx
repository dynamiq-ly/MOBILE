/* packages */
import { View } from 'react-native'

/* modules */
import { Text } from '@/common'
import { FlatList } from '@/shared'

/* components */
import { SimpleCard } from '@/components'

/* styles */

/* mocks */
import { gymEquipment } from '@/mocks/gym.data'

export default ({ route }) => {
  return (
    <FlatList
      data={gymEquipment}
      gap='md'
      keyExtractor={(item) => item.id}
      column={2}
      renderedItem={({ item }) => (
        <View key={item.id} style={{ flex: 1 / 2 }}>
          <SimpleCard title={item.name} image={item.image} />
        </View>
      )}
    />
  )
}
