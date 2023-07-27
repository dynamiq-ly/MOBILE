/* components */
import { StackHeader } from '@/shared'

/* screens */
import { Bookmark } from '@/page/[bookmark]/screens'

export const BookmarkRoutesConfig = [
  (initial = {
    id: '[tab] stack-bookmark',
    name: 'bookmark',
    icon: 'bookmark',
    component: Bookmark,
    option: {
      headerShown: true,
      headerTitle: 'Bookmark',
      header: () => <StackHeader title='Bookmark' background='container' />,
    },
  }),
]
