import { View } from '~/styles/detail.module'
import CloseHeader from 'components/header/CloseHeader'
import Text from 'components/text/Text'
import {
  Image,
  SafeAreaRowWrapperDetail,
  HdRow,
  ButtonWrapperDetail,
} from 'styles/detail.module'
import AreaView from 'utils/TabAreaView'
import FixedWidthButton from '../button/FixedWidthButton'
import Icon from 'react-native-remix-icon'
import { fontPixel } from 'utils/normalization'
import { View as Gap } from 'react-native'
import Button from 'components/button/Button'

const AcloholDrinkDetails = ({ route }) => {
  const { _data } = route.params
  return (
    <View>
      <CloseHeader />
      <Image source={{ uri: _data.bottle_image }} />
      <AreaView>
        <Text content={_data.bottle_name} weight={700} up={'cap'} size={28} />
        <Text content={`${_data.bottle_region} ${_data.bottle_date_made}`} />
        <Gap style={{ marginBottom: 25 }} />
        <SafeAreaRowWrapperDetail>
          <View>
            <HdRow>
              <Icon
                color={'#191919'}
                name='ri-medicine-bottle-fill'
                style={{ margin: 5 }}
                size={fontPixel(28)}
              />
              <Text
                content={_data.bottle_price_bottle}
                color={'dominant'}
                size={16}
                weight={600}
              />
            </HdRow>
            <FixedWidthButton title={'order a bottle'} />
          </View>
          <View>
            <HdRow>
              <Icon
                color={'#191919'}
                name='ri-goblet-fill'
                style={{ margin: 5 }}
                size={fontPixel(28)}
              />
              <Text
                content={_data.bottle_price_glass}
                color={'dominant'}
                size={16}
                weight={600}
              />
            </HdRow>

            <FixedWidthButton title={'order a glass'} />
          </View>
        </SafeAreaRowWrapperDetail>
        <Gap style={{ marginBottom: 25 }} />
        <Text content={_data.bottle_description} color={'gray'} />
      </AreaView>
      <ButtonWrapperDetail>
        <Button title={'order now'} />
      </ButtonWrapperDetail>
    </View>
  )
}

export default AcloholDrinkDetails
