import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Carsouel from 'components/slider/carousel'

import Button from 'components/button/Button'
import CloseHeader from 'components/header/CloseHeader'

import { View as Gap } from 'react-native'
import { useSpring } from '@react-spring/native'
import { FADE_IN_DONW, FADE_IN_UP } from 'animation/FADE_IN'
import { View, RadiusView, ButtonWrapperDetail } from 'styles/detail.module'

export default function DetailScreen({ route, navigation }) {
  const { _data } = route.params

  const springContent = useSpring({
    ...FADE_IN_UP.noOpacity,
  })

  const springCarousel = useSpring({
    ...FADE_IN_DONW.noOpacity,
  })

  return (
    <View>
      <CloseHeader />
      <Carsouel
        style={{ ...springCarousel }}
        imageArray={[{ image: _data.image }]}
      />
      <RadiusView style={{ ...springContent }}>
        <AreaView>
          <Gap style={{ marginBottom: 10 }} />
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
