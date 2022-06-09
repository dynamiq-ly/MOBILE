import AreaView from 'utils/TabAreaView'
import Widecard from 'components/cards/Widecard'
import { restaurants } from 'mock/resto'

let time = new Date().getHours() + ':' + new Date().getMinutes()

export default function ListScreen({ navigation }) {
  return (
    <AreaView>
      {restaurants.map((el) => {
        return (
          <Widecard
            key={el.id}
            name={el.name}
            image={el.image}
            state={time < el.close && time > el.open ? true : false}
            specialiy={el.specialiy}
            onPress={() =>
              navigation.navigate('menu-tab-stack-restaurant-detail', {
                _data: el,
              })
            }
          />
        )
      })}
    </AreaView>
  )
}
