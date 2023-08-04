/* packages */
import { useState } from 'react'
import { View } from 'react-native'
import Animated from 'react-native-reanimated'

/* modules */
import { Container, FlatList } from '@/shared'

/* components */
import { Div, Image, Text } from '@/common'
import { ButtonGroup, Card } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { data } from '@/mocks/rooms.data'

export default ({ navigation }) => {
  const theme = useTheme()

  const [state, setState] = useState(1)
  return (
    <Container stickyHeaderIndices={[0]} padding={false}>
      <Image source={data.banner[0].image} height='254px' />

      {/* rooms categories */}
      <View style={{ paddingHorizontal: theme.units.md }}>
        <ButtonGroup selectedIndex={state} setSelectedIndex={setState} scrollabe={data.categories.length > 3} items={data.categories} />
      </View>

      {/* description */}
      <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.sb }}>
        <Text size={8} line={1.25} color='sub'>
          {data.description}
        </Text>
        <Div filled>
          <Text size={8} line={1.25} color='sub'>
            Dial 9 to contact with the reception desk for more options and availability.
          </Text>
        </Div>
      </View>

      {/* rooms */}
      <View>
        <FlatList
          header={
            <View style={{ gap: 2, marginBottom: theme.units.sb }}>
              <Text weight='md' t={'capitalize'} size={11}>
                Find your room
              </Text>
              <Text color='sub' size={7}>
                Find the best room that will match your style.
              </Text>
            </View>
          }
          data={data.rooms.filter((el) => el.type === data.categories.find((el) => el.id === state).label)}
          gap='sm'
          keyExtractor={(item) => item.id}
          renderedItem={({ item }) => (
            <Card
              sharedElementId={'room-details'}
              image={item.images[0].image}
              padding={false}
              onPress={() =>
                navigation.navigate('[stack] stack-rooms-details', {
                  id: item.id,
                  data: item,
                })
              }>
              <Text size={7} weight='md'>
                {item.slug}
              </Text>
              <Text size={6} line={1.25} color='sub' turncate={2}>
                {item.roomFaetures
                  .filter((el) => el.featured)
                  .map((el) => el.label)
                  .join(' | ')}
              </Text>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text size={6} color='small' weight='md' t={'capitalize'} turncate={2}>
                  starting from
                </Text>
                <Text size={6} color='info' weight='md' turncate={2}>
                  {' ' + item.price.toString()}
                </Text>
                <Text size={6} color='small' weight='md' turncate={2}>
                  {' / night'}
                </Text>
              </View>
            </Card>
          )}
          nestedScrollEnabled={true}
          scrollEnabled={false}
        />
      </View>
    </Container>
  )
}
