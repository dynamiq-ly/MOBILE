import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'

import { Image } from 'styles/image.module'
import { View as Gap } from 'react-native'
import { ButtonWrapperDetail, View } from 'styles/detail.module'
import { BoxIcon, BoxText, PhoneDirectoryRow } from 'styles/list.module'

export default function HouseKeepingScreen() {
  return (
    <View>
      <AreaView>
        <Image
          source={{
            uri: 'https://lirp.cdn-website.com/a203eaf6/dms3rep/multi/opt/1_Ef8-opcxHXYVHqSSy5xqOA-960w.jpeg',
          }}
        />
        <Gap style={{ marginBottom: 5 }} />
        <Text size={24} up={'cap'} weight={600} content={'objectif'} />
        <Text
          size={16}
          color={'gray'}
          content={
            'Housekeeping means performing all the duties towards cleaning, maintaining orderliness, and running a house or a business property. In case of hotels, the housekeeping duties involve maintaining the hotel to the best possible state in terms of cleanliness, and keeping it at highly desirable ambience.'
          }
        />

        <PhoneDirectoryRow>
          <BoxIcon>
            <Icon name='ri-home-line' />
          </BoxIcon>
          <BoxText>
            <Text content={'Rooms'} weight={600} up={'cap'} size={18} />
            <Text content={'10 USD'} color={'dominant'} size={14} />
          </BoxText>
        </PhoneDirectoryRow>

        <PhoneDirectoryRow>
          <BoxIcon>
            <Icon name='ri-building-line' />
          </BoxIcon>
          <BoxText>
            <Text content={'Rooms'} weight={600} up={'cap'} size={18} />
            <Text content={'25 USD'} color={'dominant'} size={14} />
          </BoxText>
        </PhoneDirectoryRow>
      </AreaView>
      <ButtonWrapperDetail>
        <Button title='see services' />
      </ButtonWrapperDetail>
    </View>
  )
}
