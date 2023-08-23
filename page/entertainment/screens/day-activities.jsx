/* package */
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

  const { data, isLoading, error, refetch } = useQuery('@Days-Activities', getClientSideQueries.getDayActivitiesGrouped)

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
        <View style={{ marginBottom: theme.units.sm }}>
          <ButtonGroup selectedIndex={state} setSelectedIndex={setState} scrollabe={category.length > 3} items={category} />
        </View>
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
            {data[moment(date, 'MM/DD/YYYY').format('YYYY-MM-DD')][key]
              .filter((el) => el.age === category.find((elem) => elem.id === state).label)
              .map((item, index) => (
                <Card
                  key={index}
                  image={`${variables.STORAGE_LINK}/entertainment/days/${item.activity.image}`}
                  onPress={() =>
                    navigation.navigate('[stack] stack-entertainement-day-activities-details', {
                      id: item.activity.id,
                      data: item.activity,
                      name: item.activity.name,
                    })
                  }>
                  <Text size={7} weight='md' t={'capitalize'}>
                    {item.activity.name}
                  </Text>
                  <Text size={6} line={1.25} color='sub' turncate={2}>
                    {item.activity.description}
                  </Text>
                </Card>
              ))}
          </View>
        ))}
    </Container>
  )
}

const category = [
  { id: 1, label: 'adult' },
  { id: 2, label: 'child' },
  { id: 3, label: 'family' },
  { id: 4, label: 'couple' },
  { id: 5, label: 'group' },
  { id: 6, label: 'elderly' },
  { id: 7, label: 'teenager' },
]

const getClientSideQueries = {
  getDayActivitiesGrouped: () =>
    useFetch('api/entertainement/grouping/days')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}
