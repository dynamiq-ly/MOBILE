/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Gym, GymDetails } from '@/page/gym/screens'

export const GymRoutesConfig = [
  (initial = {
    id: '[stack] stack-gym',
    component: Gym,
    option: {
      headerShown: true,
      headerTitle: 'Gym',
      header: () => <StackHeader title='Gym List' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (details = {
    id: '[stack] stack-gym-detail',
    component: GymDetails,
    option: {
      headerShown: true,
      headerTitle: 'Gym Details',
      header: ({ route }) => <StackHeader title={route.params.name || 'Gym Details'} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
