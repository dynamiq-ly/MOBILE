import AreaView from 'utils/TabAreaView'
import { GridLayout } from 'styles/grid.module'
import { array_drinks_restaurant } from 'mock/resto'
import SimpleCard from 'components/cards/SimpleCard'
export default function MenuDrinksScreen({ navigation }) {
  return (
    <AreaView>
      <GridLayout>
        {array_drinks_restaurant.map((el, key) => {
          return <SimpleCard key={key} title={el.name} image={el.image} />
        })}
      </GridLayout>
    </AreaView>
  )
}
