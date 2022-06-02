import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import { fontPixel } from 'utils/normalization'
import SquareCard from 'components/cards/SquareCard'

import { CartView } from 'styles/cart.module'
import { GridLayout } from 'styles/grid.module'
import { Interesting_Point } from 'mock/interest_list'

export default function PointInterestScreen() {
  return (
    <AreaView>
      <GridLayout>
        {Interesting_Point.map((element) => {
          return (
            <SquareCard
              key={element.id}
              title={element.name}
              image={element.image}
              rating={element.rating}
            />
          )
        })}
      </GridLayout>
    </AreaView>
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
