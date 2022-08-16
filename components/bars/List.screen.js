import Widecard from 'components/cards/Widecard'
import NotFound from 'components/notFound/NotFound'

import { bars } from 'mock/bars'
import { View } from 'styles/detail.module'
import { FlatList } from 'react-native'

export default function ListScreen({ navigation }) {
  return (
    <View>
      {bars.length === 0 ? (
        <NotFound />
      ) : (
        <FlatList
          data={bars}
          style={{ paddingHorizontal: 14 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Widecard
              key={item.id}
              name={item.name}
              state={'hidden'}
              image={item.image}
              onPress={() =>
                navigation.navigate('menu-tab-stack-bar-detail', {
                  _data: item,
                })
              }
            />
          )}
        />
      )}
    </View>
  )
}
