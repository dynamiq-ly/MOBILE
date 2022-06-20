import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'
import OpenLinkButton from 'components/button/OpenLinkButton'

import { View as Gap } from 'react-native'
import { fontPixel } from 'utils/normalization'
import {
  View,
  RadiusView,
  SafeAreaRowWrapperDetail,
} from 'styles/detail.module'
import {
  GroupsBtn,
  ButtonItem,
  Divider,
  IconBox,
  TextBox,
} from 'styles/button.module'

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
          <GroupsBtn>
            {array.map((el, key) => {
              return (
                <Gap key={key}>
                  <ButtonItem
                    activeOpacity={0.9}
                    onPress={() =>
                      navigation.navigate(el.path, {
                        _name: el.name,
                        _data: el,
                      })
                    }>
                    <IconBox color={'#1A2952'}>
                      <Icon
                        name={el.icon}
                        size={fontPixel(24)}
                        color={'#fffffe'}
                      />
                    </IconBox>
                    <TextBox>
                      <Text
                        content={el.name}
                        weight={500}
                        size={18}
                        up={'cap'}
                      />
                    </TextBox>
                    <Icon
                      name={'ri-arrow-right-circle-line'}
                      size={fontPixel(24)}
                      color={'#9ca3af'}
                    />
                  </ButtonItem>
                  {key != array.length - 1 && <Divider />}
                </Gap>
              )
            })}
          </GroupsBtn>
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
    path: 'menu-tab-stack-span-wellness-details',
    color: '#5F6C7B',
  },
  {
    icon: 'ri-red-packet-line',
    name: 'spa packages',
    path: 'menu-tab-stack-span-wellness-details',
    color: '#5F6C7B',
  },
  {
    icon: 'ri-space-ship-line',
    name: 'esthetic threatments',
    path: 'menu-tab-stack-span-wellness-details',
    color: '#5F6C7B',
  },
  {
    icon: 'ri-user-5-line',
    name: 'facial treatment rituals',
    path: 'menu-tab-stack-span-wellness-details',
    color: '#5F6C7B',
  },
]
