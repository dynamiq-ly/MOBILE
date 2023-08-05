/* packages */
import { View } from 'react-native'

/* components */
import { Dialog } from '@/components'

/* utilities */
import { Container } from '@/shared'
import { Button, Image, Text } from '@/common'

/* styles */
import { useTheme } from 'styled-components'

export default ({ navigation }) => {
  const theme = useTheme()

  const navigate = function () {
    navigation.navigate('[stack] stack-rooms', {
      screens: { previous: 'room-upgrade' },
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <Container safeArea={false}>
        <Image
          source={
            'https://img.freepik.com/free-photo/man-servant-making-bed_23-2149530831.jpg?w=1380&t=st=1691233213~exp=1691233813~hmac=16da0b14a6935fa74f981d138b1e989aae8acd6a056087ff00d3944eb0e240d9'
          }
          height='254px'
          radii='md'
        />

        {/* price warning */}
        <Dialog icon={require('@/assets/icons/product/monocrome/warning-light.png')}>
          <Text size={7}>Prices may vary throught the season.</Text>
        </Dialog>

        {/* description */}
        <Text size={8} align='justify' color='sub' line={1.25}>
          Elevate Your Stay: Upgrade Your Room for Unforgettable Luxury. Indulge in opulence with exclusive amenities and breathtaking views. Treat yourself to a higher level of sophistication today.
          Book your upgraded experience now.
        </Text>
      </Container>

      {/* button redirect */}
      <Button onPress={navigate} style={{ marginBottom: theme.units.lg, marginTop: theme.units.sm, marginHorizontal: theme.units.md }}>
        see your options
      </Button>
    </View>
  )
}
