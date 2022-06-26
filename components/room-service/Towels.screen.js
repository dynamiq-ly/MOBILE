import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

import { Image } from 'styles/image.module'
import { PhoneDirectoryRow } from 'styles/list.module'

export default function TowelsScreen() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'http://braunlinen.com/wp-content/uploads/2018/01/washing-your-salon-towels.jpg',
        }}
        style={{ marginBottom: 14 }}
      />
      <Text
        size={16}
        content={
          'the change of towels is done daily. if you want to collaborate with our enviromental policy.'
        }
      />
      <Text size={16} content={'we want to let you know that:'} />

      <PhoneDirectoryRow>
        <Text
          size={16}
          content={'the towels in the bathtub must be changed.'}
        />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text
          size={16}
          content={
            'the towel on the towel rack mean that you are going out and you want to use it one more.'
          }
        />
      </PhoneDirectoryRow>
      <PhoneDirectoryRow>
        <Text
          size={16}
          content={
            'pool towel with 10euro deposit, you can change it every day in the reception.'
          }
        />
      </PhoneDirectoryRow>
    </AreaView>
  )
}
