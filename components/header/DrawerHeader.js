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
              width: 26,
              height: 26,
              marginRight: 8,
              borderRadius: 100,
            }}
            source={{
              uri: 'https://www.pngitem.com/pimgs/m/267-2679921_star-crown-png-crown-hotel-logo-png-transparent.png',
            }}
          />
          <Text
            up={'up'}
            size={21}
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
