/* styles */
import { MaterialIcons } from '@expo/vector-icons'

/* components */
import { StackHeader } from '@/shared'

/* screens */
import { HotelPolicies } from '@/page/policies/screens'
import { Icon } from '@/components'

/* hotel policies */
const HotelPoliciesRoutesConfig = [
  (initial = {
    id: '[stack] stack-safety',
    component: HotelPolicies,
    option: {
      headerShown: true,
      headerTitle: 'Hotel Policies',
      header: () => <StackHeader title='Hotel Policies' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/menu-dark.png')} size={18} />} />,
    },
  }),
]

/* application policies */
const ApplicationPoliciesRoutesConfig = []

export const PoliciesRoutesConfig = [...HotelPoliciesRoutesConfig, ...ApplicationPoliciesRoutesConfig]
