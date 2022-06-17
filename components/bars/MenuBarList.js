import AreaView from 'utils/TabAreaView'
import { array_menu_bar } from 'mock/bars'
import SimpleCard from 'components/cards/SimpleCard'
import { GridLayout } from 'styles/grid.module'

export default function MenuBarScreen({ navigation }) {
  return (
    <AreaView>
      <GridLayout>
        {array_menu_bar.map((el, key) => {
          return (
            <SimpleCard
              key={key}
              title={el.name}
              image={el.image}
              onPress={() =>
                navigation.navigate('menu-tab-stack-bar-menu-details', {
                  _name: el.name,
                })
              }
            />
          )
        })}
      </GridLayout>
    </AreaView>
  )
}
