import moment from 'moment'
import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Radio from 'components/checkbox/Radio'

import { useState } from 'react'
import { sport } from 'mock/entertain'
import { palette } from 'themes/palette'
import { HScrollView } from 'styles/app.module'
import { heightPixel, widthPixel } from 'utils/normalization'
import { ButtonWrapperDetail, View } from 'styles/detail.module'
import {
  View as Gap,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'

export default function SportEntertainScreen({ navigation }) {
  const [isActive, setActive] = useState({
    index: 0,
    time: moment().format('DD / MM / YYYY'),
  })

  const [isCategory, setCategory] = useState('all')

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
      {/* activity type */}
      <Gap
        style={{
          flexWrap: 'wrap',
          marginVertical: 5,
          flexDirection: 'row',
          marginHorizontal: 16,
        }}>
        {sport_category_array.map((el, key) => (
          <TouchableOpacity
            key={key}
            activeOpacity={1}
            onPress={() => setCategory(el)}
            style={{
              ...buttonStyle,
              backgroundColor:
                isCategory === el
                  ? palette.primary.accent_900
                  : palette.primary.accent_300,
            }}>
            <Text
              content={el}
              up={'cap'}
              color={isCategory === el && 'white'}
            />
          </TouchableOpacity>
        ))}
      </Gap>
      {/* list */}
      <AreaView>
        {sport
          .filter((el) =>
            isCategory === 'all' ? el : el.sport_type === isCategory
          )
          .map((el, key) => (
            <SportCard
              key={key}
              title={el.sport_title}
              timing={el.sport_timing}
              team_1={el.sport_ad_1_name}
              team_2={el.sport_ad_2_name}
              team_1_img={el.sport_ad_1_image}
              team_2_img={el.sport_ad_2_image}
              location={el.sport_broadcast_location}
            />
          ))}
      </AreaView>
    </View>
  )
}

const SportCard = function ({
  title,
  timing,
  location,
  team_1,
  team_2,
  team_1_img,
  team_2_img,
}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        backgroundColor: palette.primary.accent_0,
        marginBottom: 24,
        borderRadius: 10,
      }}>
      <ImageBackground
        style={{
          height: 150,
          overflow: 'hidden',
          alignItems: 'center',
          flexDirection: 'row',
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
        }}
        source={{
          uri: 'https://t4.ftcdn.net/jpg/01/47/39/69/360_F_147396946_DEH26IJr8Sd0nabEMhjaAPF6XJxQQAFT.jpg',
        }}>
        <Gap
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{ width: 42, height: 42, marginBottom: 10 }}
            source={{ uri: team_1_img }}
          />
          <Text content={team_1} color={'white'} up={'cap'} />
        </Gap>
        <Text content={'vs'} up={'up'} weight={800} color={'white'} />
        <Gap
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{ width: 42, height: 42, marginBottom: 10 }}
            source={{ uri: team_2_img }}
          />
          <Text content={team_2} color={'white'} up={'cap'} />
        </Gap>
      </ImageBackground>
      <Gap style={{ padding: 10 }}>
        <Text content={title} up={'cap'} weight={600} />
        <Text content={timing} />
        <Text content={location} />
      </Gap>
    </TouchableOpacity>
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

const buttonStyle = {
  marginRight: 5,
  marginBottom: 5,
  borderRadius: 7,
  paddingVertical: 5,
  paddingHorizontal: 10,
}

const sport_category_array = [
  'all',
  'basketball',
  'football',
  'volleyball',
  'tennis',
  'badminton',
]
