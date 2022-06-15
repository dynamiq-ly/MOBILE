import { useState } from 'react'
import { View as Gap } from 'react-native'
import { View } from 'styles/detail.module'
import { GridLayout } from 'styles/grid.module'
import { HScrollView } from 'styles/app.module'
import { VerticalListLine } from 'styles/list.module'
import { array_drinks_alcohol_list } from 'mock/resto'

import AreaView from 'utils/TabAreaView'
import SimpleCard from 'components/cards/SimpleCard'
import FixedWidthButton from 'components/button/FixedWidthButton'

const MenuAlcoholDrinksDetails = ({ navigation, route }) => {
  const [isCategory, setCategory] = useState('red wine')
  return (
    <View>
      <Gap>
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Wine_category_Array.map((el, key) => {
            return (
              <Gap
                style={{ alignItems: 'center', flexDirection: 'row' }}
                key={key}
              >
                <FixedWidthButton
                  title={el}
                  func={() => setCategory(el)}
                  active={isCategory !== el ? true : false}
                />
                {Wine_category_Array.length !== key + 1 && <VerticalListLine />}
              </Gap>
            )
          })}
        </HScrollView>
      </Gap>
      <AreaView>
        <GridLayout>
          {array_drinks_alcohol_list
            .filter((el) => el.bottle_category === isCategory)
            .map((el, key) => {
              return (
                <WineCard
                  key={key}
                  title={el.bottle_name}
                  image={el.bottle_image}
                />
              )
            })}
        </GridLayout>
      </AreaView>
    </View>
  )
}

export default MenuAlcoholDrinksDetails

const Wine_category_Array = ['red wine', 'white wine', 'rose wine', 'whisky']
