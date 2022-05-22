import { View } from 'react-native'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import { fontPixel } from 'utils/normalization'
import {
  GroupsBtn,
  ButtonItem,
  Divider,
  IconBox,
  TextBox,
} from 'styles/button.module'

/**
 * button group but where icons are static and iversed
 * @param0 {[{ name, path}]} array
 * @param1 {number} index
 */

export default function GroupButtonSide({ array = [], index, callback }) {
  if (array.length === 0) return null
  else
    return (
      <GroupsBtn>
        {array.map((el, key) => {
          return (
            <View key={`${key}-${index}`}>
              <ButtonItem
                activeOpacity={0.9}
                onPress={() => callback.navigate(el.path)}>
                <IconBox color={'#1A2952'}>
                  <Icon
                    name={'ri-list-settings-line'}
                    size={fontPixel(24)}
                    color={'#fffffe'}
                  />
                </IconBox>
                <TextBox>
                  <Text content={el.name} weight={500} size={18} up={'cap'} />
                </TextBox>
                <Icon
                  name={'ri-logout-circle-r-line'}
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
