/* package */

/* components */
import { Dialog } from '@/components'

/* utilities */
import { Text } from '@/common'
import { Container } from '@/shared'

/* mocks */
import { data } from '@/mocks/policies.data'

export default ({ navigation }) => {
  return (
    <Container safeArea={false} gap='sm'>
      {data.HotelPoliciesRoutesConfig.map((item, index) => (
        <Dialog
          key={index}
          small={false}
          background='tag'
          padding={false}
          icon={require('@/assets/icons/product/monocrome/sensor-alert-dark.png')}
          onPress={() => navigation.navigate('[stack] stack-safety-details', { name: item.title, file: item.filePath })}>
          <Text size={9} t={'capitalize'} weight='md'>
            {item.title}
          </Text>
          <Text size={7} color='sub'>
            {item.subtitle}
          </Text>
        </Dialog>
      ))}
    </Container>
  )
}
