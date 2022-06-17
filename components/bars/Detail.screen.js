import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

import Button from 'components/button/Button'
import CloseHeader from 'components/header/CloseHeader'

import {
  Image,
  View,
  RadiusView,
  ButtonWrapperDetail,
} from 'styles/detail.module'

export default function DetailScreen({ route, navigation }) {
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
        <Button
          title={'Drinks'}
          onPress={() => navigation.navigate('menu-tab-stack-bar-menu-list')}
        />
      </ButtonWrapperDetail>
    </View>
  )
}
