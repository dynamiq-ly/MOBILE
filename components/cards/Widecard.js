import Text from 'components/text/Text'
import { WideListCard, WideListCardButton } from 'styles/cards.module'

/**
 * @param0 {string} image
 * @param1 {string} name
 */

export default function Widecard({
  image = 'https://www.usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png',
  name,
  ...rest
}) {
  return (
    <WideListCard source={{ uri: image }}>
      <WideListCardButton activeOpacity={1} {...rest}>
        <Text
          content={name}
          size={18}
          up={'cap'}
          weight={600}
          color={'white'}
        />
      </WideListCardButton>
    </WideListCard>
  )
}
