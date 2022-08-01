import { Image } from 'styles/image.module'
import AreaView from '~/utils/TabAreaView'
import { View as NewView } from 'react-native'
import Text from 'components/text/Text'
import { BoxIcon, BoxText, PhoneDirectoryRow } from 'styles/list.module'
import Icon from 'react-native-remix-icon'
import { fontPixel } from 'utils/normalization'

export default function HairDryer() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://i.insider.com/5983507cefe3df2b008b45ef?width=1000&format=jpeg&auto=webp',
        }}
      />
      <NewView style={{ marginBottom: 15 }} />
      <Text
        size={18}
        content={
          'Our hotel room is provided with a hair dryer in the bathroom of each hotrl room.'
        }
      />
      <Text size={18} color={'gray'} content={'How to use '} />
      <PhoneDirectoryRow>
        <Text
          size={16}
          content={
            '1. Adjust the desired blowing strength:                                         Position 0: OFF                                                                   Position 1: Half power, medium temperature for gentle drying and styling                                                     Position 2: Full power, high temperature for quick drying'
          }
        />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text
          size={16}
          content={
            '2. Use the high setting for drying hair, and use low setting for styling.'
          }
        />
      </PhoneDirectoryRow>

      <PhoneDirectoryRow>
        <Text
          size={16}
          content={
            '3. Should the hair dryer stop working for any reason, turn it off at once and let it cool down.'
          }
        />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text
          size={16}
          content={
            '4. Always ensure the switch is set to OFF position before plugging the unit in the power outlet.                                                                               Cool shot: with this switch'
          }
        />
      </PhoneDirectoryRow>
      <Text size={18} color={'gray'} content={'Safety instructions'} />
      <PhoneDirectoryRow>
        <Text
          size={16}
          content={
            'The applicable voltage is 220-240V, ~50/60Hz. For safety reasons it is not appropriate to connect multiple devices to one power outlet. '
          }
        />
      </PhoneDirectoryRow>

      <PhoneDirectoryRow>
        <BoxIcon>
          <Icon name={'ri-alert-fill'} size={fontPixel(21)} />
        </BoxIcon>
        <BoxText>
          <Text
            content={'Warning'}
            weight={600}
            up={'cap'}
            size={18}
            color={'orange'}
          />
          <Text
            content={
              'This device may be used by children over 8 years of age and persons with reduced physical, sensory or mental capabilities.                                       Never put the power cable, the plug or the whole device into the water.                                                                 Never use the product in humid conditions.'
            }
            color={'gray'}
            size={14}
          />
        </BoxText>
      </PhoneDirectoryRow>
    </AreaView>
  )
}
