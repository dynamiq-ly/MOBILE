import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import NotFound from 'components/notFound/NotFound'

import { useCallback, useState } from 'react'
import { __query } from 'hooks/useApi'
import { useQuery } from 'react-query'
import { CartView } from 'styles/cart.module'
import { fontPixel } from 'utils/normalization'
import { GridLayout } from 'styles/grid.module'
import { RefreshControl, LogBox } from 'react-native'
import { StyledReminderCard } from 'styles/cards.module'

export default function AlarmScreen() {
  const { data, refetch, isError } = useQuery('@reminders', fetchReminder, {
    initialData: [],
  })

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <AreaView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      {data.length === 0 ? (
        <NotFound killProcess={isError} />
      ) : (
        data.map((el) => (
          <StyledReminderCard
            key={el.id}
            color={priority_object[el.reminder_priority]}>
            <Text
              size={18}
              weight={600}
              up={'cap'}
              content={el.reminder_title}
            />
            <Text
              size={16}
              up={'cap'}
              weight={500}
              color={'dominant'}
              content={el.reminder_date}
            />
          </StyledReminderCard>
        ))
      )}
    </AreaView>
  )
}

let fetchReminder = function () {
  return __query
    .get('/api/reception/reminder')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

const priority_object = {
  minor: '#0ea5e9',
  normal: '#10b981',
  urgent: '#ef4444',
}

/**
 * @description icon for favorit in point of interest
 * @returns {React.Component}
 */
export const AddAlarmScreenOptions = ({ func }) => {
  return (
    <CartView onPress={func}>
      <Icon name='ri-add-circle-line' size={fontPixel(24)} />
    </CartView>
  )
}

LogBox.ignoreLogs(['Setting a timer'])
