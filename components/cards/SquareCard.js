import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import { TouchableOpacity, View } from 'react-native'
import { useState, useRef, useEffect } from 'react'

import {
  ImageSquareCard,
  OverlaySquareCard,
  StyledSquareCard,
} from 'styles/cards.module'

import LottieView from 'lottie-react-native'

/**
 *
 * @param0 {string} title
 * @param1 {string} image
 * @param3 {rating} rating
 * @returns
 */
export default function SquareCard({ title, image, location, rating }) {
  const isFirstRun = useRef(true)
  const animation = useRef(null)
  const [isLiked, setLiked] = useState(false)

  useEffect(() => {
    if (isFirstRun.current) {
      if (isLiked) {
        animation.current.play(20, 20)
      } else {
        animation.current.play(0, 0)
      }
      isFirstRun.current = false
    } else if (isLiked) {
      animation.current.play(2, 20)
    } else {
      animation.current.play(0, 1)
    }
  }, [isLiked])

  return (
    <StyledSquareCard activeOpacity={0.8}>
      <ImageSquareCard source={{ uri: image }}>
        <OverlaySquareCard>
          <TouchableOpacity onPress={() => setLiked(!isLiked)}>
            <LottieView
              loop={false}
              autoPlay={false}
              ref={animation}
              style={{ width: 62, height: 62, marginLeft: -5, marginTop: -5 }}
              source={require('assets/lottie/like_animation.json')}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row-reverse',
              alignItems: 'center',
            }}>
            <Text
              content={title.length > 12 ? `${title.slice(0, 12)}...` : title}
              size={16}
              up={'cap'}
              weight={600}
              color={'white'}
            />
          </View>
        </OverlaySquareCard>
      </ImageSquareCard>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {[...Array(5)].map((_, index) => (
          <Icon
            size={14}
            key={index}
            color={'#eab308'}
            name={`ri-star-${index <= rating ? 'fill' : 'line'}`}
            style={{ alignSelf: 'flex-end' }}
          />
        ))}
      </View>
      <Text
        content={location}
        size={11}
        up={'cap'}
        weight={400}
        color={'gray'}
      />
    </StyledSquareCard>
  )
}
