import { useState } from 'react'
/* packages */
import { View, Platform } from 'react-native'
import { WebView } from 'react-native-webview'

/* modules */
import { FlatList } from '@/shared'

/* components */
import { FullCard, ButtonGroup, SimpleCard } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { data } from '@/mocks/restaurant.data'

export default ({ navigation, route }) => {
  const { type } = route.params
  const theme = useTheme()
  const [state, setState] = useState(1)
  return (
    <FlatList
      header={
        <View style={{ gap: theme.units.md, marginBottom: theme.units.md }}>
          <ButtonGroup selectedIndex={state} setSelectedIndex={setState} scrollabe={data.menu.length > 3} items={data.menu[type].map((el) => ({ ...el, label: el.type }))} />
        </View>
      }
      column={3}
      keyExtractor={(item) => item.id}
      data={data.menu[type]}
      renderedItem={({ item }) => (
        <SimpleCard
          title={item.name}
          image={item.image}
          onPress={() =>
            navigation.navigate('[stack] stack-restaurant-detail-menu-list', {
              id: item.id,
              name: item.name,
              categories: item.categories,
              type: item.type,
              data: item,
            })
          }
        />
      )}
    />
  )
}
