/* packages */
import { View } from 'react-native'

/* components */
import { Card, Dialog } from '@/components'

/* utilities */
import { Container, FlatList } from '@/shared'
import { Div, Image, Text } from '@/common'

/* styles */
import { useTheme } from 'styled-components'

/*mocks*/
import { menu as food } from '@/mocks/restaurant.data'

export default ({ navigation, route }) => {
  const theme = useTheme

  return (
    <Container safeArea={false}>
      {/* food menu list */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={menu}
          gap='md'
          keyExtractor={(_, index) => index}
          renderedItem={({ item }) => (
            <Card padding={false} image={item.image}>
              <Text size={10} weight='md' t='capitalize'>
                {item.label}
              </Text>
              <Text size={6} line={1.25} color='small' turncate={1}>
                {item.slug}
              </Text>
              <Text size={6} line={1.25} color='small' turncate={1}>
                {item.price}
              </Text>
            </Card>
          )}
        />
      </View>
    </Container>
  )
}

const menu = [
  {
    id: 1,
    label: 'Pepperoni pizza',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98U5YiGT4SF00HVYqRhvH9FwiTxtwVN794Q&usqp=CAU',
    slug: 'Indulge in pizza perfection with our Classic Pepperoni. Melted mozzarella, zesty tomato sauce, and a hearty serving of pepperoni combine for a satisfying slice of comfort and flavor. Bite into tradition today.',
    price: '25.99',
    time: '20min',
    calories: '350cal',
    grams: '100g',
  },
  {
    id: 2,
    label: 'Margherita Pizza',
    image: 'https://bellyfull.net/wp-content/uploads/2016/03/Classic-Margherita-Pizza-blog-2.jpg',
    slug: 'Indulge in the simplicity of our Margherita Pizza. Fresh tomatoes, creamy mozzarella, fragrant basil, and a drizzle of olive oil come together for an authentic Italian experience.',
    price: '14.99',
    time: '18min',
    calories: '400cal',
    grams: '220g',
  },
  {
    id: 3,
    label: 'Vegetarian Pizza',
    image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg',
    slug: 'Embrace the goodness of nature with our Vegetarian Pizza. Colorful bell peppers, onions, tomatoes, mushrooms, and black olives dance atop a cheese-covered canvas.',
    price: '16.99',
    time: '20min',
    calories: '380cal',
    grams: '230g',
  },
  {
    id: 4,
    label: 'Supreme Pizza',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JINOEsnAFkLOw6so5_RinHmNvEa2ToQKRg&usqp=CAU',
    slug: 'Delight in the abundance of flavors with our Supreme Pizza. A hearty combination of pepperoni, sausage, bell peppers, onions, and olives atop a bed of gooey cheese.',
    price: '17.99',
    time: '22min',
    calories: '520cal',
    grams: '240g',
  },
]
