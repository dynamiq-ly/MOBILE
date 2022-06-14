import { View } from 'styles/detail.module'
import FixedWidthButton from '../button/FixedWidthButton'
import { useState } from 'react'
import { array_drinks_alcohol_list } from 'mock/resto'
import { HScrollView } from '~/styles/app.module'
import { VerticalListLine } from '~/styles/list.module'
import { View as Gap } from 'react-native'
import AreaView from '~/utils/TabAreaView'
import { GridLayout } from '~/styles/grid.module'
import SimpleCard from '../cards/SimpleCard'

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
                <VerticalListLine />
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
                <SimpleCard
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

const Wine_category_Array = ['red wine', 'white wine', 'rose wine']
