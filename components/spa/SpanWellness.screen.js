import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'
import GroupButton from 'components/button/ButtonGroup'
import OpenLinkButton from 'components/button/OpenLinkButton'

import { View as Gap } from 'react-native'
import {
  RadiusView,
  View,
  SafeAreaRowWrapperDetail,
} from 'styles/detail.module'

export default function SpaAndWellnessScreen({ navigation }) {
  return (
    <View>
      <CloseHeader />
      <Carsouel
        imageArray={[
          {
            image:
              'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/26/c3.jpg',
          },
          {
            image:
              'https://s7d2.scene7.com/is/image/ritzcarlton/50626994-RC_Spa_treatment01V2?$XlargeViewport100pct$',
          },
          {
            image:
              'https://i0.wp.com/www.thelodhi.com/wp-content/uploads/sites/3/2020/10/spa-slider1.jpg?resize=1300%2C730&ssl=1',
          },
          {
            image:
              'https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2018/08/1140-candlelight.jpg',
          },
        ]}
      />
      <RadiusView>
        <AreaView mode={'light'}>
          <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
            <Text
              content={'beia spa hotel'}
              weight={700}
              up={'cap'}
              size={28}
            />
            <OpenLinkButton
              icon={'ri-link'}
              color={'#8b5cf6'}
              url={'https://google.com'}
            />
          </SafeAreaRowWrapperDetail>
          <Text
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, ullamco laboris commodo consequat.'
            }
            color={'gray'}
            weight={400}
            size={16}
          />
          <Gap style={{ marginBottom: 24 }} />
          <GroupButton array={array} index={1} callback={navigation} />
          <Gap style={{ marginBottom: 32 }} />
        </AreaView>
      </RadiusView>
    </View>
  )
}

const array = [
  {
    icon: 'ri-mastodon-line',
    name: 'masage therapy',
    path: 'menu-tab-stack-check-in-out',
    color: '#5F6C7B',
  },
  {
    icon: 'ri-red-packet-line',
    name: 'spa packages',
    path: 'menu-tab-stack-connectivity',
    color: '#5F6C7B',
  },
  {
    icon: 'ri-space-ship-line',
    name: 'esthetic threatments',
    path: '',
    color: '#5F6C7B',
  },
  {
    icon: 'ri-user-5-line',
    name: 'facial treatment rituals',
    path: '',
    color: '#5F6C7B',
  },
]
