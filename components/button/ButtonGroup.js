import { useContext } from 'react'
import { View } from 'react-native'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import { fontPixel } from 'utils/normalization'

import { NavigationContext, DrawerActions } from '@react-navigation/native'

import {
  GroupsBtn,
  ButtonItem,
  Divider,
  IconBox,
  TextBox,
} from 'styles/button.module'

/**
 * @param0 {[{icon, name, color, path}]} array
 * @param1 {number} index
 */

export default function GroupButton({ array = [], index, callback }) {
  const _nav = useContext(NavigationContext)

  if (array.length === 0) return null
  else
    return (
      <GroupsBtn>
        {array.map((el, key) => {
          return (
            <View key={`${key}-${index}`}>
              <ButtonItem
                activeOpacity={0.9}
                onPress={() => {
                  callback.navigate(el.path)
                  _nav.dispatch(DrawerActions.closeDrawer())
                }}>
                <IconBox color={el.color}>
                  <Icon name={el.icon} size={fontPixel(24)} color={'#fffffe'} />
                </IconBox>
                <TextBox>
                  <Text content={el.name} weight={500} size={18} up={'cap'} />
                </TextBox>
                <Icon
                  name={'ri-arrow-right-s-line'}
                  size={fontPixel(24)}
                  color={'#9ca3af'}
                />
              </ButtonItem>
              {key != array.length - 1 && <Divider />}
            </View>
          )
        })}
      </GroupsBtn>
    )
}
