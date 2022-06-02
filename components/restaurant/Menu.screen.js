import AreaView from 'utils/TabAreaView'
import { GridLayout } from 'styles/grid.module'
import { array_menu_restaurant } from 'mock/resto'
import SimpleCard from 'components/cards/SimpleCard'

export default function MenuRestaurantScreen({ navigation }) {
  return (
    <AreaView>
      <GridLayout>
        {array_menu_restaurant.map((el, key) => {
          return (
            <SimpleCard
              key={key}
              title={el.name}
              image={el.image}
              onPress={() => navigation.navigate('')}
            />
          )
        })}
      </GridLayout>
    </AreaView>
  )
}
