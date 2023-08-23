/* package */
import _ from 'lodash'
import moment from 'moment'
import { useCallback, useState } from 'react'
import { RefreshControl, View } from 'react-native'

/* modules */
import { Container } from '@/shared'

/* components */
import { Text } from '@/common'
import { CalendarSwipe, ButtonGroup, Card } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { variables } from '@/constant/variables'
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

export default ({ navigation }) => {
  const theme = useTheme()
  // this is where we going to store our date that we got from the calendar
  const [date, setDate] = useState('')
  const [state, setState] = useState(1)

  /* data fetching */
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery('@Night-Shows', getClientSideQueries.getNightShowsGrouped)
  const { data: categories } = useQuery('@Night-Shows-Category', getClientSideQueries.getNightShowsCategory)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <Container stickyHeaderIndices={[0]} safeArea={false} refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      <View style={{ backgroundColor: theme.core.background['variant_view'] }}>
        <View style={{ marginBottom: theme.units.sm }}>
          <CalendarSwipe getDate={setDate} />
        </View>
        {categories && categories.length > 0 && (
          <View style={{ marginBottom: theme.units.sm }}>
            <ButtonGroup
              selectedIndex={state}
              setSelectedIndex={setState}
              scrollabe={_.uniqBy(categories, 'location').length > 3}
              items={_.uniqBy(categories, 'location').map((el, index) => ({ id: index + 1, label: el.location }))}
            />
          </View>
        )}
      </View>

      {data &&
        data[moment(date, 'MM/DD/YYYY').format('YYYY-MM-DD')] &&
        Object.keys(data[moment(date, 'MM/DD/YYYY').format('YYYY-MM-DD')]).map((key, i) => (
          <View key={i} style={{ gap: theme.units.md, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Text size={8} color='sub'>
                {key}
              </Text>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ width: '100%', borderBottomWidth: 1, borderColor: '#dfdfdf' }} />
              </View>
            </View>
            {categories &&
              data[moment(date, 'MM/DD/YYYY').format('YYYY-MM-DD')][key]
                .filter(
                  (el) =>
                    el.location ===
                    _.uniqBy(categories, 'location')
                      .map((el, index) => ({ id: index + 1, label: el.location }))
                      .find((elem) => elem.id === state).label
                )
                .map((item, index) => (
                  <Card
                    key={index}
                    image={`${variables.STORAGE_LINK}/entertainment/nights/${item.night.image}`}
                    onPress={() =>
                      navigation.navigate('[stack] stack-entertainement-night-activities-details', {
                        id: item.night.id,
                        data: item.night,
                        name: item.night.name,
                      })
                    }>
                    <Text size={7} weight='md' t={'capitalize'}>
                      {item.night.name}
                    </Text>
                    <Text size={6} line={1.25} color='sub' turncate={2}>
                      {item.night.description}
                    </Text>
                  </Card>
                ))}
          </View>
        ))}
    </Container>
  )
}

const getClientSideQueries = {
  getNightShowsGrouped: () =>
    useFetch('api/entertainement/grouping/nights')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),

  getNightShowsCategory: () =>
    useFetch('api/entertainement/night-shows/timing')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}
