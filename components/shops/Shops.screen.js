import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import SimpleCard from 'components/cards/SimpleCard'

import { View } from 'react-native'
import { GridLayout } from 'styles/grid.module'

export default function ShopScreen() {
  return (
    <AreaView>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <Icon name={'ri-time-line'} style={{ marginRight: 10 }} />
        <Text content={'open 24/7'} up={'up'} weight={600} />
      </View>
      <Text
        color={'gray'}
        content={
          'We offer a shopping hall where you can buy gifts or shop for new things you may come to like.'
        }
      />
      <GridLayout style={{ marginVertical: 24 }}>
        {shop_array.map((el, index) => (
          <SimpleCard title={el.name} image={el.image} key={index} />
        ))}
      </GridLayout>
    </AreaView>
  )
}

const shop_array = [
  {
    name: 'gift shop',
    image:
      'https://www.dartmouth-hitchcock.org/sites/default/files/styles/max_width_648/public/2021-03/gift-shop.jpg?itok=9MNxehtZ',
  },
  {
    name: 'bakery shop',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/17/54/89/b5/photo1jpg.jpg',
  },
  {
    name: 'flower shop',
    image:
      'https://i.pinimg.com/736x/29/b7/27/29b727735b2a232863c918930d0fd6cf--flower-shops-hoa.jpg',
  },
  {
    name: 'clothes shop',
    image:
      'https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=612x612&w=0&h=0bpyh7rdYCy3Lod5pfK9oS72zFPNJSBv7T7l64xUE90=',
  },
  {
    name: 'chocolat shop',
    image:
      'https://i.pinimg.com/originals/8c/0b/2a/8c0b2a63e6abf786930a375bdb3f2f9e.jpg',
  },
]
