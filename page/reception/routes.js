/* components */
import { Icon } from '@/components'
import { OptionHeader, StackHeader } from '@/shared'

/* screens */
import { Reception, RoomUpgrade } from '@/page/reception/screens'

export const ReceptionRoutesConfig = [
  (initial = {
    id: '[stack] stack-reception',
    component: Reception,
    option: {
      headerShown: true,
      headerTitle: 'Reception',
      header: () => <OptionHeader />,
    },
  }),
  (roomUpgrade = {
    id: '[stack] stack-reception-room-upgrade',
    component: RoomUpgrade,
    option: {
      headerShown: true,
      headerTitle: 'Room Upgrade',
      header: () => <StackHeader title='Room Upgrade' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
