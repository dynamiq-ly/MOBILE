import AreaView from '~/utils/TabAreaView'
import Text from 'components/text/Text'
import { array_drinks_details_restaurant } from 'mock/resto'
import { Image } from 'styles/image.module'
import { View } from 'react-native'
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
          <View>
            <SafeAreaRowWrapperDetail>
              <Text size={18} up={'cap'} weight={600} content={el.name} />
              <Text
                size={16}
                weight={600}
                color={'dominant'}
                content={el.price}
              />
            </SafeAreaRowWrapperDetail>

            <Text
              size={14}
              up={'cap'}
              weight={600}
              color={'gray'}
              content={el.description}
            />
          </View>
        )
      })}
    </AreaView>
  )
}

export default MenuDrinksDetails
