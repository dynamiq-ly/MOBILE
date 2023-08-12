/* packages */
import moment from 'moment'
import { View } from 'react-native'

/* modules */
import { Text } from '@/common'
import { FlatList } from '@/shared'

/* components */
import { OptionCard } from '@/components'

/* styles */

/* mocks */
import { data } from '@/mocks/gym.data'

export default ({ navigation }) => {
  return (
    <FlatList
      data={data.data}
      gap='md'
      keyExtractor={(item) => item.id}
      renderedItem={({ item }) => (
        <OptionCard
          key={item.id}
          image={item.image}
          closed={!isBetweenOpenAndClose(item.timing.open, item.timing.close)}
          reservation={item.reservation}
          onPress={() =>
            navigation.navigate('[stack] stack-gym-detail', {
              id: item.id,
              data: item,
              name: item.name,
            })
          }>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text size={8} weight='md' t='capitalize' turncate={1}>
              {item.name}
            </Text>
            <Text t='uppercase' color='sub' weight='md'>
              {isBetweenOpenAndClose(item.timing.open, item.timing.close) ? `Closes at ${item.timing.close}` : `Opens at ${item.timing.open}`}
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text t='capitalize' color='sub' weight='md' turncate={1}>
              {item.location}
            </Text>
          </View>
        </OptionCard>
      )}
      nestedScrollEnabled={true}
      scrollEnabled={false}
    />
  )
}

const isBetweenOpenAndClose = (openTime, closeTime) => {
  if (moment(closeTime, 'HH:mm').isBefore(moment(openTime, 'HH:mm')))
    return moment().isBetween(moment(openTime, 'HH:mm'), moment('23:59', 'HH:mm'), 'minutes', '[]') || moment().isBetween(moment('00:00', 'HH:mm'), moment(closeTime, 'HH:mm'), 'minutes', '[]')
  return moment().isBetween(moment(openTime, 'HH:mm'), moment(closeTime, 'HH:mm'), 'minutes', '[]')
}
