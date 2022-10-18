import Text from 'components/text/Text'
import FullDetailedCard from 'components/cards/FullDetailedCard'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useState } from 'react'
import { View } from 'styles/detail.module'
import { Hotels_list_array } from 'mock/hotels'
import { HScrollView } from 'styles/app.module'
import { View as Gap, FlatList } from 'react-native'
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
                      <Text
                        content={elem.region_name}
                        size={16}
                        up={'cap'}
                        color={'gray'}
                      />
                    </VerticalListItem>

                    <Gap
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 50,
                        marginHorizontal: 15,
                        backgroundColor: 'black',
                      }}
                    />
                  </Gap>
                )
              })
            )}
          </HScrollView>
        </Gap>
      </Gap>

      <FlatList
        data={Hotels_list_array}
        style={{ paddingHorizontal: 14 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FullDetailedCard
            key={item.id}
            title={item.hotel_name}
            capacity={`${item.hotel_rating}★`}
            image={
              'https://cdn.ostrovok.ru/t/640x400/content/7e/1d/7e1db80963cafe30b2993442a460db9ed9e1fdbd.jpeg'
            }
            onPress={() =>
              navigation.navigate('menu-tab-stack-our-hotels-list-detail', {
                _name: item.hotel_name,
                _data: item,
              })
            }
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 1,
            }}
          />
        )}
      />
    </View>
  )
}
