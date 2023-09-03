/* packages */
import { View } from 'react-native'

/* components */
import { Card, Dialog } from '@/components'

/* utilities */
import { Container, FlatList } from '@/shared'
import { Div, Image, Text } from '@/common'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { pensions } from '@/mocks/room-service.data'

export default ({ navigation }) => {
  const theme = useTheme()

  return (
    <Container padding={false} safeArea={false}>
      <View style={{ paddingHorizontal: theme.units.md }}>
        <Image source={pensions.image} height='254px' radii='md' />
      </View>

      {/* description */}
      <View style={{ paddingHorizontal: theme.units.md }}>
        <Text size={8} align='justify' color='sub' line={1.25}>
          Elevate Your Stay: Upgrade Your Room for Unforgettable Luxury. Indulge in opulence with exclusive amenities and breathtaking views. Treat yourself to a higher level of sophistication today. Book your upgraded experience now.
        </Text>
      </View>

      {/*  dial */}
      <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.sm }}>
        <Div filled>
          <Text size={8} line={1.25} color='sub'>
            Dial 9 to contact with the reception desk for more options and availability.
          </Text>
        </Div>
        <Dialog icon={require('@/assets/icons/product/monocrome/warning-light.png')}>
          <Text size={7}>Prices may vary throught the season.</Text>
        </Dialog>
      </View>

      {/* pension list */}
      <View style={{ flex: 1 }}>
        <FlatList
          header={
            <View style={{ gap: 2, marginBottom: theme.units.sb }}>
              <Text weight='md' t={'capitalize'} size={11}>
                {pensions.title}
              </Text>
              {pensions.subtitle && (
                <Text color='sub' size={7}>
                  {pensions.subtitle}
                </Text>
              )}
            </View>
          }
          data={pensions.pensions}
          nestedScrollEnabled={true}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          renderedItem={({ item }) => (
            <Card padding={false} image={item.image}>
              <Text size={7} weight='md' t='capitalize'>
                {item.label}
              </Text>
              {item.condition ? (
                <Text size={6} line={1.25} color='small' turncate={1}>
                  {item.condition}
                </Text>
              ) : (
                <Text size={6} line={1.25} color='warning' turncate={1}>
                  Nothing needed
                </Text>
              )}
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                {item.options.slice(0, 3).map((option) => (
                  <View key={option.id} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Image source={option.image} width='14px' height='14px' />
                    <Text color='sub' weight='md' t='capitalize'>
                      {option.label}
                    </Text>
                    <Text color='info' weight='md' t='capitalize'>
                      {option.value}
                    </Text>
                  </View>
                ))}
              </View>
            </Card>
          )}
        />
      </View>
    </Container>
  )
}
