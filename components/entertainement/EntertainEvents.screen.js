import moment from 'moment'
import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Radio from 'components/checkbox/Radio'

import { useState } from 'react'
import { palette } from 'themes/palette'
import { View as Gap } from 'react-native'
import { ButtonWrapperDetail, View } from 'styles/detail.module'
import { HScrollView } from 'styles/app.module'
import { heightPixel, widthPixel } from 'utils/normalization'

export default function EntertainDetailScreen() {
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

      <AreaView></AreaView>
    </View>
  )
}

const CalendarItem = function ({ name, date, active = false, onClick }) {
  return (
    <Radio onPress={onClick}>
      <Gap
        style={{
          marginRight: 10,
          borderRadius: 10,
          alignItems: 'center',
          width: widthPixel(52),
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
