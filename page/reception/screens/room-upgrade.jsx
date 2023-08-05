import { Button, Image, Text } from '@/common'
import { Dialog } from '@/components'
import { Container } from '@/shared'
import { Dimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'

const { height: HEIGHT_SCALE } = Dimensions.get('window')

export default ({ navigation }) => {
  const theme = useTheme()
  const { bottom } = useSafeAreaInsets()

  const navigate = function () {
    navigation.navigate('[stack] stack-rooms', {
      screens: { previous: 'room-upgrade' },
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <Container safeArea={false}>
        <Image height='254px' radii='md' />

        <Dialog icon={require('@/assets/icons/product/monocrome/warning-light.png')}>
          <Text size={7}>Prices may vary throught the season.</Text>
        </Dialog>

        <Text size={8} align='justify' color='sub' line={1.25}>
          Elevate Your Stay: Upgrade Your Room for Unforgettable Luxury. Indulge in opulence with exclusive amenities and breathtaking views. Treat yourself to a higher level of sophistication today.
          Book your upgraded experience now.
        </Text>
      </Container>

      <Button onPress={navigate} style={{ marginBottom: theme.units.lg, marginTop: theme.units.sm, marginHorizontal: theme.units.md }}>
        see your options
      </Button>
    </View>
  )
}
