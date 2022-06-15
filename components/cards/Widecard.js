import Text from 'components/text/Text'
import {
  WideCardTag,
  WideListCard,
  WideListCardButton,
  WideCardSectionHeader,
} from 'styles/cards.module'

/**
 * @param0 {string} image
 * @param1 {string} name
 * @param2 {string} specialiy?
 * @param3 {boolean} state
 */

export default function Widecard({
  image = 'https://www.usbforwindows.com/storage/img/images_3/function_set_default_image_when_image_not_present.png',
  name,
  state,
  specialiy = null,
  ...rest
}) {
  return (
    <WideListCard source={{ uri: image }}>
      <WideListCardButton activeOpacity={1} {...rest}>
        <WideCardSectionHeader>
          <Text
            up={'up'}
            size={12}
            weight={900}
            color={state ? 'white' : 'red'}
            content={state ? 'open' : 'close'}
          />
          {specialiy !== null && (
            <WideCardTag>
              <Text
                up={'up'}
                size={12}
                weight={600}
                color={'white'}
                content={specialiy}
              />
            </WideCardTag>
          )}
        </WideCardSectionHeader>

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
