import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import FullImageCard from 'components/cards/FullImageCard'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useState } from 'react'
import { our_hotels } from 'mock/hotels'
import { GridLayout } from 'styles/grid.module'
import { View as Gap, ScrollView } from 'react-native'
import { VerticalListLine } from 'styles/list.module'

export default function OurHotelScreen({ navigation }) {
  const [hotels, setHotels] = useState({
    category: 'all',
    data: our_hotels,
  })

  return (
    <AreaView>
      <Text content={'Discover'} size={'21'} weight={600} up={'cap'} />
      <Text
        color={'gray'}
        content={
          'Our group offers a wide variety of hotels across the world, find your ideal location.'
        }
      />

      <ScrollView
        style={{ marginVertical: 14 }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <Gap style={{ alignItems: 'center', flexDirection: 'row' }}>
          <FixedWidthButton
            title={'all'}
            func={() => setHotels({ category: 'all', data: our_hotels })}
            active={hotels.category !== 'all' ? true : false}
          />
          <VerticalListLine />
        </Gap>
        {our_hotels.map((el, key) => {
          return (
            <Gap
              style={{ alignItems: 'center', flexDirection: 'row' }}
              key={key}>
              <FixedWidthButton
                title={el.continent}
                func={() =>
                  setHotels({
                    category: el.continent,
                    data: our_hotels.filter(
                      (elem) => elem.continent === el.continent
                    ),
                  })
                }
                active={hotels.category !== el.continent ? true : false}
              />
              {our_hotels.length !== key + 1 && <VerticalListLine />}
            </Gap>
          )
        })}
        <Gap style={{ marginRight: 5 }} />
      </ScrollView>

      <GridLayout>
        {hotels.data.map((el) =>
          el.countries.map((el, key) => {
            return (
              <FullImageCard
                key={key}
                title={el.country_name}
                image={el.coutnry_thumbnail}
                position={key % 2 === 1 && 'end'}
                onPress={() =>
                  navigation.navigate('menu-tab-stack-our-hotels-list', {
                    data: [...el.cities],
                  })
                }
              />
            )
          })
        )}
      </GridLayout>
    </AreaView>
  )
}
