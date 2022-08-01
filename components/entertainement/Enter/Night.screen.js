import moment from 'moment'
import Text from 'components/text/Text'
import Radio from 'components/checkbox/Radio'
import FullImageCard from 'components/cards/FullImageCard'

import { useState } from 'react'
import { palette } from 'themes/palette'
import { night_shows } from 'mock/entertain'
import { HScrollView } from 'styles/app.module'
import { widthPixel } from 'utils/normalization'
import { View as Gap, FlatList } from 'react-native'
import { ButtonWrapperDetail, View } from 'styles/detail.module'

export default function NightEntertainScreen({ navigation }) {
  const [isActive, setActive] = useState({
    index: 0,
    time: moment().format('DD / MM / YYYY'),
  })

  return (
    <View>
      {/* calendar */}
      <Gap>
        <ButtonWrapperDetail>
          <Text
            size={18}
            weight={600}
            color={'gray'}
            content={moment().add(isActive.index, 'days').calendar()}
          />
        </ButtonWrapperDetail>
        {/* calendar */}
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
      {/* shows */}
      <FlatList
        numColumns={2}
        data={night_shows}
        horizontal={false}
        style={{ padding: 16 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FullImageCard
            title={item.show_title}
            image={item.show_image}
            onPress={() =>
              navigation.navigate('menu-tab-stack-excursions-list')
            }
          />
        )}
      />
    </View>
  )
}

const CalendarItem = function ({ name, date, active = false, onClick }) {
  return (
    <Radio onPress={onClick}>
      <Gap
        style={{
          height: 62,
          marginRight: 5,
          borderRadius: 10,
          alignItems: 'center',
          width: widthPixel(52),
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
