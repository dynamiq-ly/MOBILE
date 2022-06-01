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
              title={`${element.name.slice(-10)}...`}
              image={element.image}
              location={`${element.location.slice(-35)}...`}
              rating={element.rating}
            />
          )
        })}
      </GridLayout>
    </AreaView>
  )
}
