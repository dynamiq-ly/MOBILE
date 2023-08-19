/* packages */
import { View } from 'react-native'

/* components */
import { Card } from '@/components'

/* utilities */
import { FlatList } from '@/shared'
import { Container, Text, Image } from '@/common'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { category as data } from '@/mocks/restaurant.data'

export default ({ navigation, route }) => {
  const theme = useTheme()
  const { data } = route.params

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.data}
        gap='md'
        keyExtractor={(_, index) => index}
        renderedItem={({ item }) => (
          <Card
            padding={false}
            image={item.image}
            onPress={() =>
              navigation.navigate('[stack] stack-restaurant-detail-menu-list-detail-menu', {
                id: item.id,

                data: item,
                previousScreen: route.params ? route.params.previousScreen : null,
              })
            }>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text size={10} weight='md' t='capitalize'>
                {item.label}
              </Text>
              <Text size={8} line={1.25} color='info' turncate={1} t='capitalize' weight='md'>
                {item.price}
              </Text>
            </View>
            <Text size={6} line={1.25} color='small' turncate={1}>
              {item.slug}
            </Text>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 30 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                <Image source={require('@/assets/icons/product/monocrome/leaf-dark.png')} height='16px' width='16px' />
                <Text size={6} weight='md'>
                  {item.category}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                <Image source={require('@/assets/icons/product/monocrome/clock-dark.png')} height='16px' width='16px' />
                <Text size={6} weight='md'>
                  {item.time}
                </Text>
              </View>
            </View>
          </Card>
        )}
      />
    </View>
  )
}
