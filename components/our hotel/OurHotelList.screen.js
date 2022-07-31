import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import FullDetailedCard from 'components/cards/FullDetailedCard'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useState } from 'react'
import { View as Gap } from 'react-native'
import { View } from 'styles/detail.module'
import { HScrollView } from 'styles/app.module'
import { VerticalListItem, VerticalListLine } from 'styles/list.module'

export default function OurHotelList({ navigation, route }) {
  const { _data } = route.params

  const [hotelList, setHotelList] = useState({
    name: 'all',
    data: _data,
  })

  return (
    <View>
      <Gap>
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap style={{ alignItems: 'center', flexDirection: 'row' }}>
            <FixedWidthButton
              title={'all'}
              func={() => setHotelList({ name: 'all', data: _data })}
              active={hotelList.name !== 'all' ? true : false}
            />
            <VerticalListLine />
          </Gap>
          {_data.map((el, key) => {
            return (
              <Gap
                key={key}
                style={{ alignItems: 'center', flexDirection: 'row' }}>
                <FixedWidthButton
                  title={el.city_name}
                  func={() =>
                    setHotelList({
                      name: el.city_name,
                      data: _data.filter(
                        (elem) => elem.city_name === el.city_name
                      ),
                    })
                  }
                  active={hotelList.name !== el.city_name ? true : false}
                />
                {_data.length !== key + 1 && <VerticalListLine />}
              </Gap>
            )
          })}
          <Gap style={{ marginRight: 24 }} />
        </HScrollView>

        <Gap>
          <HScrollView horizontal showsHorizontalScrollIndicator={false}>
            {hotelList.data.map((el) =>
              el.regions.map((elem, key) => {
                return (
                  <Gap
                    key={key}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <VerticalListItem>
                      <Text content={elem.region_name} size={16} up={'cap'} />
                    </VerticalListItem>
                    <VerticalListLine />
                  </Gap>
                )
              })
            )}
          </HScrollView>
        </Gap>
      </Gap>

      <AreaView>
        {hotelList.data.map((el) =>
          el.regions.map((el) =>
            el.hotels.map((el, key) => {
              return (
                <FullDetailedCard
                  key={key}
                  title={el.hotel_name}
                  capacity={`${el.hotel_rating}★`}
                  image={
                    'https://cdn.ostrovok.ru/t/640x400/content/7e/1d/7e1db80963cafe30b2993442a460db9ed9e1fdbd.jpeg'
                  }
                  onPress={() =>
                    navigation.navigate(
                      'menu-tab-stack-our-hotels-list-detail',
                      {
                        _name: el.hotel_name,
                        _data: el,
                      }
                    )
                  }
                />
              )
            })
          )
        )}
      </AreaView>
    </View>
  )
}
