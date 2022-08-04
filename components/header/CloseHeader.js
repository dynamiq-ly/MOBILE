import Icon from 'react-native-remix-icon'
import { NavigationContext } from '@react-navigation/native'

import {
  DangerAreaHeader,
  StackViewHeader,
  CircleCloseButton,
} from 'styles/header.module'
import { useContext } from 'react'
import { palette } from '~/themes/palette'

/**
 * @param {string} name
 */

export default function CloseHeader() {
  const _nav = useContext(NavigationContext)
  return (
    <DangerAreaHeader>
      <StackViewHeader>
        <CircleCloseButton onPress={() => _nav.goBack()}>
          <Icon
            name={'ri-arrow-left-s-line'}
            color={palette.primary.accent_900}
            size={24}
          />
        </CircleCloseButton>
      </StackViewHeader>
    </DangerAreaHeader>
  )
}
