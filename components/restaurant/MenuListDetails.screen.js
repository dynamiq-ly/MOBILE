import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

import { View } from 'react-native'
import { Image } from 'styles/image.module'
import { baseUrl } from 'hooks/useApi'

const MenuListDetailsScreen = ({ route }) => {
  const { _data } = route.params
  return (
    <AreaView>
      <Image
        source={{
          uri: `${baseUrl}storage/restaurants/menu/food/dishes/${_data.dish_image}`,
        }}
      />
      <View
        style={{
          marginTop: 14,
          marginBottom: 24,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text content={_data.dish_name} size={24} weight={700} up={'cap'} />
        <Text
          content={`${_data.dish_price}$`}
          size={21}
          weight={600}
          up={'cap'}
          color={'dominant'}
        />
      </View>

      <Text
        content={_data.dish_description}
        size={16}
        weight={400}
        up={'cap'}
        color={'gray'}
      />
    </AreaView>
  )
}

export default MenuListDetailsScreen
