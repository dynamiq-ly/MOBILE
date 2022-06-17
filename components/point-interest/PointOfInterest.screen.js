import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import SquareCard from 'components/cards/SquareCard'
import FixedWidthButton from 'components/button/FixedWidthButton'

import { useState } from 'react'
import { View } from 'styles/detail.module'
import { View as Gap } from 'react-native'
import { CartView } from 'styles/cart.module'
import { GridLayout } from 'styles/grid.module'
import { HScrollView } from 'styles/app.module'
import { fontPixel } from 'utils/normalization'
import { VerticalListLine } from 'styles/list.module'
import { Interesting_Point } from 'mock/interest_list'

export default function PointInterestScreen() {
  const [isCategory, setCategory] = useState('monuments')
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
        <GridLayout>
          {Interesting_Point.filter((el) =>
            isCategory === 'all' ? el.type !== 'all' : el.type === isCategory
          ).map((element) => {
            return (
              <SquareCard
                key={element.id}
                title={element.name}
                image={element.image}
                rating={element.rating}
                location={element.location}
              />
            )
          })}
        </GridLayout>
      </AreaView>
    </View>
  )
}

/**
 * @description icon for favorit in point of interest
 * @returns {React.Component}
 */
export const PointInterestScreenOptions = ({ func }) => {
  return (
    <CartView onPress={func}>
      <Icon name='ri-heart-line' size={fontPixel(24)} />
    </CartView>
  )
}

const food_category_Array = [
  'all',
  'monuments',
  'beaches',
  'churches',
  'factories',
]
