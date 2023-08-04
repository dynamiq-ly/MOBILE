/* components */
import { OptionHeader } from '@/shared'

/* screens */
import { Rooms, RoomDetails } from '@/page/rooms/screens'

export const RoomsRoutesConfig = [
  (initial = {
    id: '[stack] stack-rooms',
    component: Rooms,
    option: {
      headerShown: true,
      headerTitle: 'Rooms List',
      header: () => <OptionHeader />,
    },
  }),
  (details = {
    id: '[stack] stack-rooms-details',
    component: RoomDetails,
    option: {
      headerShown: true,
      headerTitle: 'Rooms Details',
      header: () => <OptionHeader />,
    },
  }),
]
