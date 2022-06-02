import AreaView from 'utils/TabAreaView'
import { GridLayout } from 'styles/grid.module'
import SquareCard from 'components/cards/SquareCard'
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
