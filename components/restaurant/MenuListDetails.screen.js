import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

import { View } from 'react-native'
import { Image } from 'styles/image.module'

const MenuListDetailsScreen = ({ route }) => {
  const { _data } = route.params
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTcNy1Prx33_8N0lgoeo-1XpFjW7bjwZPKA&usqp=CAU',
        }}
      />
      <View
        style={{
          marginTop: 14,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text content={_data.title} size={24} weight={700} up={'cap'} />
        <Text
          content={`${_data.price}$`}
          size={18}
          weight={600}
          up={'cap'}
          color={'dominant'}
        />
      </View>

      <Text
        content={_data.description}
        size={16}
        weight={400}
        up={'cap'}
        color={'gray'}
      />
    </AreaView>
  )
}

export default MenuListDetailsScreen
