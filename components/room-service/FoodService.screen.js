import AreaView from 'utils/TabAreaView'
import DetailedCard from 'components/cards/DetailedCard'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useState } from 'react'
import { View as Gap } from 'react-native'
import { View } from 'styles/detail.module'
import { HScrollView } from 'styles/app.module'
import { GridLayout } from 'styles/grid.module'
import { VerticalListLine } from 'styles/list.module'

import { food_servie_array } from 'mock/food_service'

export default function FoodService({ navigation }) {
  const [isCategory, setCategory] = useState('breakfast')

  return (
    <View>
      <Gap style={{ height: 48 }}>
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          {food_category_Array.map((el, key) => {
            return (
              <Gap
                style={{ alignItems: 'center', flexDirection: 'row' }}
                key={key}>
                <FixedWidthButton
                  title={el}
                  func={() => setCategory(el)}
                  active={isCategory !== el ? true : false}
                />
                {food_category_Array.length !== key + 1 && <VerticalListLine />}
              </Gap>
            )
          })}
        </HScrollView>
      </Gap>
      <AreaView>
        {food_servie_array
          .filter((el) => el.food_type === isCategory)
          .map((el, key) => {
            return (
              <DetailedCard
                key={key}
                title={el.food_name}
                price={el.food_price}
                image={el.food_image}
                description={
                  el.food_summary.length > 70
                    ? `${el.food_summary.slice(0, 70)}...`
                    : el.food_summary
                }
                onPress={() =>
                  navigation.navigate(
                    'menu-tab-stack-room-service-food-service-detail',
                    { _name: el.food_name, _data: el }
                  )
                }
              />
            )
          })}
      </AreaView>
    </View>
  )
}

const food_category_Array = [
  'breakfast',
  'lunch',
  'dinner',
  'fast food',
  'snacks',
]
