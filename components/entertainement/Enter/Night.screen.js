import moment from 'moment'
import Text from 'components/text/Text'
import Radio from 'components/checkbox/Radio'
import Widecard from 'components/cards/Widecard'
// import FullImageCard from 'components/cards/FullImageCard'
import NotFound from 'components/notFound/NotFound'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useState, useCallback } from 'react'
import { useQuery } from 'react-query'
import { baseUrl, __query } from 'hooks/useApi'
import { palette } from 'themes/palette'
import { widthPixel } from 'utils/normalization'
import { View } from 'styles/detail.module'
import { VerticalListLine } from 'styles/list.module'

import {
  View as Gap,
  FlatList,
  LogBox,
  RefreshControl,
  ScrollView,
} from 'react-native'

export default function NightEntertainScreen({ navigation }) {
  const [isActive, setActive] = useState({
    index: 0,
    time: moment().format('DD / MM / YYYY'),
  })

  const [category, setCategory] = useState('all')

  const { data, refetch, status } = useQuery(
    '@entertainement-night-shows',
    entertainementNightShows,
    {
      refetchOnMount: true,
    }
  )

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <View>
      {status === 'loading' && <NotFound />}
      {status === 'error' && <NotFound killProcess />}
      {status === 'success' && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          data={data
            .filter(
              (el) =>
                el.timings.filter(
                  (el) =>
                    moment
                      .unix(el.entertainement_timings_date)
                      .format('DD / MM / YYYY') === isActive.time
                ).length > 0
            )
            .filter((el) =>
              category === 'all'
                ? el.entertainements_location !== 'all'
                : el.entertainements_location === category
            )}
          stickyHeaderIndices={[0]}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Gap
              style={{
                // paddingBottom: 16,
                backgroundColor: palette.primary.accent_100,
              }}>
              <Text
                size={18}
                weight={600}
                color={'gray'}
                style={{ marginBottom: 10 }}
                content={moment().add(isActive.index, 'days').calendar()}
              />

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                    date={moment()
                      .add(key, 'd')
                      .format('DD / MM / YYYY')
                      .slice(0, 2)}
                    name={moment().add(key, 'd').format('ddd')}
                  />
                ))}
                <Gap style={{ marginRight: 16 }} />
              </ScrollView>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {location.map((el, key) => (
                  <Gap
                    key={key}
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingVertical: 16,
                    }}>
                    <FixedWidthButton
                      title={el}
                      func={() => setCategory(el)}
                      active={category !== el ? true : false}
                    />
                    {location.length !== key + 1 && <VerticalListLine />}
                  </Gap>
                ))}
              </ScrollView>
            </Gap>
          }
          renderItem={({ item }) => (
            <Widecard
              state={'hidden'}
              name={item.entertainements_title}
              image={`${baseUrl}storage/entertainement/${item.images[0].image}`}
              onPress={() =>
                navigation.navigate(
                  'menu-tab-stack-entertaining-night-shows-detail',
                  {
                    _id: item.id,
                    _data: data.filter((el) => el.id === item.id)[0],
                  }
                )
              }
              specialiy={moment
                .unix(
                  item.timings.filter(
                    (el) =>
                      moment
                        .unix(el.entertainement_timings_date)
                        .format('DD / MM / YYYY') === isActive.time
                  )[0].entertainement_timings_date
                )
                .format('LT')}
            />
          )}
          style={{
            paddingHorizontal: 16,
          }}
        />
      )}
    </View>
  )
}

let entertainementNightShows = () => {
  return __query
    .get('api/entertainement&status=1/nightShows')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

const location = ['all', 'lobby bar', 'main hall', 'main theatre']

LogBox.ignoreAllLogs(true)

const CalendarItem = function ({ name, date, active = false, onClick }) {
  return (
    <Radio onPress={onClick}>
      <Gap
        style={{
          height: 62,
          marginRight: 8,
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
