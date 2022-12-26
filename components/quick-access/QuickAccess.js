import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import { View as Gap } from 'react-native'
import {
  ButtonItem,
  Divider,
  GroupsBtn,
  IconBox,
  TextBox,
} from 'styles/button.module'

const QuickAccess = ({ navigation }) => {
  return (
    <AreaView>
      <GroupsBtn>
        {array.map((el, key) => {
          return (
            <Gap key={key}>
              <ButtonItem
                activeOpacity={0.9}
                onPress={() =>
                  navigation.navigate(el.path, {
                    _name: el.name,
                  })
                }>
                <IconBox color={'#439A97'}>
                  <Icon
                    name={'ri-external-link-line'}
                    size={24}
                    color={'#fffffe'}
                  />
                </IconBox>
                <TextBox>
                  <Text content={el.name} weight={500} size={18} up={'cap'} />
                </TextBox>
                <Icon
                  name={'ri-arrow-right-circle-line'}
                  size={24}
                  color={'#9ca3af'}
                />
              </ButtonItem>
              {key != array.length - 1 && <Divider />}
            </Gap>
          )
        })}
      </GroupsBtn>
    </AreaView>
  )
}

export default QuickAccess

const array = [
  {
    name: 'Food Service',
    path: 'menu-tab-stack-room-service-food-service',
  },
  {
    name: 'Drink Service',
    path: 'menu-tab-stack-room-service-drinks-service',
  },
  {
    name: 'Request',
    path: 'menu-tab-stack-other-request',
  },
  {
    name: 'night shows',
    path: 'menu-tab-stack-entertaining-events',
  },
]
