import AreaView from 'utils/TabAreaView'
import RentingCard from 'components/cards/RentingCard'

export default function RentingScreen() {
  return (
    <AreaView>
      {array.map((el, index) => (
        <RentingCard name={el.name} image={el.image} key={index} />
      ))}
    </AreaView>
  )
}

const array = [
  {
    name: 'cars',
    image:
      'https://www.citroenorigins.com/sites/default/files/styles/1600/public/traction_34_1620x1000.png?itok=1jL8Sr3g',
  },
  {
    name: 'motorcycle',
    image:
      'https://www.advrider.com/wp-content/uploads/2019/07/ego-electricmotorcycle.jpg',
  },
  {
    name: 'bicycle',
    image:
      'https://3dprintingindustry.com/wp-content/uploads/2020/01/q1NEkESg.png',
  },
]
