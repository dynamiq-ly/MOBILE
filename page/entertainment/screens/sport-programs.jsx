import _ from 'lodash'
import moment from 'moment'
import { useCallback, useState } from 'react'
import { RefreshControl, TouchableOpacity, View } from 'react-native'

/* modules */
import { FlatList } from '@/shared'

/* components */
import { Image, Text } from '@/common'
import { CalendarSwipe, ButtonGroup, OptionCard, Icon } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { variables } from '@/constant/variables'
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

export default ({ navigation }) => {
  const theme = useTheme()

  const [date, setDate] = useState('')
  const [state, setState] = useState(1)

  /* data fetching */
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery('@Sport-Programs', getClientSideQueries.getSportPrograms)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        header={
          <View style={{ gap: theme.units.md, marginBottom: theme.units.md }}>
            <CalendarSwipe getDate={setDate} />
            <ButtonGroup
              selectedIndex={state}
              setSelectedIndex={setState}
              scrollabe={_.uniqBy(data, 'category').length > 3}
              items={_.uniqBy(data, 'category').map((item, key) => ({ id: key + 1, label: item.category }))}
            />
          </View>
        }
        data={data
          .filter((el) => el.day === moment(date, 'MM/DD/YYYY').format('YYYY-MM-DD'))
          .filter(
            (el) =>
              el.category ===
              _.uniqBy(data, 'category')
                .map((item, key) => ({ id: key + 1, label: item.category }))
                .find((cat) => cat.id === state).label
          )}
        gap='sm'
        keyExtractor={(item) => item.id}
        renderedItem={({ item }) => (
          <View
            key={item.id}
            style={{
              backgroundColor: theme.core.background['variant_container'],
              borderWidth: 1,
              overflow: 'hidden',
              borderRadius: theme.units.md,
              borderColor: `${theme.core.text['variant_sub']}50`,
            }}>
            <View style={{ position: 'relative' }}>
              <Image source={`${variables.STORAGE_LINK}/entertainment/sports/${item.banner_image}`} height='125px' />
              {item.lots_teams === 1 && (
                <View style={{ position: 'absolute', width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, gap: theme.units.md }}>
                    <Image source={`${variables.STORAGE_LINK}/entertainment/sports/${item.home_team_logo}`} height='42px' width='42px' />
                    <Text size={8} color='neutral' weight='md' t='capitalize'>
                      {item.home_team_name}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, gap: theme.units.md }}>
                    <Image source={`${variables.STORAGE_LINK}/entertainment/sports/${item.away_team_logo}`} height='42px' width='42px' />
                    <Text size={8} color='neutral' weight='md' t='capitalize'>
                      {item.away_team_name}
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <View style={{ flexDirection: 'row', padding: theme.units.md }}>
              <View style={{ flex: 1 }}>
                {/* icons */}
                <View style={{ gap: theme.units.sm }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                    <Text size={8} weight='md' t='capitalize'>
                      {item.slug}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                    <Icon icon={require('@/assets/icons/product/monocrome/clock-dark.png')} size={14} />
                    <Text size={6} color='sub'>
                      {item.start_time} - {item.end_time}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                    <Icon icon={require('@/assets/icons/product/monocrome/location-dark.png')} size={14} />
                    <Text size={6} color='sub'>
                      {item.location}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity>
                  <Icon size={18} icon={require('@/assets/icons/product/monocrome/bell-dark.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
      />
    </View>
  )
}

const getClientSideQueries = {
  getSportPrograms: () =>
    useFetch('api/entertainement/sport-programs')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}
