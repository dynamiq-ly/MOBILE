import AreaView from 'utils/TabAreaView'
import DetailedCard from 'components/cards/DetailedCard'
import { detailed_card_menu_list } from 'mock/resto'

export default function MenuFoodListScreen() {
  return (
    <AreaView>
      {detailed_card_menu_list.map((el, key) => {
        return (
          <DetailedCard
            key={key}
            title={el.title}
            image={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTcNy1Prx33_8N0lgoeo-1XpFjW7bjwZPKA&usqp=CAU'
            }
            price={el.price}
            description={
              el.description.length > 50
                ? `${el.description.slice(0, 50)}...`
                : el.description
            }
          />
        )
      })}
    </AreaView>
  )
}
