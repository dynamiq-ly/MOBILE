import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import { safety_measures } from 'mock/safety'
import { fontPixel } from 'utils/normalization'
import { ButtonSafety, IconBox, TextBox } from 'styles/safety.module'

export default function SafetyScreen({ navigation }) {
  return (
    <AreaView>
      {safety_measures.map((el) => {
        return (
          <ButtonSafety
            key={el.id}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('menu-tab-stack-safety-detail', {
                _data: el,
              })
            }>
            <IconBox>
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
          </ButtonSafety>
        )
      })}
    </AreaView>
  )
}
