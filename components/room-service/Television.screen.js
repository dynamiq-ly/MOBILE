import AreaView from '~/utils/TabAreaView'
import { Image } from 'styles/image.module'
import { View as NewView } from 'react-native'
import Text from 'components/text/Text'
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
          'Each of  our hotel room is provided with a television and a tv remote to keep you entertained in your room and watch your favorite shows and tv programs.'
        }
      />
    </AreaView>
  )
}
