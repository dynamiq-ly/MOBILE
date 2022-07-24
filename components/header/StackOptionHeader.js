import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import { NavigationContext } from '@react-navigation/native'

import {
  BackButton,
  OptionStackViewHeader,
  SafeAreaHeader,
  StackViewHeader,
  TextWrapper,
} from 'styles/header.module'
import { useContext } from 'react'

/**
 * @param0 {string} name
 * @param0 {ReactChild} components
 */

export default function StackHeader({ name, components }) {
  const _nav = useContext(NavigationContext)
  return (
    <SafeAreaHeader>
      <StackViewHeader>
        <BackButton onPress={() => _nav.goBack()}>
          <Icon name={'ri-arrow-left-s-line'} color={'#18181b'} size={28} />
        </BackButton>
        <TextWrapper>
          <Text content={name} weight={600} up={'cap'} size={21} />
        </TextWrapper>
        <OptionStackViewHeader>{components}</OptionStackViewHeader>
      </StackViewHeader>
    </SafeAreaHeader>
  )
}
