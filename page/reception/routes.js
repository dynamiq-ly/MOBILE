/* components */
import { OptionHeader } from '@/shared'

/* screens */
import { Reception } from '@/page/reception/screens'

export const ReceptionRoutesConfig = [
  (initial = {
    id: '[stack] stack-reception',
    component: Reception,
    option: {
      headerShown: true,
      headerTitle: 'Reception',
      header: () => <OptionHeader menu />,
    },
  }),
]
