import { View } from 'react-native'

import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'

import { Image } from 'styles/image.module'
import { fontPixel } from 'utils/normalization'
import { BoxIcon, BoxText, PhoneDirectoryRow } from '~/styles/list.module'

export default function PhoneDirectoryScreen() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://www.whitepageshull.co.uk/wp-content/uploads/2020/06/Telephone-KCOM-Directory-Enquiries.jpg',
        }}
      />
      <View style={{ marginTop: 10 }} />
      <Text
        size={16}
        content={
          'in this section we will show you how to make use of our phone system. in case you needed to call someone'
        }
      />
      {/*  */}
      <PhoneDirectoryRow>
        <BoxIcon>
          <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
        </BoxIcon>
        <BoxText>
          <Text
            content={'call another room within hotel'}
            weight={600}
            up={'cap'}
            size={18}
          />
          <Text
            content={
              'Tap # then type in the room of the number you want to call.'
            }
            color={'gray'}
            size={14}
          />
        </BoxText>
      </PhoneDirectoryRow>
      {/*  */}
      <PhoneDirectoryRow>
        <BoxIcon>
          <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
        </BoxIcon>
        <BoxText>
          <Text
            content={'make national calls'}
            weight={600}
            up={'cap'}
            size={18}
          />
          <Text
            content={
              'to call someone outside the hotel within the country simply type in the number you want to call.'
            }
            color={'gray'}
            size={14}
          />
        </BoxText>
      </PhoneDirectoryRow>
      {/*  */}
      <PhoneDirectoryRow>
        <BoxIcon>
          <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
        </BoxIcon>
        <BoxText>
          <Text
            content={'make international calls'}
            weight={600}
            up={'cap'}
            size={18}
          />
          <Text
            content={
              'to call someone outside the hotel outside the country simply type in the country phone code then the number you want to call.'
            }
            color={'gray'}
            size={14}
          />
        </BoxText>
      </PhoneDirectoryRow>
      {/*  */}
      <PhoneDirectoryRow>
        <BoxIcon>
          <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
        </BoxIcon>
        <BoxText>
          <Text
            content={'to call reception'}
            weight={600}
            up={'cap'}
            size={18}
          />
          <Text
            content={
              'simply hold on 0 for a moment and you will be connected to reception.'
            }
            color={'gray'}
            size={14}
          />
        </BoxText>
      </PhoneDirectoryRow>
      <View style={{ marginTop: 24 }} />
    </AreaView>
  )
}
