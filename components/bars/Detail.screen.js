import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'
import CloseHeader from 'components/header/CloseHeader'

import { Image as RnImage } from 'react-native'
import { fontPixel } from 'utils/normalization'
import {
  Image,
  View,
  ButtonRoute,
  IconBox,
  TextBox,
  SafeAreaRowWrapperDetail,
  RadiusView,
  ButtonWrapperDetail,
} from 'styles/detail.module'

export default function DetailScreen({ route }) {
  const { _data } = route.params
  return (
    <View>
      <CloseHeader />
      <Image source={{ uri: _data.image }} />
      <RadiusView>
        <AreaView>
          <Text content={_data.name} weight={700} up={'cap'} size={28} />
          <Text content={_data.content} color={'gray'} weight={400} size={16} />
        </AreaView>
      </RadiusView>
      <ButtonWrapperDetail>
        <Button title={'Drinks'} />
      </ButtonWrapperDetail>
    </View>
  )
}

/**
 * @param0 {string} icon
 * @param1 {string} name
 * @param2 {string} path
 * @param3 {string} color
 */
function ButtonsRouting({ image, name, path }) {
  return (
    <ButtonRoute activeOpacity={0.7} onPress={() => navigation.navigate(path)}>
      <IconBox>
        <RnImage
          source={{ uri: image }}
          style={{ width: '100%', height: '100%' }}
        />
      </IconBox>
      <TextBox>
        <Text content={name} weight={500} size={18} up={'cap'} />
      </TextBox>
      <Icon
        name={'ri-arrow-right-s-line'}
        size={fontPixel(24)}
        color={'#9ca3af'}
      />
    </ButtonRoute>
  )
}
