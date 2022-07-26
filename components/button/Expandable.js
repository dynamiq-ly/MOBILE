import { useState } from 'react'
import { View } from 'react-native'
import { heightPixel } from 'utils/normalization'
import { animated, useSpring } from '@react-spring/native'

import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import {
  BookButton,
  StyledExpandable,
  StyledExpandableText,
  StyledExpandableView,
  StyledExpandableButton,
} from 'styles/button.module'

import { SafeAreaRowWrapperDetail } from 'styles/detail.module'

export default function Expandable({
  interactive = false,
  title = 'button to epxand',
  price = '$0',
  buttoon = 'click',
  content = '',
  ...rest
}) {
  const [isExpanded, setExpanded] = useState(false)

  const expandingStyle = useSpring({
    height: isExpanded ? heightPixel(82) : heightPixel(0),
  })

  const expandDelay = useSpring({
    display: isExpanded ? 'flex' : 'none',
    opacity: isExpanded ? 1 : 0,
    delay: isExpanded ? 200 : 0,
  })

  return (
    <StyledExpandable
      activeOpacity={0.9}
      onPress={() => setExpanded(!isExpanded)}>
      <SafeAreaRowWrapperDetail>
        <StyledExpandableText>
          <Text size={18} up={'cap'} weight={600} content={title} />
        </StyledExpandableText>
        <StyledExpandableButton>
          {interactive && (
            <>
              <Text size={18} weight={500} content={price} color={'dominant'} />
              <BookButton {...rest}>
                <Text
                  content={buttoon}
                  color={'white'}
                  size={16}
                  up={'cap'}
                  align={'center'}
                />
              </BookButton>
            </>
          )}
          <Icon name={`ri-arrow-${isExpanded ? 'up' : 'down'}-s-line`} />
        </StyledExpandableButton>
      </SafeAreaRowWrapperDetail>

      <StyledExpandableView style={{ ...expandingStyle }}>
        <animated.View style={{ ...expandDelay }}>
          <Text size={14} color={'gray'} content={content} />
        </animated.View>
      </StyledExpandableView>
    </StyledExpandable>
  )
}
