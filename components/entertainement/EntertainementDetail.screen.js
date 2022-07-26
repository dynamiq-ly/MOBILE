import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'

import { Image } from 'styles/image.module'
import { HFLine, SafeAreaRowWrapperDetail } from 'styles/detail.module'
import { View as Gap, Image as Img, TouchableOpacity } from 'react-native'

export default function EntertainementDetailScreen() {
  return (
    <AreaView>
      <SafeAreaRowWrapperDetail
        style={{ alignItems: 'center', marginBottom: 16 }}>
        <Img
          style={{ width: 42, height: 42, borderRadius: 100 }}
          source={{
            uri: 'https://images.ctfassets.net/psi7gc0m4mjv/6vL20yPWnuuJNvPtnG5KkO/788d1e4e39fccdb3abfed21fd465f2e4/master_personal_trainer_mobile_hero_image_2x.jpg',
          }}
        />
        <Gap style={{ flex: 1, marginLeft: 14 }}>
          <Text
            content={
              'This is Liam the head of the animation and will be your entertainer in this pool party.'
            }
          />
        </Gap>
      </SafeAreaRowWrapperDetail>

      <Image
        source={{
          uri: 'https://thumbs.dreamstime.com/b/belek-turkey-september-pool-party-shaped-air-mattresses-belek-turkey-september-crowded-outdoor-pool-party-unicorns-139910876.jpg',
        }}
      />
      <Gap style={{ marginBottom: 10 }} />
      <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
        <Text content={'participant'} size={18} up={'cap'} weight={600} />
        <Text content={'15'} size={21} color={'dominant'} weight={600} />
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
        <Text content={'join another time'} weight={500} size={18} up={'cap'} />
        <Gap style={{ marginBottom: 10 }} />
        <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
          <Text content={'13/07/2022 - 1pm'} color={'dominant'} weight={600} />
          <JoinButton />
        </SafeAreaRowWrapperDetail>
        <Gap style={{ marginBottom: 10 }} />
        <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
          <Text content={'14/07/2022 - 11am'} color={'dominant'} weight={600} />
          <JoinButton />
        </SafeAreaRowWrapperDetail>
        <Gap style={{ marginBottom: 10 }} />
        <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
          <Text content={'15/07/2022 - 1pm'} color={'dominant'} weight={600} />
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
      <Text content={'join'} up={'up'} />
    </TouchableOpacity>
  )
}
