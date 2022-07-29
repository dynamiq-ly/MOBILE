import Text from 'components/text/Text'
import AreaView from '~/utils/TabAreaView'

import { View } from 'react-native'
import { Image } from 'styles/image.module'
import { PhoneDirectoryRow } from 'styles/list.module'

export default function ElectricityAndCablesScreen() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://goodyfeed.com/wp-content/uploads/2018/10/wall-socket.jpg',
        }}
      />
      <View style={{ marginBottom: 10 }} />
      <Text
        size={18}
        content={
          'Our hotel room is provided with adapters and cables which are available according to your needs'
        }
      />
      <View style={{ marginBottom: 24 }} />
      <Text size={18} color={'gray'} content={'Room'} />
      <PhoneDirectoryRow>
        <Text
          size={16}
          content={'3 Electrical Code for Outlets type (NEC) 120/240-volt'}
        />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text size={16} content={'4 light swiches '} />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text size={16} content={'5 room lamps '} />
      </PhoneDirectoryRow>

      <Text size={18} color={'gray'} content={'Bathroom'} />
      <PhoneDirectoryRow>
        <Text
          size={16}
          content={
            '1 Electrical Code for Outlets type (NEC)  120-volt receptacle within 3 feet of the outside edge of each sink basin'
          }
        />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text size={16} content={'1 light switch'} />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text size={16} content={'1 bathroom light '} />
      </PhoneDirectoryRow>
      <View style={{ marginBottom: 24 }} />
    </AreaView>
  )
}
