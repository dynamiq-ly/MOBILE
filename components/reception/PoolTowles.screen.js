import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

import { Image } from 'styles/image.module'
import { PhoneDirectoryRow } from 'styles/list.module'

export default function PoolTowels() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://vmrw8k5h.tinifycdn.com/news/wp-content/uploads/2016/04/Swim-Towel-Travel-Towel-portable-size-800x500-700x500.jpg',
        }}
      />
      <Text
        size={18}
        style={{ marginTop: 14 }}
        content={
          'the change of towels is done daily.if you want to collaborate with our environmental policy, we want to let you know:'
        }
      />

      <PhoneDirectoryRow style={{ marginTop: 10 }}>
        <Text content={"the towels in the bathtub means 'must be changed'."} />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow style={{ marginTop: 10 }}>
        <Text
          content={
            "the towels on the towels rack mean 'I am going to use them on more time'."
          }
        />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow style={{ marginTop: 10 }}>
        <Text
          content={
            'Pool towel with 10eur deposit, you can change it every day in reception.'
          }
        />
      </PhoneDirectoryRow>
    </AreaView>
  )
}
