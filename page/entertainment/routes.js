/* components */
import { Icon } from '@/components'
import { OptionHeader, StackHeader } from '@/shared'

/* screens */
import { Entertainment, DayActivities, NightActivities, SportProgram, EventProgram, DayActivitiesDetails, NightActivitiesDetails } from '@/page/entertainment/screens'

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
  (dayActivity = {
    id: '[stack] stack-entertainement-day-activities',
    component: DayActivities,
    option: {
      headerShown: true,
      headerTitle: 'Day Activities',
      header: () => <StackHeader title='Day Activities' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (dayActivityDetails = {
    id: '[stack] stack-entertainement-day-activities-details',
    component: DayActivitiesDetails,
    option: {
      headerShown: true,
      headerTitle: 'Day Activities Details',
      header: ({ route }) => <StackHeader title={route.params.name || 'Day Activities Details'} iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (nightActivity = {
    id: '[stack] stack-entertainement-night-activities',
    component: NightActivities,
    option: {
      headerShown: true,
      headerTitle: 'Night Activities',
      header: () => <StackHeader title='Night Activities' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (nightActivityDetails = {
    id: '[stack] stack-entertainement-night-activities-details',
    component: NightActivitiesDetails,
    option: {
      headerShown: true,
      headerTitle: 'Night Activities Details',
      header: ({ route }) => <OptionHeader />,
    },
  }),
  (sportProgram = {
    id: '[stack] stack-entertainement-sport-program',
    component: SportProgram,
    option: {
      headerShown: true,
      headerTitle: 'Sport Program',
      header: () => <StackHeader title='Sport Program' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
  (eventProgram = {
    id: '[stack] stack-entertainement-event-program',
    component: EventProgram,
    option: {
      headerShown: true,
      headerTitle: 'Event Program',
      header: () => <StackHeader title='Event Program' iconLeft={<Icon icon={require('@/assets/icons/product/monocrome/arrow-back-dark.png')} size={18} />} />,
    },
  }),
]
