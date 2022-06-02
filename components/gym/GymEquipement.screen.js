import AreaView from 'utils/TabAreaView'
import SimpleCard from 'components/cards/SimpleCard'
import { GridLayout } from 'styles/grid.module'

export default function GymEquipementScreen() {
  return (
    <AreaView>
      <GridLayout>
        {array_gym_equipement.map((el, key) => {
          return <SimpleCard key={key} title={el.equipement} image={el.image} />
        })}
      </GridLayout>
    </AreaView>
  )
}

const array_gym_equipement = [
  {
    equipement: 'treadmill touch panel',
    image: 'http://sc04.alicdn.com/kf/HTB1BZBVSpXXXXauaFXXq6xXFXXXw.jpg',
  },
  {
    equipement: 'bike spinner',
    image:
      'https://media.glamour.com/photos/56964f1693ef4b0952105c69/master/w_320%2Cc_limit/slideshow-spinning-03-too-low-seat-main.jpg',
  },
  {
    equipement: 'stair climber',
    image: 'https://pbs.twimg.com/media/DUuq8zBV4AArkdL.jpg',
  },
  {
    equipement: 'shoulder press',
    image:
      'https://media.istockphoto.com/photos/latin-woman-exercising-with-a-shoulder-press-machine-picture-id1285187535?k=20&m=1285187535&s=612x612&w=0&h=hev02NGQXsMaU5qtNUVvOkuAGGHqkgTnsQz0wVZWmsg=',
  },
  {
    equipement: 'leg press',
    image:
      'https://www.titan.fitness/dw/image/v2/BDBZ_PRD/on/demandware.static/-/Sites-masterCatalog_Titan/default/dw1b1993ac/images/hi-res/Fitness/400573_05.jpg?sw=800&sh=800',
  },
  {
    equipement: 'dumbell plates',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Weight_plates.jpg/220px-Weight_plates.jpg',
  },
]
