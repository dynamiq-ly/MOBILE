/* components */
import { OptionHeader } from '@/shared'

/* screens */
import { Excursions } from '@/page/excusrions/screens'

export const ExcursionsRoutesConfig = [
  (initial = {
    id: '[stack] stack-excursions-activites',
    component: Excursions,
    option: {
      headerShown: true,
      headerTitle: 'Excursions List',
      header: () => <OptionHeader menu />,
    },
  }),
]
