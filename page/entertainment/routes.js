/* components */
import { OptionHeader } from '@/shared'

/* screens */
import { Entertainment } from '@/page/entertainment/screens'

export const EntertainmentRoutesConfig = [
  (initial = {
    id: '[stack] stack-entertainment',
    component: Entertainment,
    option: {
      headerShown: true,
      headerTitle: 'Entertainment List',
      header: () => <OptionHeader />,
    },
  }),
]
