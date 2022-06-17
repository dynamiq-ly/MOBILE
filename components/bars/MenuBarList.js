import AreaView from 'utils/TabAreaView'
import { array_menu_bar } from 'mock/resto'
import SimpleCard from 'components/cards/SimpleCard'
import { GridLayout } from 'styles/grid.module'

export default function MenuBarScreen({ navigation }) {
  return (
    <AreaView>
      <GridLayout>
        {array_menu_bar.map((el, key) => {
          return <SimpleCard key={key} title={el.name} image={el.image} />
        })}
      </GridLayout>
    </AreaView>
  )
}
