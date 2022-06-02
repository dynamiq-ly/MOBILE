import AreaView from 'utils/TabAreaView'
import SimpleCard from '../cards/SimpleCard'
import { GridLayout } from 'styles/grid.module'
import { array_menu_restaurant } from 'mock/resto'

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
              onPress={() =>
                navigation.navigate(
                  'menu-tab-stack-restaurant-detail-menu-food-list',
                  { _name: el.name }
                )
              }
            />
          )
        })}
      </GridLayout>
    </AreaView>
  )
}
