import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'

import { Image } from 'styles/image.module'
import { HFLine, SafeAreaRowWrapperDetail } from 'styles/detail.module'
import { View as Gap, Image as Img, TouchableOpacity } from 'react-native'

export default function EntertainementDetailScreen() {
  return (
    <AreaView mode={'dark'}>
      <Image
        source={{
          uri: 'https://thumbs.dreamstime.com/b/belek-turkey-september-pool-party-shaped-air-mattresses-belek-turkey-september-crowded-outdoor-pool-party-unicorns-139910876.jpg',
        }}
      />
      <Gap style={{ marginBottom: 10 }} />
      <SafeAreaRowWrapperDetail style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
        <Icon name='ri-map-pin-line' size={18} />
        <Text content={'15:00 PM'} size={18} color={'dominant'} weight={600} style={{ marginLeft: 5 }} />
      </SafeAreaRowWrapperDetail>
      <SafeAreaRowWrapperDetail style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
        <Icon name='ri-time-line' size={18} />
        <Text content={'roof top pool'} up={'cap'} size={18} color={'dominant'} weight={600} style={{ marginLeft: 5 }} />
      </SafeAreaRowWrapperDetail>
      <Gap style={{ marginBottom: 16 }} />
      <Text
        color={'gray'}
        content={
          'Each uniquely styled pool room features state of the art facilities including private bars, surround sound and even dance floors. We have gained a well-earned reputation for our exclusive pool party apartments which are perfect for party nights, hen and stag do’s and special celebrations'
        }
      />
      <Gap style={{ marginBottom: 10 }} />
      <Button title='join for today' style={{ height: 36 }} />
      <>
        <HFLine />
        <Text content={'next schedule'} weight={500} size={18} up={'cap'} />
        <Gap style={{ marginBottom: 10 }} />
        <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
          <Text content={'wednesday 13/07/2022 - 1pm'} color={'dominant'} weight={600} />
          <JoinButton />
        </SafeAreaRowWrapperDetail>
        <Gap style={{ marginBottom: 10 }} />
        <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
          <Text content={'friday 14/07/2022 - 11am'} color={'dominant'} weight={600} />
          <JoinButton />
        </SafeAreaRowWrapperDetail>
        <Gap style={{ marginBottom: 10 }} />
        <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
          <Text content={'sunday 15/07/2022 - 1pm'} color={'dominant'} weight={600} />
          <JoinButton />
        </SafeAreaRowWrapperDetail>
      </>
      <Gap style={{ marginBottom: 24 }} />
    </AreaView>
  )
}

const JoinButton = function () {
  return (
    <TouchableOpacity>
      <Icon name='ri-notification-line' size={21} />
    </TouchableOpacity>
  )
}
// to open pop uo that will confirm
