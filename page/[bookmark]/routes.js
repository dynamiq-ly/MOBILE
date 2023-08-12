/* components */
import { StackHeader } from '@/shared'
import { Icon } from '@/components'

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
      tabBarIcon: ({ focused }) => <Icon icon={focused ? require('@/assets/icons/tab/bookmark-focused.png') : require('@/assets/icons/tab/bookmark.png')} size={20} />,
    },
  }),
]
