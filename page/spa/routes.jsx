/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Spa } from '@/page/spa/screens'

export const SpaRoutesConfig = [
  (initial = {
    id: '[stack] stack-spa',
    component: Spa,
    option: {
      headerShown: true,
      headerTitle: 'Spa',
      header: () => <StackHeader title='Spa' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
