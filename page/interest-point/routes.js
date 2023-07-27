/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { InterestPoint } from '@/page/interest-point/screens'

export const PointOfInterestRoutesConfig = [
  (initial = {
    id: '[stack] stack-point-interest',
    component: InterestPoint,
    option: {
      headerShown: true,
      headerTitle: 'Point Interest List',
      header: () => <StackHeader title='Point Interest List' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
