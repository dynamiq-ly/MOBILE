import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'

import { View as NewView } from 'react-native'
import { Image } from 'styles/image.module'
import { fontPixel } from 'utils/normalization'
import { ButtonWrapperDetail, View } from 'styles/detail.module'
import { BoxIcon, BoxText, PhoneDirectoryRow } from 'styles/list.module'

export default function MainLaundryScreen({ navigation }) {
  return (
    <View>
      <AreaView>
        <Image
          source={{
            uri: 'https://www.laundryluv.com/images/self-service-laundry/hero.png',
          }}
        />
        <NewView style={{ marginBottom: 15 }} />
        <Text
          up={'up'}
          size={18}
          weight={600}
          content={'instruction to use the hotel laundry service'}
        />

        <PhoneDirectoryRow style={{ alignItems: 'center' }}>
          <BoxIcon>
            <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
          </BoxIcon>
          <BoxText>
            <Text
              content={'The laundry bag is in the wardrobe.'}
              color={'gray'}
              size={16}
            />
          </BoxText>
        </PhoneDirectoryRow>
        <PhoneDirectoryRow style={{ alignItems: 'center' }}>
          <BoxIcon>
            <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
          </BoxIcon>
          <BoxText>
            <Text
              content={'Leave the laundry bag on the bed.'}
              color={'gray'}
              size={16}
            />
          </BoxText>
        </PhoneDirectoryRow>
        <PhoneDirectoryRow style={{ alignItems: 'center' }}>
          <BoxIcon>
            <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
          </BoxIcon>
          <BoxText>
            <Text
              content={
                'If laundry are left in the morning, they will generally be returned before dinner.'
              }
              color={'gray'}
              size={16}
            />
          </BoxText>
        </PhoneDirectoryRow>
      </AreaView>
      <ButtonWrapperDetail>
        <Button
          title={'view menu'}
          icon={'ri-arrow-right-line'}
          onPress={() => navigation.navigate('menu-tab-stack-laundry-menu')}
        />
      </ButtonWrapperDetail>
    </View>
  )
}
