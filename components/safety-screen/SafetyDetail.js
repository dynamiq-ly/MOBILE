import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

export default function SafetyDetail({ route }) {
  const { _data } = route.params
  return (
    <AreaView>
      <Text content={_data.measure_content} />
    </AreaView>
  )
}
