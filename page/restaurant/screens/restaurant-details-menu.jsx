/* packages */
import { View, Platform } from 'react-native'
import { WebView } from 'react-native-webview'

/* modules */
import { FlatList } from '@/shared'

/* components */
import { FullCard } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */

export default ({ navigation, route }) => {
  const { data } = route.params

  const theme = useTheme()

  if (typeof data === 'string') {
    return <WebView style={{ flex: 1 }} source={{ uri: Platform.OS === 'ios' ? data : `https://docs.google.com/gview?embedded=true&url=${data}` || 'https://landing.utells.com/' }} />
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menu}
        gap='md'
        keyExtractor={(_, index) => index}
        renderedItem={({ item }) => (
          <FullCard
            key={item.id}
            title={item.label}
            h={100}
            image={item.image}
            onPress={() =>
              navigation.navigate('', {
                type: item.label,
              })
            }
            item='center'
          />
        )}
      />
    </View>
  )
}

const menu = [
  {
    id: 1,
    label: 'food',
    image: 'https://static1.squarespace.com/static/53b839afe4b07ea978436183/53bbeeb2e4b095b6a428a13e/5fd2570b51740e23cce97919/1678505081247/traditional-food-around-the-world-Travlinmad.jpg?format=1500w',
  },
  {
    id: 2,
    label: 'dessert',
    image: 'https://larecette.net/wp-content/uploads/2022/06/collage-3.jpg',
  },
  {
    id: 3,
    label: 'drinks',
    image: 'https://cf.ltkcdn.net/cocktails/images/orig/334887-3548x2282-tropical-drinks-1319973261.jpg',
  },
]
