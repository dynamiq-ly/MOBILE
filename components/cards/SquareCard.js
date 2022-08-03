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
export default function SquareCard({
  title,
  image,
  location,
  rating,
  ...rest
}) {
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
      animation.current.play(1, 20)
    } else {
      animation.current.play(1, 0)
    }
  }, [isLiked])

  return (
    <StyledSquareCard activeOpacity={0.8} {...rest}>
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
          marginBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {[...Array(5)].map((_, index) => (
          <Icon
            size={14}
            key={index}
            color={'#facc15'}
            name={`ri-star-${index <= rating ? 'fill' : 'line'}`}
            style={{ alignSelf: 'flex-end' }}
          />
        ))}
      </View>
      <Text up={'cap'} weight={400} color={'gray'} content={location} />
    </StyledSquareCard>
  )
}

/**
 *
 * @param0 {string} title
 * @param1 {string} image
 * @returns
 */
export function SquareCardSmall({ title, image, ...rest }) {
  const isFirstRun = useRef(true)
  const animation = useRef(null)
  const [isLiked, setLiked] = useState(false)

  useEffect(() => {
    if (isFirstRun.current) {
      if (isLiked) {
        animation.current.play(240, 240)
      } else {
        animation.current.play(0, 0)
      }
      isFirstRun.current = false
    } else if (isLiked) {
      animation.current.play(0, 240)
    } else {
      animation.current.play(0, 0)
    }
  }, [isLiked])

  return (
    <StyledSquareCard activeOpacity={0.8} {...rest}>
      <ImageSquareCard source={{ uri: image }}>
        <OverlaySquareCard>
          <TouchableOpacity onPress={() => setLiked(!isLiked)}>
            <LottieView
              loop={false}
              autoPlay={false}
              ref={animation}
              style={{ width: 42, height: 42, marginLeft: 0, marginTop: 0 }}
              source={require('assets/lottie/bookmark_animation.json')}
            />
          </TouchableOpacity>
        </OverlaySquareCard>
      </ImageSquareCard>
      <Text
        content={title.length > 24 ? `${title.slice(0, 24)}...` : title}
        up={'cap'}
        weight={400}
        color={'gray'}
      />
    </StyledSquareCard>
  )
}
