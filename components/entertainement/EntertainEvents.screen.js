import DayEntertainScreen from './Enter/Day.screen'
import SportEntertainScreen from './Enter/Sport.screen'
import NightEntertainScreen from './Enter/Night.screen'
import EventEntertainScreen from './Enter/Event.screen'

export default function EntertainDetailScreen({ route, navigation }) {
  const { _name } = route.params

  switch (_name) {
    case 'day activities':
      return <DayEntertainScreen navigation={navigation} />
    case 'tv sport programs':
      return <SportEntertainScreen navigation={navigation} />
    case 'night shows':
      return <NightEntertainScreen navigation={navigation} />
    case 'events programs':
      return <EventEntertainScreen navigation={navigation} />
  }
}
