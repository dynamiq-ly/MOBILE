/* packages */
import { useState } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

/* modules */
import { Container, FlatList } from '@/shared'
import { Text } from '@/common'

/* components */
import { ButtonGroup, SimpleCard } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { data as menu } from '@/mocks/bar.data'

export default ({ navigation, route }) => {
  const { data } = route.params

  const theme = useTheme()
  const [state, setState] = useState(1)

  if (typeof data === 'string') {
    return <WebView style={{ flex: 1 }} source={{ uri: data || 'https://landing.utells.com/' }} />
  }

  return (
    <View style={{ flex: 1 }}>
      {/* list */}
      <FlatList
        header={<ButtonGroup scrollabe={false} selectedIndex={state} setSelectedIndex={setState} items={buttonSwitchItems} />}
        headerStyle={{ marginBottom: theme.units.md }}
        data={menu.menuDrinks.filter((el) => el.type === buttonSwitchItems.find((el) => el.id === state).value)}
        column={3}
        keyExtractor={(item) => item.id}
        renderedItem={({ item }) => (
          <View style={{ flex: 1 / 3 }}>
            <SimpleCard
              title={item.name}
              image={item.image}
              onPress={() =>
                navigation.navigate('[stack] stack-bar-detail-menu-list', {
                  id: item.id,
                  name: item.name,
                  categories: item.categories,
                  type: item.type,
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

const buttonSwitchItems = [
  { id: 1, label: 'Soft Drinks', value: 'soft' },
  { id: 2, label: 'Alcoholic Drinks', value: 'alcoholic' },
]
