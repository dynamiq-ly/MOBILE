import moment from 'moment'
import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Radio from 'components/checkbox/Radio'

import { useState } from 'react'
import { palette } from 'themes/palette'
import { HScrollView } from 'styles/app.module'
import { View as Gap, TouchableOpacity, Image } from 'react-native'
import { ButtonWrapperDetail, View } from 'styles/detail.module'
import { heightPixel, widthPixel } from 'utils/normalization'

export default function EntertainDetailScreen({ navigation }) {
  const [isActive, setActive] = useState({
    index: 0,
    time: moment().format('DD / MM / YYYY'),
  })

  return (
    <View>
      <Gap>
        <ButtonWrapperDetail>
          <Text
            size={18}
            weight={600}
            color={'gray'}
            content={moment().add(isActive.index, 'days').calendar()}
          />
        </ButtonWrapperDetail>
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(7)].map((_, key) => (
            <CalendarItem
              key={key}
              active={
                isActive.time ===
                moment().add(key, 'd').format('DD / MM / YYYY')
                  ? true
                  : false
              }
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

      <AreaView>
        <TouchableOpacity
          style={{ ...TouchableProps }}
          onPress={() =>
            navigation.navigate('menu-tab-stack-entertaining-events-detail', {
              _name: 'pool party',
            })
          }>
          <Text content={'pool party'} size={18} up={'cap'} weight={600} />
          <Gap style={{ marginTop: 5 }} />
          <Text
            content={
              'Enjoying your time at the pool, how about joining us for a little pool party.'
            }
            color={'gray'}
            size={14}
          />
          <Gap style={{ marginTop: 10 }} />
          <Image
            style={{ width: 28, height: 28, borderRadius: 100 }}
            source={{
              uri: 'https://media.npr.org/assets/img/2021/07/28/gettyimages-1234277709-64e86b080430ca47fd867468bcb9dca4d010b427.jpg',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...TouchableProps }}
          onPress={() =>
            navigation.navigate('menu-tab-stack-entertaining-events-detail', {
              _name: 'hiking',
            })
          }>
          <Text content={'hiking'} size={18} up={'cap'} weight={600} />

          <Gap style={{ marginTop: 5 }} />
          <Text
            content={
              'Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century.'
            }
            color={'gray'}
            size={14}
          />
          <Gap style={{ marginTop: 10 }} />
          <Image
            style={{ width: 28, height: 28, borderRadius: 100 }}
            source={{
              uri: 'https://www.france-voyage.com/visuals/pratique/hiking-with-pleasure-21-1_w600.webp',
            }}
          />
        </TouchableOpacity>
      </AreaView>
    </View>
  )
}

const TouchableProps = {
  padding: 10,
  marginBottom: 14,
  borderRadius: 10,
  backgroundColor: palette.primary.accent_0,
}

const CalendarItem = function ({ name, date, active = false, onClick }) {
  return (
    <Radio onPress={onClick}>
      <Gap
        style={{
          marginRight: 10,
          borderRadius: 10,
          alignItems: 'center',
          width: widthPixel(58),
          height: heightPixel(78),
          justifyContent: 'center',
          backgroundColor: palette.primary.accent_0,
          borderWidth: 2,
          borderColor: active
            ? palette.secondary.accent_500
            : palette.primary.accent_0,
        }}>
        <Text
          content={date}
          up={'up'}
          size={20}
          weight={700}
          color={'dominant'}
        />
        <Text content={name} up={'up'} color={'gray'} weight={500} />
      </Gap>
    </Radio>
  )
}
