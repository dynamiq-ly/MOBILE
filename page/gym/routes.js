/* components */
import { Icon } from '@/components'
import { StackHeader } from '@/shared'

/* screens */
import { Gym, GymDetails, GymTerms, GymEquipement } from '@/page/gym/screens'

export const GymRoutesConfig = [
  (initial = {
    id: '[stack] stack-gym',
    component: Gym,
    option: {
      headerShown: true,
      headerTitle: 'Gym',
      header: () => <StackHeader title='Gym List' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (details = {
    id: '[stack] stack-gym-detail',
    component: GymDetails,
    option: {
      headerShown: true,
      headerTitle: 'Gym Details',
      header: ({ route }) => <StackHeader title={route.params.name || 'Gym Details'} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (terms = {
    id: '[stack] stack-gym-terms',
    component: GymTerms,
    option: {
      headerShown: true,
      headerTitle: 'Gym Terms',
      header: ({ route }) => <StackHeader title={`${route.params.name} Terms` || 'Gym Terms'} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (equipements = {
    id: '[stack] stack-gym-equipements',
    component: GymEquipement,
    option: {
      headerShown: true,
      headerTitle: 'Gym Equipements',
      header: ({ route }) => (
        <StackHeader title={`${route.params.name} Equipements` || 'Gym Equipements'} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />
      ),
    },
  }),
]
