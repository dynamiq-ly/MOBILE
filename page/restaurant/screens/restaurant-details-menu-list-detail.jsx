/* packages */
import { View } from 'react-native'

/* components */
import { Card } from '@/components'

/* utilities */
import { FlatList } from '@/shared'
import { Text } from '@/common'

/* styles */
import { useTheme } from 'styled-components'

export default ({ navigation, route }) => {
  const { data } = route.params

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.data}
        gap='md'
        keyExtractor={(_, index) => index}
        renderedItem={({ item }) => (
          <Card padding={false} image={item.image}>
            <Text size={10} weight='md' t='capitalize'>
              {item.label}
            </Text>
            <Text size={6} line={1.25} color='small' turncate={1}>
              {item.slug}
            </Text>
            <Text size={6} line={1.25} color='small' turncate={1}>
              {item.price}
            </Text>
          </Card>
        )}
      />
    </View>
  )
}

