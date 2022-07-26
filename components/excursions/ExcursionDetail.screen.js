import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Expandable from 'components/button/Expandable'

import { baseUrl } from 'hooks/useApi'
import { Image } from 'styles/image.module'

export default function ExcusionDetailScreen({ route }) {
  const { _data } = route.params
  return (
    <AreaView>
      <Image
        source={{
          uri: `${baseUrl}/storage/excursions/thumbnails/${_data.activity_list_thumbnail}`,
        }}
      />

      <Expandable />
    </AreaView>
  )
}
