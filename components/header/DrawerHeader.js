import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import { TextWrapper, StackViewHeader, SafeAreaHeader, BackButton } from 'styles/header.module'
import { useContext } from 'react'
import { Image, View as Gap } from 'react-native'
import { NavigationContext, DrawerActions } from '@react-navigation/native'

const DrawerHeaderMain = ({ name }) => {
  const _nav = useContext(NavigationContext)

  return (
    <SafeAreaHeader>
      <StackViewHeader>
        <BackButton style={{ marginRight: 0 }} onPress={() => _nav.dispatch(DrawerActions.openDrawer())}>
          <Icon name={'ri-menu-line'} size={24} />
        </BackButton>
        <TextWrapper
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 21,
              height: 21,
              marginRight: 5,
            }}
            source={{
              uri: 'https://i.imgur.com/OeNnXqG.png',
            }}
          />
          <Text up={'up'} size={21} weight={700} content={name} />
        </TextWrapper>
        <BackButton style={{ alignItems: 'flex-end', marginRight: 0 }} onPress={() => _nav.navigate('menu-tab-notification')}>
          <Gap
            style={{
              zIndex: 1,
              top: '20%',
              padding: 5,
              left: '70%',
              borderRadius: 100,
              position: 'absolute',
              backgroundColor: '#ee0000',
            }}
          />
          <Icon name={'ri-notification-line'} size={24} />
        </BackButton>
      </StackViewHeader>
    </SafeAreaHeader>
  )
}

export { DrawerHeaderMain }
