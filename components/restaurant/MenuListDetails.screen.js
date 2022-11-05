import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'

import { View } from 'react-native'
import { Image } from 'styles/image.module'
import { baseUrl } from 'hooks/useApi'
import { HFLine } from '~/styles/detail.module'

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
          ...style,
          marginTop: 14,
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

      <>
        <HFLine />
        <Text content={'wait time'} weight={500} size={18} up={'cap'} />
        <View
          style={{
            ...style,
            padding: 3,
            marginTop: 12,
            borderRadius: 5,
            marginBottom: 10,
            backgroundColor: '#fff',
            alignSelf: 'flex-start',
          }}>
          <Icon
            name={'ri-time-line'}
            size={16}
            style={{ marginRight: 5 }}
            color={'#757575'}
          />
          <Text
            content={`Wait time is ${_data.dish_wait_time} minutes.`}
            color={'gray'}
            size={16}
          />
        </View>
      </>

      <>
        <HFLine />
        <Text content={'ingredients'} weight={500} size={18} up={'cap'} />
        <View style={{ flexDirection: 'row', marginTop: 14, marginBottom: 32 }}>
          {_data.dish_ingredient.split(',').map((el, key) => (
            <View
              key={key}
              style={{
                marginRight: 5,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 4,
                backgroundColor: '#fefefe',
              }}>
              <Text content={el} size={16} up={'cap'} />
            </View>
          ))}
        </View>
      </>
    </AreaView>
  )
}

const style = {
  flexDirection: 'row',
  alignItems: 'center',
}

export default MenuListDetailsScreen
