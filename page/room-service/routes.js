/* components */
import { OptionHeader } from '@/shared'

/* screens */
import { RoomService } from '@/page/room-service/screens'

export const RoomsServiceRoutesConfig = [
  (initial = {
    id: '[stack] stack-room-service',
    component: RoomService,
    option: {
      headerShown: true,
      headerTitle: 'Room Service',
      header: () => <OptionHeader menu />,
    },
  }),
]
