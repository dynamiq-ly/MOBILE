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
          <Text content={'reception'} weight={600} up={'cap'} size={20} />
          <Text content={'dial 9.'} color={'gray'} up={'cap'} size={16} />
        </BoxText>
      </PhoneDirectoryRow>
      {/*  */}
      <PhoneDirectoryRow>
        <BoxIcon>
          <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
        </BoxIcon>
        <BoxText>
          <Text content={'room to room'} weight={600} up={'cap'} size={20} />
          <Text
            content={'Dial directly the room number'}
            color={'gray'}
            size={16}
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
            content={'international calls'}
            weight={600}
            up={'cap'}
            size={20}
          />
          <Text
            content={'Dial 0 + Internation code + Number.'}
            color={'gray'}
            size={16}
          />
        </BoxText>
      </PhoneDirectoryRow>
      {/*  */}
      <PhoneDirectoryRow>
        <BoxIcon>
          <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
        </BoxIcon>
        <BoxText>
          <Text content={'national call'} weight={600} up={'cap'} size={20} />
          <Text content={'Dial 0 + number.'} color={'gray'} size={16} />
        </BoxText>
      </PhoneDirectoryRow>
      {/*  */}
      <PhoneDirectoryRow>
        <BoxIcon>
          <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
        </BoxIcon>
        <BoxText>
          <Text content={'spa'} weight={600} up={'cap'} size={20} />
          <Text content={'Dial 11.'} color={'gray'} size={16} />
        </BoxText>
      </PhoneDirectoryRow>
      {/*  */}
      <PhoneDirectoryRow>
        <BoxIcon>
          <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
        </BoxIcon>
        <BoxText>
          <Text content={'emergency'} weight={600} up={'cap'} size={20} />
          <Text content={'Dial 0 + 911.'} color={'gray'} size={16} />
        </BoxText>
      </PhoneDirectoryRow>
      <View style={{ marginTop: 24 }} />
    </AreaView>
  )
}
