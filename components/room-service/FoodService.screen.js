import AreaView from 'utils/TabAreaView'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useState } from 'react'
import { View } from 'styles/detail.module'
import { View as Gap } from 'react-native'
import { HScrollView } from 'styles/app.module'
import { VerticalListLine } from 'styles/list.module'

export default function FoodService() {
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
      <AreaView></AreaView>
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
