import AreaView from 'utils/TabAreaView'

import { GridLayout } from 'styles/grid.module'
import SimpleCard from 'components/cards/SimpleCard'
import { Linking } from 'react-native'

export default function RentingScreen() {
  return (
    <AreaView>
      <GridLayout>
        {array.map((el, index) => (
          <SimpleCard
            title={el.name}
            image={el.image}
            key={index}
            onPress={() => Linking.openURL(el.link)}
          />
        ))}
      </GridLayout>
    </AreaView>
  )
}

const array = [
  {
    name: 'cars',
    link: 'https://www.europcar.es/es-es?gclid=CjwKCAiAqaWdBhAvEiwAGAQltktCxQMGVzGcYuJjjjdiSYAw4R2aY24sWhQd8IPo9EL_Nmlqq2TPARoCbKMQAvD_BwE&gclsrc=aw.ds',
    image:
      'https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover/8672/1642077991894/front-left-side-47.jpg?impolicy=resize&imwidth=420',
  },
  {
    name: 'motorcycle',
    link: 'https://www.rentalmotorbike.com/motorbike-rental-mallorca',
    image:
      'https://www.honda.co.uk/content/dam/central/motorcycles/Homepage/bridge_1280x1280.jpg/_jcr_content/renditions/c2.jpg',
  },
  {
    name: 'bicycle',
    link: 'https://www.mallorcabikehire.com/',
    image:
      'https://media.architecturaldigest.com/photos/5785586af5b3b150126f0767/1:1/w_601,h_601,c_limit/cyclotron-bicycle-of-future-02.png',
  },
]
