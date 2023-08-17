/* components */
import { Icon } from '@/components'
import { OptionHeader, StackHeader } from '@/shared'

/* screens */
import { InterestPoint, InterestPointDetails } from '@/page/interest-point/screens'

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
  (details = {
    id: '[stack] stack-point-interest-details',
    component: InterestPointDetails,
    option: {
      headerShown: true,
      headerTitle: 'Point Interest Details',
      header: () => <OptionHeader />,
    },
  }),
]
