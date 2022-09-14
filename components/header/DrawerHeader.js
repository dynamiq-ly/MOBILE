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
              uri: 'https://yt3.ggpht.com/ytc/AMLnZu_tKCuboK3yaSmmG2d_KNurTVoD6-72B9C3B550Fw=s900-c-k-c0x00ffffff-no-rj',
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
