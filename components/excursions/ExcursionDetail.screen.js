import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

export default function ExcusionDetailScreen({ route }) {
  const { _data } = route.params
  return (
    <AreaView>
      <Text content={_data.activity_list_thumbnail} />
    </AreaView>
  )
}
