import moment from 'moment'
import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Radio from 'components/checkbox/Radio'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useState } from 'react'
import { palette } from 'themes/palette'
import { HScrollView } from 'styles/app.module'
import { widthPixel } from 'utils/normalization'
import { VerticalListLine } from 'styles/list.module'
import { ButtonWrapperDetail, View } from 'styles/detail.module'
import { View as Gap, TouchableOpacity, Image, Dimensions } from 'react-native'

export default function DayEntertainScreen({ navigation }) {
  const [isActive, setActive] = useState({
    index: 0,
    time: moment().format('DD / MM / YYYY'),
  })
  const [isCategory, setCategory] = useState('all')

  return (
    <View>
      <Gap>
        <ButtonWrapperDetail>
          <Text size={18} weight={600} color={'gray'} content={moment().add(isActive.index, 'days').calendar()} />
        </ButtonWrapperDetail>
        <Gap style={{ marginTop: 10 }} />
        {/* calendar */}
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(7)].map((_, key) => (
            <CalendarItem
              key={key}
              active={isActive.time === moment().add(key, 'd').format('DD / MM / YYYY') ? true : false}
              onClick={() =>
                setActive({
                  index: key,
                  time: moment().add(key, 'd').format('DD / MM / YYYY'),
                })
              }
              date={moment().add(key, 'd').format('DD / MM / YYYY').slice(0, 2)}
              name={moment().add(key, 'd').format('ddd')}
            />
          ))}
          <Gap style={{ marginRight: 16 }} />
        </HScrollView>
      </Gap>
      {/* category */}
      <Gap>
        <Gap style={{ marginTop: 10 }} />
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          {type_category_Array.map((el, key) => (
            <Gap style={{ alignItems: 'center', flexDirection: 'row' }} key={key}>
              <FixedWidthButton title={el} func={() => setCategory(el)} active={el === isCategory ? false : true} />
              {type_category_Array.length !== key + 1 && <VerticalListLine />}
            </Gap>
          ))}
          <Gap style={{ marginLeft: 24 }} />
        </HScrollView>
      </Gap>

      {/* list */}
      <AreaView>
        <TouchableOpacity
          style={{ ...TouchableProps }}
          onPress={() =>
            navigation.navigate('menu-tab-stack-entertaining-events-detail', {
              _name: 'pool party',
            })
          }>
          <Image
            style={{ width: 62, height: '100%', borderRadius: 5, marginRight: 14 }}
            source={{
              uri: 'https://media.npr.org/assets/img/2021/07/28/gettyimages-1234277709-64e86b080430ca47fd867468bcb9dca4d010b427.jpg',
            }}
          />
          <Gap style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1, overflow: 'hidden' }}>
            <Text content={'pool party'} size={18} up={'cap'} weight={600} />
            <Text content={'main pool'} size={14} up={'cap'} color={'dominant'} weight={600} />
            <Text content={'Enjoying your time at the pool, how about joining us for a little pool party.'} color={'gray'} size={14} />
          </Gap>
        </TouchableOpacity>
      </AreaView>
    </View>
  )
}

const TouchableProps = {
  padding: 10,
  height: 100,
  marginBottom: 12,
  borderRadius: 10,
  flexDirection: 'row',
  backgroundColor: palette.primary.accent_0,
}

const CalendarItem = function ({ name, date, active = false, onClick }) {
  return (
    <Radio onPress={onClick}>
      <Gap
        style={{
          height: 58,
          marginRight: 5,
          borderRadius: 10,
          width: (Dimensions.get('window').width - 64) / 7,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: palette.primary.accent_0,
          borderWidth: 2,
          borderColor: active ? palette.secondary.accent_500 : palette.primary.accent_0,
        }}>
        <Text content={date} up={'up'} size={16} weight={700} color={'dominant'} />
        <Text content={name} up={'up'} color={'gray'} weight={500} size={12} />
      </Gap>
    </Radio>
  )
}

const type_category_Array = ['all', 'adults', 'teens', 'family', 'kids']
