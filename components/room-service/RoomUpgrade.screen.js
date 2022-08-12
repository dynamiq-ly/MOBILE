import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'
import { Image } from 'styles/image.module'

export default function RoomUpgrade({ navigation }) {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/2572043/screenshots/9838804/media/93f93b36b2661253ffe3363d6c97bcfe.png?compress=1&resize=800x600&vertical=top',
        }}
        style={{ marginBottom: 15 }}
      />
      <Text
        content={'Currently we do not support room upgrade within our app'}
        size={18}
      />

      <Button
        title={'contact reception for upgrade'}
        fill
        style={{ backgroundColor: 'white', marginTop: 20 }}
      />
      <Text
        content={'If you only wish to extand your stay visit this screen'}
        size={18}
      />
      <Button
        title={'extand stay'}
        style={{ marginTop: 20 }}
        onPress={() =>
          navigation.navigate('menu-tab-stack-room-service-extand-stay')
        }
      />
    </AreaView>
  )
}
