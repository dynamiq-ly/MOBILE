import AreaView from 'utils/TabAreaView'
import RentingCard from 'components/cards/RentingCard'

import { GridLayout } from 'styles/grid.module'
import SimpleCard from 'components/cards/SimpleCard'

export default function RentingScreen() {
  return (
    <AreaView>
      <GridLayout>
        {array.map((el, index) => (
          <SimpleCard title={el.name} image={el.image} key={index} />
        ))}
      </GridLayout>
    </AreaView>
  )
}

const array = [
  {
    name: 'cars',
    image:
      'https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover/8672/1642077991894/front-left-side-47.jpg?impolicy=resize&imwidth=420',
  },
  {
    name: 'motorcycle',
    image:
      'https://www.honda.co.uk/content/dam/central/motorcycles/Homepage/bridge_1280x1280.jpg/_jcr_content/renditions/c2.jpg',
  },
  {
    name: 'bicycle',
    image:
      'https://media.architecturaldigest.com/photos/5785586af5b3b150126f0767/1:1/w_601,h_601,c_limit/cyclotron-bicycle-of-future-02.png',
  },
]
