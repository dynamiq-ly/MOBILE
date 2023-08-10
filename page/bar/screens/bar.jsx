/* packages */
import moment from 'moment'
import { View } from 'react-native'

/* modules */
import { Text } from '@/common'
import { Container, FlatList } from '@/shared'

/* components */
import { OptionCard } from '@/components'

/* styles */

/* mocks */
import { data } from '@/mocks/bar.data'

export default ({ navigation }) => {
  return (
    <Container padding={false} safeArea={false}>
      <FlatList
        data={data.bars}
        gap='md'
        keyExtractor={(item) => item.id}
        renderedItem={({ item }) => (
          <OptionCard
            key={item.id}
            image={item.images[0].image}
            closed={!isBetweenOpenAndClose(item.timing.open, item.timing.close)}
            adults={item.adults_only}
            reservation={item.reservation_required}
            onPress={() =>
              navigation.navigate('[stack] stack-bar-detail', {
                id: item.id,
                data: item,
              })
            }>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text size={8} weight='md' t='capitalize' turncate={1}>
                {item.title}
              </Text>
              <Text t='uppercase' color='sub' weight='md'>
                {isBetweenOpenAndClose(item.timing.open, item.timing.close) ? `Closes at ${item.timing.close}` : `Opens at ${item.timing.open}`}
              </Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text t='capitalize' color='sub' weight='md'>
                {item.type}
              </Text>
            </View>
          </OptionCard>
        )}
        nestedScrollEnabled={true}
        scrollEnabled={false}
      />
    </Container>
  )
}

const isBetweenOpenAndClose = (openTime, closeTime) => {
  if (moment(closeTime, 'HH:mm').isBefore(moment(openTime, 'HH:mm')))
    return moment().isBetween(moment(openTime, 'HH:mm'), moment('23:59', 'HH:mm'), 'minutes', '[]') || moment().isBetween(moment('00:00', 'HH:mm'), moment(closeTime, 'HH:mm'), 'minutes', '[]')
  return moment().isBetween(moment(openTime, 'HH:mm'), moment(closeTime, 'HH:mm'), 'minutes', '[]')
}