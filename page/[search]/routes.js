/* components */
import { StackHeader } from '@/shared'
import { Icon } from '@/components'

/* screens */
import { Search } from '@/page/[search]/screens'

export const SearchRoutesConfig = [
  (initial = {
    id: '[tab] stack-search',
    name: 'search',
    icon: 'search',
    component: Search,
    option: {
      headerShown: true,
      headerTitle: 'Search',
      header: () => <StackHeader title='Search' background='container' />,
      tabBarIcon: ({ focused }) => <Icon icon={focused ? require('@/assets/icons/tab/search-focused.png') : require('@/assets/icons/tab/search.png')} size={20} />,
    },
  }),
]
