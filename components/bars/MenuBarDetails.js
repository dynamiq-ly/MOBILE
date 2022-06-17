import { useState } from 'react'
import { View as Gap } from 'react-native'
import { View } from 'styles/detail.module'
import { GridLayout } from 'styles/grid.module'
import { HScrollView } from 'styles/app.module'
import { VerticalListLine } from 'styles/list.module'
import { array_drinks_alcohol_list } from 'mock/resto'

import AreaView from 'utils/TabAreaView'
import WineCard from 'components/cards/WineCard'
import FixedWidthButton from 'components/button/FixedWidthButton'
const MenuBarDetails = ({ navigation }) => {
  const [isCategory, setCategory] = useState('whiskies')
  return (
    <View>
      <Gap style={{ height: 48 }}>
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
            .filter((elem) => elem.bottle_category === isCategory)
            .map((el) => {
              return (
                <WineCard
                  key={el.id}
                  title={el.bottle_name}
                  image={el.bottle_image}
                  price={`${el.bottle_price_bottle}$`}
                  origin={`${el.bottle_region} ${el.bottle_date_made}`}
                  onPress={() =>
                    navigation.navigate('menu-tab-bar-menu-drink-detail', {
                      _name: el.bottle_name,
                      _data: el,
                    })
                  }
                />
              )
            })}
        </GridLayout>
      </AreaView>
    </View>
  )
}

export default MenuBarDetails
const Wine_category_Array = ['whisky', 'vodka', 'tequila', 'rum']
