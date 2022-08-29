import styled from 'styled-components'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaRowWrapperDetail, View } from 'styles/detail.module'
import { FADE_IN_DONW } from 'animation/FADE_IN'
import { animated, useSpring } from '@react-spring/native'
import { ScrollView, View as RnView, Image as RnImage } from 'react-native'

export default function AboutHotelScreen() {
  const floatingCardSpring = useSpring({
    ...FADE_IN_DONW.withOpacity,
  })

  return (
    <View>
      <StatusBar style='inverted' />
      <CloseHeader />
      <ScrollView>
        <Carsouel
          imageArray={[
            { image: 'https://i.ytimg.com/vi/O7srTW0wQGw/maxresdefault.jpg' },
            {
              image:
                'https://cf.bstatic.com/xdata/images/hotel/max1024x768/178608951.jpg?k=e74044288e6a2560620ac537bf098e76b39b702908c0a08df8b7bf537f5d63b6&o=&hp=1',
            },
            {
              image:
                'https://cf.bstatic.com/xdata/images/hotel/max1024x768/328025662.jpg?k=16b1954804d9419f1fcf4fb29869c810beb7b23fda74cd95eefc36d674a2d357&o=&hp=1',
            },
          ]}
        />
        <RnView style={{ marginHorizontal: 16 }}>
          {/* card */}
          <AnimatedView
            style={{
              ...floatingCardSpring,
            }}>
            {button.map((el, key) => (
              <StyledButton key={key} onPress={el.fun}>
                <Icon name={el.icon} color={'white'} />
                <Text
                  content={el.name}
                  color={'white'}
                  style={{ marginTop: 5 }}
                />
              </StyledButton>
            ))}
          </AnimatedView>
          {/* content */}
          <Text
            content={'hotel lella beya'}
            weight={600}
            up={'cap'}
            size={28}
          />
          {/* awards */}
          <SafeAreaRowWrapperDetail
            style={{ alignItems: 'center', marginTop: 10 }}>
            <Text
              content={'holder of 7 international awards'}
              up={'up'}
              color={'gray'}
            />
            <Icon name={'ri-medal-line'} color={'#36D7B7'} />
          </SafeAreaRowWrapperDetail>
          {/* description */}
          <Text
            style={{ marginTop: 10 }}
            content={
              "Located in the central business and embassy district of Tunisia's capital, Sheraton Tunis Hotel invites business and leisure travelers to enjoy spacious, well-equipped rooms and suites in an idyllic location overlooking the city of Tunis. Our concierge service is at your disposal to help you prepare your itinerary. See landmarks such as tunis' legendary Medina, the ruins of Carthage, and the Bardo National Museum. Each of our 285 rooms and suites offers high-quality facilities, such as a private balcony with spectacular views of Tunisia's capital, Tunis. Stay connected during your stay at our hotel thanks to the full-service business center, common areas and free Wi-Fi in all rooms, or continue your usual exercise program in our well-equipped gym and heated indoor pool. Also enjoy our peaceful spa and elegant modular event space. Come and spend a remarkable stay in the historic heart of the capital of Tunisia."
            }
          />
          {/* reviews */}
          <TripAdvisorReviews>
            <RnView>
              <Text
                content={'250 reviews for this hotel'}
                size={18}
                up={'cap'}
              />
              <Text
                content={'see what people have to say'}
                size={18}
                up={'cap'}
              />
            </RnView>
            <RnImage
              source={{
                uri: 'https://thecedarhouselyme.co.uk/wp-content/themes/the-outline/img/logos/tripadvisor.png',
              }}
              style={{ width: 100, height: 42 }}
            />
          </TripAdvisorReviews>
        </RnView>
      </ScrollView>
    </View>
  )
}

const button = [
  {
    name: '3D View',
    icon: 'ri-eye-2-line',
    func: () => {},
  },
  {
    name: 'Website',
    icon: 'ri-link',
    func: () => {},
  },
  {
    name: 'location',
    icon: 'ri-map-line',
    func: () => {},
  },
  {
    name: 'evaluate',
    icon: 'ri-star-line',
    func: () => {},
  },
]

const AnimatedView = styled(animated.View)`
  width: 100%;
  height: 100px;
  margin-top: 28px;
  padding: 10px 14px;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 24px;
  justify-content: center;
  background: ${({ theme }) => theme.primary.accent_900};
`

const StyledButton = styled.TouchableOpacity`
  width: 25%;
  align-items: center;
  justify-content: center;
`

const TripAdvisorReviews = styled.View`
  width: 100%;
  height: 100px;
  margin-top: 24px;
  padding: 10px 14px;
  margin-bottom: 24px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.primary.accent_0};
`
