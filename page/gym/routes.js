/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Gym } from '@/page/gym/screens'

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
]
