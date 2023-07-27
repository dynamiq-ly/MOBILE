/* components */
import { StackHeader } from '@/shared'

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
    },
  }),
]
