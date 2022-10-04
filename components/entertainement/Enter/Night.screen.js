import moment from 'moment'
import Text from 'components/text/Text'
import Radio from 'components/checkbox/Radio'
import FullImageCard from 'components/cards/FullImageCard'
import NotFound from 'components/notFound/NotFound'

import { useState, useCallback } from 'react'
import { useQuery } from 'react-query'
import { baseUrl, __query } from 'hooks/useApi'
import { palette } from 'themes/palette'
import { night_shows } from 'mock/entertain'
import { HScrollView } from 'styles/app.module'
import { widthPixel } from 'utils/normalization'
import { ButtonWrapperDetail, View } from 'styles/detail.module'

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
          data={data}
          stickyHeaderIndices={[0]}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Gap
              style={{
                paddingBottom: 10,
                paddingHorizontal: 10,
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
            </Gap>
          }
          renderItem={({ item }) => (
            <FullImageCard
              title={item.entertainements_title}
              image={`${baseUrl}storage/entertainement/${item.images[0].image}`}
              onPress={() =>
                navigation.navigate('menu-tab-stack-excursions-list')
              }
            />
          )}
          numColumns={2}
          columnWrapperStyle={{
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
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
