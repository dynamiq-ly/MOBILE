import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import { NavigationContext } from '@react-navigation/native'

import {
  BackButton,
  SafeAreaHeader,
  StackViewHeader,
} from 'styles/header.module'
import { useContext } from 'react'

/**
 * @param {string} name
 */

export default function StackHeader({ name }) {
  const _nav = useContext(NavigationContext)
  return (
    <SafeAreaHeader>
      <StackViewHeader>
        <BackButton onPress={() => _nav.goBack()}>
          <Icon name={'ri-arrow-left-s-line'} color={'#18181b'} size={28} />
        </BackButton>
        <Text content={name} weight={700} up={'cap'} size={28} />
      </StackViewHeader>
    </SafeAreaHeader>
  )
}
