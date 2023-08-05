/* components */
import { Icon } from '@/components'
import { OptionHeader, StackHeader } from '@/shared'

/* screens */
import { PensionUpgrade, RoomService } from '@/page/room-service/screens'

export const RoomsServiceRoutesConfig = [
  (initial = {
    id: '[stack] stack-room-service',
    component: RoomService,
    option: {
      headerShown: true,
      headerTitle: 'Room Service',
      header: () => <OptionHeader />,
    },
  }),
  (pensionUpgrade = {
    id: '[stack] stack-room-service-pension-upgrade',
    component: PensionUpgrade,
    option: {
      headerShown: true,
      headerTitle: 'Pension Upgrade',
      header: () => <StackHeader title='Pension Upgrade' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
