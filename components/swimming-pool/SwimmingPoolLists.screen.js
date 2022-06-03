import AreaView from 'utils/TabAreaView'
import FullDetailedCard from 'components/cards/FullDetailedCard'

export default function SwimmingPoolListsScreen({ route }) {
  const { _data } = route.params
  return (
    <AreaView>
      {_data.map((item, index) => {
        return (
          <FullDetailedCard
            key={index}
            title={item.name}
            image={item.image}
            capacity={item.capacity}
          />
        )
      })}
    </AreaView>
  )
}
