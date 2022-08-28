import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import DetailedCard from 'components/cards/DetailedCard'

import { Image } from '~/styles/image.module'

const Transportation = ({ navigation }) => {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://e7.pngegg.com/pngimages/831/350/png-clipart-transport-logistics-distribution-cargo-warehouse-shipping-miscellaneous-freight-transport.png',
        }}
        style={{ marginBottom: 14 }}
      />
      <Text
        style={{ marginBottom: 14 }}
        content={
          'We provide you with variety of transportation to ease your traveling and for you to enjoy your destination.'
        }
      />

      {transportation_array.map((el, key) => {
        return (
          <DetailedCard
            key={key}
            price={''}
            title={el.name}
            image={el.image}
            description={`checkout this ${el.name} services we provide to you.`}
            onPress={() =>
              navigation.navigate('', {
                _name: el.name,
                _data: el,
              })
            }
          />
        )
      })}
    </AreaView>
  )
}

export default Transportation

const transportation_array = [
  {
    name: 'Transfer',
    path: '',
    image:
      'https://praguetoursdirect.com/wp-content/uploads/fly-images/1485/prague-transfers-airport-01-1.jpg-1-400x400-CC.jpg',
  },
  {
    name: 'Trains',
    path: '',
    image:
      'https://www.constructionworld.in/assets/uploads/49b105e423bca6244bd5ef45a0a7ff56.jpg',
  },
  {
    name: 'Bus',
    path: '',
    image:
      'https://pbs.twimg.com/profile_images/1218497855633096717/PcwInx2p_400x400.jpg',
  },
  {
    name: 'Book a cab',
    path: '',
    image:
      'https://www.absolute-taxi.com/images/easyblog_articles/14/b2ap3_thumbnail_Taxi_400.jpg',
  },
]
