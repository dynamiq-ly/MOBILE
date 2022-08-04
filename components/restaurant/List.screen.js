import Widecard from 'components/cards/Widecard'
import NotFound from 'components/notFound/NotFound'

import { restaurants } from 'mock/resto'
import { FlatList } from 'react-native'
import { View } from 'styles/detail.module'

let time = new Date().getHours() + ':' + new Date().getMinutes()

export default function ListScreen({ navigation }) {
  return (
    <View>
      {restaurants.length === 0 ? (
        <NotFound />
      ) : (
        <FlatList
          data={restaurants}
          style={{ paddingHorizontal: 14 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Widecard
              key={item.id}
              name={item.name}
              image={item.image}
              state={time < item.close && time > item.open ? true : false}
              specialiy={item.specialiy}
              onPress={() =>
                navigation.navigate('menu-tab-stack-restaurant-detail', {
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
