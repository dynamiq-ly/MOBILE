import { FlatList, OptionHeader } from '@/shared'
import SimpleCard from '@/components/cards/SimpleCard'
import { Text } from '@/common'

export default ({ navigation }) => {
  return (
    <FlatList
      data={data}
      column={3}
      keyExtractor={(item) => item.id}
      renderedItem={({ item }) => <SimpleCard key={item.id} title={item.title} image={item.image} onPress={() => navigation.navigate(item.path)} />}
    />
  )
}

const data = [
  {
    id: 1,
    title: 'Restaurant',
    path: '[stack] stack-restaurant',
    image: 'https://th.bing.com/th/id/R.d86bced8d52374ac472cc345c56d964c?rik=pJBNkw%2bsy6%2fgDg&pid=ImgRaw&r=0',
  },
  {
    id: 2,
    title: 'Bars',
    path: '[stack] stack-bar',
    image: 'https://th.bing.com/th/id/R.55b3a84d2b38401c428c4e8fca4c946d?rik=floTVePfqri4gA&pid=ImgRaw&r=0',
  },
  {
    id: 3,
    title: 'entertainment',
    path: '[stack] stack-entertainment',
    image: 'https://th.bing.com/th/id/R.c213ebe094b4a6034b094bcd188e3c34?rik=%2bvWiroUbXPdaiQ&pid=ImgRaw&r=0',
  },
]
