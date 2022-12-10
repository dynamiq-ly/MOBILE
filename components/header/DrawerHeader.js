import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import {
  TextWrapper,
  StackViewHeader,
  SafeAreaHeader,
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
              uri: 'https://i.imgur.com/DtWdSyN.png',
            }}
          />
          <Text
            up={'up'}
            size={18}
            weight={700}
            content={name}
            color={'dominant'}
          />
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
