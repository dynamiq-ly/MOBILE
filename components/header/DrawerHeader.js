import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import {
  TextWrapper,
  StackViewHeader,
  SafeAreaHeader,
  OptionStackViewHeader,
  BackButton,
} from 'styles/header.module'
import { useContext } from 'react'
import { Image } from 'react-native'
import { NavigationContext, DrawerActions } from '@react-navigation/native'

const DrawerHeaderMain = ({ name }) => {
  const _nav = useContext(NavigationContext)

  return (
    <SafeAreaHeader>
      <StackViewHeader>
        <BackButton
          style={{ marginRight: 0 }}
          onPress={() => _nav.dispatch(DrawerActions.openDrawer())}>
          <Icon name={'ri-menu-line'} size={24} />
        </BackButton>
        <TextWrapper
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{
              width: 21,
              height: 21,
              marginRight: 8,
              borderRadius: 100,
            }}
            source={{
              uri: 'https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67',
            }}
          />
          <Text up={'up'} size={18} weight={700} content={name} />
        </TextWrapper>
        <BackButton
          style={{ alignItems: 'flex-end', marginRight: 0 }}
          onPress={() => _nav.navigate('menu-tab-notification')}>
          <Icon name={'ri-notification-line'} size={24} />
        </BackButton>
      </StackViewHeader>
    </SafeAreaHeader>
  )
}

export { DrawerHeaderMain }
