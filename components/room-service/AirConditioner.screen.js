import Text from 'components/text/Text'
import AreaView from '~/utils/TabAreaView'
import Icon from 'react-native-remix-icon'

import { Image } from 'styles/image.module'
import { BoxIcon, BoxText, PhoneDirectoryRow } from 'styles/list.module'
import { View as NewView } from 'react-native'

export default function AirConditioner() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://www.phillyaptrentals.com/wp-content/uploads/2020/04/Central-Air-Conditioning-scaled.jpg',
        }}
      />
      <NewView style={{ marginBottom: 15 }} />
      <Text
        size={18}
        content={
          'Our hotel room is provided with an AC for temperature control in your room.'
        }
      />
      <NewView style={{ marginBottom: 15 }} />
      <Text
        size={18}
        up={'up'}
        weight={600}
        content={'Air Conditioner Remote Controls & AC Settings: '}
      />
      <NewView style={{ marginBottom: 15 }} />
      <PhoneDirectoryRow>
        <Text
          color={'gray'}
          content={
            'The switch is located on the head of the bed. It has three speeds (1 = strong, 2 = normal, 3 = soft)'
          }
        />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text
          size={16}
          color={'gray'}
          content={'Thermostat at the entrance of the bedroom.'}
        />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <BoxIcon>
          <Icon name={'ri-error-warning-line'} color={'orange'} />
        </BoxIcon>
        <BoxText>
          <Text
            size={16}
            color={'gray'}
            content={
              'When you open the terrace door, the air conditioning will switch off automatically.'
            }
          />
        </BoxText>
      </PhoneDirectoryRow>
    </AreaView>
  )
}
