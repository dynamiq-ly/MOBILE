import Text from 'components/text/Text'
import AreaView from '~/utils/TabAreaView'

import { Image } from 'styles/image.module'
import { View as NewView } from 'react-native'
import { PhoneDirectoryRow } from 'styles/list.module'

export default function Television() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://cdn.mos.cms.futurecdn.net/chdRXnwnNQTmg9Ax4EvmBb-1024-80.jpg.webp',
        }}
      />
      <NewView style={{ marginBottom: 15 }} />
      <Text
        size={18}
        content={
          'For your entertainment in the room we offer you a selection of television channels, payed movies and more interactive options.'
        }
        style={{ marginBottom: 24 }}
      />
      <PhoneDirectoryRow>
        <Text content={'You can find the remote next the telivsion.'} />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text
          content={
            'The television if automatically connected to our internal wifi.'
          }
        />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text
          content={
            'We prevent you from using the television system to watch unlicensed or pirated shows.'
          }
        />
      </PhoneDirectoryRow>
    </AreaView>
  )
}
