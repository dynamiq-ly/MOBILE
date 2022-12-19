import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'

export default function GymUseTerms({ route }) {
  const { _terms } = route.params

  return (
    <AreaView>
      <Text content={_terms} size={16} />
    </AreaView>
  )
}
