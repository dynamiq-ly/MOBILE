import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import DetailedCard from 'components/cards/DetailedCard'

import { Image } from 'styles/image.module'
import { View as NewView } from 'react-native'

import { agency_Array } from 'mock/tour-operators'

export default function TourOperator({ navigation }) {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://i0.wp.com/startupbizglobal.com/wp-content/uploads/tour-operator-business-plan.jpg?resize=1200%2C640&ssl=1',
        }}
      />
      <NewView style={{ marginBottom: 15 }} />
      <Text
        size={18}
        color={'gray'}
        content={
          'Our hotel is contracted with some of the best tour operators in the region that combine two or more travel services  (e.g., transport, accommodation, meals, entertainment, sightseeing), so it can provide our clients with the best experience and more entertainment.'
        }
      />
      <NewView style={{ marginBottom: 15 }} />

      <Text
        size={20}
        weight={600}
        content={'Select your Tour operator Agency'}
      />
      <NewView style={{ marginBottom: 15 }} />
      {agency_Array.map((el, key) => {
        return (
          <DetailedCard
            key={key}
            price={''}
            title={el.agency_name}
            image={el.agency_image}
            description={
              el.agency_details.length > 70
                ? `${el.agency_details.slice(0, 70)}...`
                : el.agency_details
            }
            onPress={() =>
              navigation.navigate('menu-tab-stack-agency-details', {
                _name: el.agency_name,
                _data: el,
              })
            }
          />
        )
      })}
    </AreaView>
  )
}
