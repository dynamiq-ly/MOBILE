import Text from 'components/text/Text'
import AreaView from '~/utils/TabAreaView'

import { View } from 'react-native'
import { Image } from 'styles/image.module'
import { array_drinks_details_restaurant } from 'mock/resto'
import { SafeAreaRowWrapperDetail } from 'styles/detail.module'

const MenuDrinksDetails = ({ route }) => {
  const { _image } = route.params
  return (
    <AreaView>
      <Image
        source={{
          uri: _image,
        }}
      />
      <View style={{ marginBottom: 20 }} />
      {array_drinks_details_restaurant.map((el, key) => {
        return (
          <View key={key}>
            <SafeAreaRowWrapperDetail>
              <Text size={21} up={'cap'} weight={600} content={el.name} />
              <Text
                size={18}
                weight={600}
                color={'dominant'}
                content={el.price}
              />
            </SafeAreaRowWrapperDetail>
            <Text
              size={16}
              up={'cap'}
              weight={400}
              color={'gray'}
              content={el.description}
            />
            <View style={{ marginBottom: 10 }} />
          </View>
        )
      })}
    </AreaView>
  )
}

export default MenuDrinksDetails
