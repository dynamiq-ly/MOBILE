import AreaView from 'utils/TabAreaView'
import Widecard from 'components/cards/Widecard'
import { bars } from 'mock/bars'

export default function ListScreen({ navigation }) {
  return (
    <AreaView>
      {bars.map((el) => {
        return (
          <Widecard
            key={el.id}
            name={el.name}
            image={el.image}
            onPress={() =>
              navigation.navigate('menu-tab-stack-bar-detail', {
                _data: el,
              })
            }
          />
        )
      })}
    </AreaView>
  )
}
