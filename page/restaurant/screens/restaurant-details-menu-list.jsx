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
    <View style={{ flex: 1 }}>
      <FlatList
        header={
          data.restaurants[0].menu[type] &&
          data.restaurants[0].menu[type].length > 0 && (
            <View style={{ gap: theme.units.md, marginBottom: theme.units.md }}>
              <ButtonGroup selectedIndex={state} setSelectedIndex={setState} scrollabe={data.restaurants[0].menu[type].length > 3} items={data.restaurants[0].menu[type]} />
            </View>
          )
        }
        column={3}
        keyExtractor={(item) => item.id}
        data={data.restaurants[0].menu[type] && data.restaurants[0].menu[type].length > 0 ? data[type].filter((el) => el.type === data.restaurants[0].menu[type].find((el) => el.id === state).label) : data[type]}
        renderedItem={({ item }) => (
          <View key={item.id} style={{ flex: 1 / 3 }}>
            <SimpleCard
              title={item.name}
              image={item.image}
              onPress={() =>
                navigation.navigate('[stack] stack-restaurant-detail-menu-list-detail', {
                  id: item.id,
                  name: item.name,
                  data: item,
                })
              }
            />
          </View>
        )}
      />
    </View>
  )
}
