import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'
import CheckBox from 'components/checkbox/Checkbox'

import { useState } from 'react'
import { Image } from 'styles/image.module'
import { View as Gap } from 'react-native'
import { TextArea } from 'components/input/Input'
import { View, ButtonWrapperDetail } from 'styles/detail.module'
import { BoxIcon, BoxText, PhoneDirectoryRow } from 'styles/list.module'

export default function HouseKeepingScreen({ navigation }) {
  const [text, setText] = useState('')
  const [isChecked, setChecked] = useState(false)
  return (
    <View>
      <AreaView>
        <Image
          source={{
            uri: 'https://lirp.cdn-website.com/a203eaf6/dms3rep/multi/opt/1_Ef8-opcxHXYVHqSSy5xqOA-960w.jpeg',
          }}
        />
        <Gap style={{ marginTop: 15 }}>
          <Text
            size={16}
            color={'gray'}
            content={
              'The cleaning serve of your room will be carried out daily between 09:00 and 15:00'
            }
          />
        </Gap>
        <Gap style={{ marginTop: 10 }}>
          <Text
            size={16}
            color={'gray'}
            content={
              'If you do not want this service please post a "do not disturbt" sign outside your door.'
            }
          />
        </Gap>
        <Gap style={{ marginTop: 10 }}>
          <Text
            size={16}
            color={'gray'}
            content={'bed sheets will be changed every 3days.'}
          />
        </Gap>

        {array_checking.map((el, key) => (
          <PhoneDirectoryRow key={key}>
            <BoxIcon>
              <Icon name={el.icon} />
            </BoxIcon>
            <BoxText>
              <Text content={el.name} weight={600} up={'cap'} size={18} />
              <Text content={`${el.price} USD`} color={'dominant'} size={14} />
            </BoxText>
            <BoxIcon>
              <CheckBox checked={isChecked} onChange={setChecked} />
            </BoxIcon>
          </PhoneDirectoryRow>
        ))}
        <TextArea
          value={text}
          onChangeText={(e) => setText(e)}
          placeholder={'describe your problem...'}
          icon={'ri-message-line'}
        />
      </AreaView>
      <ButtonWrapperDetail>
        <Button title={'request service'} />
      </ButtonWrapperDetail>
    </View>
  )
}

const array_checking = [
  {
    name: 'rooms',
    icon: 'ri-home-line',
    price: 25,
  },
  {
    name: 'suites',
    icon: 'ri-building-line',
    price: 25,
  },
]
