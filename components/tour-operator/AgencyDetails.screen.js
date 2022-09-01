import AreaView from 'utils/TabAreaView'
import {
  View as NewView,
  Image as RnImage,
  View as Gap,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaRowWrapperDetail } from '~/styles/detail.module'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import { MiniCard, ContentViewMinCard } from '~/styles/cards.module'
import { Image } from 'styles/image.module'
import { palette } from '~/themes/palette'
import { animated } from '@react-spring/native'

const AnimatedTouchable = animated(TouchableOpacity)
export default function AgencyDetails({ route, navigation }) {
  const { _data } = route.params
  {
    return (
      <AreaView>
        <Image
          source={{
            uri: 'https://ik.imgkit.net/3vlqs5axxjf/PCWW/uploadedImages/Articles/News/2022/April/phocuswright-state-of-online-travel.jpg?tr=w-800%2Ch-400%2Cfo-auto',
          }}
        />
        <NewView style={{ marginBottom: 15 }} />
        <SafeAreaRowWrapperDetail>
          <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RnImage
              source={{
                uri: _data.agency_logo,
              }}
              style={{ borderRadius: 15, height: 58, width: 58 }}
            />

            <Text
              size={22}
              up={'cap'}
              weight={600}
              color={'dominant'}
              content={_data.agency_name}
              style={{ marginLeft: 15 }}
            />

            <Icon
              name='ri-global-line'
              color={'black'}
              style={{ marginLeft: 150 }}
              size={24}
            />
          </Gap>
        </SafeAreaRowWrapperDetail>
        <NewView style={{ marginBottom: 15 }} />
        <Text
          size={18}
          up={'cap'}
          weight={400}
          color={'gray'}
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        />
        <NewView style={{ marginBottom: 15 }} />
        <Text
          size={22}
          up={'cap'}
          weight={600}
          color={'black'}
          content={'Our services '}
        />
        <NewView style={{ marginBottom: 15 }} />
        {_data.agency_services.map((el, key) => {
          return (
            <MiniCard
              key={key}
              activeOpacity={0.7}
              onPress={() => {
                setChecked(!checked)
              }}
            >
              <ContentViewMinCard>
                <Text
                  content={el.agency_service_title}
                  weight={700}
                  up={'cap'}
                  size={18}
                />
                <Text
                  content={'See more'}
                  weight={600}
                  color={'dominant'}
                  size={18}
                />
              </ContentViewMinCard>
              <Icon name='ri-reply-line' color={'black'} size={24} />
            </MiniCard>
          )
        })}

        <NewView style={{ marginBottom: 10 }} />
        <Text
          size={22}
          up={'cap'}
          weight={600}
          color={'black'}
          content={'Meet our Tour Guides '}
        />
        <NewView style={{ marginBottom: 15 }} />

        <AnimatedTouchable
          style={{
            marginTop: 3,
            marginBottom: 15,
            borderRadius: 15,
            paddingVertical: 10,

            backgroundColor: palette.primary.accent_0,
          }}
          onPress={() => navigation.navigate('')}
          activeOpacity={0.8}
        >
          {_data.agency_tour_guides.map((el, key) => {
            return (
              <SafeAreaRowWrapperDetail
                key={key}
                style={{ marginHorizontal: 15, alignItems: 'center' }}
              >
                <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RnImage
                    source={{
                      uri: el.agency_guide_picture,
                    }}
                    style={{
                      borderRadius: 10,
                      height: 60,
                      width: 60,
                      marginRight: 15,
                    }}
                  />
                  <View>
                    <Text
                      size={20}
                      up={'cap'}
                      weight={600}
                      color={'dominant'}
                      content={el.agency_guide_name}
                    />
                    <Text up={'cap'} content={el.agency_guide_language} />
                  </View>
                </Gap>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon
                    name='ri-arrow-drop-right-line'
                    color={palette.primary.accent_900}
                    style={{ marginLeft: 20 }}
                    size={21}
                  />
                </View>
              </SafeAreaRowWrapperDetail>
            )
          })}
        </AnimatedTouchable>
      </AreaView>
    )
  }
}
