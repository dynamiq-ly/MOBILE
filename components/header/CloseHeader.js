import Icon from 'react-native-remix-icon'
import { NavigationContext } from '@react-navigation/native'

import {
  DangerAreaHeader,
  StackViewHeader,
  CircleCloseButton,
} from 'styles/header.module'

import { useContext } from 'react'
import { palette } from '~/themes/palette'

import { FADE } from 'animation/FADE_IN'
import { useSpring } from '@react-spring/native'

/**
 * @param {string} name
 */

export default function CloseHeader() {
  const _nav = useContext(NavigationContext)

  const fadingSpring = useSpring({
    ...FADE.IN,
    delay: 300,
    config: {
      mass: 10,
    },
  })

  return (
    <DangerAreaHeader style={{ ...fadingSpring }}>
      <StackViewHeader>
        <CircleCloseButton onPress={() => _nav.goBack()}>
          <Icon
            name={'ri-close-line'}
            color={palette.primary.accent_900}
            size={24}
          />
        </CircleCloseButton>
      </StackViewHeader>
    </DangerAreaHeader>
  )
}
