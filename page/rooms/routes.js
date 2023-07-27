/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Rooms } from '@/page/rooms/screens'

export const RoomsRoutesConfig = [
  (initial = {
    id: '[stack] stack-rooms',
    component: Rooms,
    option: {
      headerShown: true,
      headerTitle: 'Rooms List',
      header: () => <StackHeader title='Rooms List' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
