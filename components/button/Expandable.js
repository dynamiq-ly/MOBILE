import { useState } from 'react'
import { useSpring } from '@react-spring/native'
import { heightPixel } from 'utils/normalization'

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

export default function Expandable() {
  const [isExpanded, setExpanded] = useState(false)

  const expandingStyle = useSpring({
    height: isExpanded ? heightPixel(100) : heightPixel(0),
  })

  return (
    <StyledExpandable
      activeOpacity={0.9}
      onPress={() => setExpanded(!isExpanded)}>
      <SafeAreaRowWrapperDetail>
        <StyledExpandableText>
          <Text
            size={18}
            up={'cap'}
            weight={600}
            content={'button to expand'}
          />
        </StyledExpandableText>
        <StyledExpandableButton>
          <Text size={18} weight={500} content={'50$'} color={'dominant'} />
          <BookButton>
            <Text
              content={'book'}
              color={'white'}
              size={16}
              up={'cap'}
              align={'center'}
            />
          </BookButton>
          <Icon name={`ri-arrow-${isExpanded ? 'up' : 'down'}-s-line`} />
        </StyledExpandableButton>
      </SafeAreaRowWrapperDetail>

      <StyledExpandableView style={{ ...expandingStyle }}>
        {isExpanded && (
          <Text
            size={14}
            color={'gray'}
            content={
              'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
            }
          />
        )}
      </StyledExpandableView>
    </StyledExpandable>
  )
}
