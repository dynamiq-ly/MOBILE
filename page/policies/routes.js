/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { HotelPolicies, HotelPoliciesDetail } from '@/page/policies/screens'

/* hotel policies */
const HotelPoliciesRoutesConfig = [
  (initial = {
    id: '[stack] stack-safety',
    component: HotelPolicies,
    option: {
      headerShown: true,
      headerTitle: 'Hotel Policies',
      header: () => <StackHeader title='Hotel Policies' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (details = {
    id: '[stack] stack-safety-details',
    component: HotelPoliciesDetail,
    option: {
      headerShown: true,
      headerTitle: 'Hotel Policies Details',
      header: ({ route }) => <StackHeader title={route.params.name || 'Hotel Policies Details'} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]

/* application policies */
const ApplicationPoliciesRoutesConfig = []

export const PoliciesRoutesConfig = [...HotelPoliciesRoutesConfig, ...ApplicationPoliciesRoutesConfig]
