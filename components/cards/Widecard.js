import { View } from 'react-native'
import { palette } from 'themes/palette'

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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              up={'up'}
              size={12}
              weight={700}
              color={'white'}
              content={state ? 'open' : 'close'}
            />
            <View
              style={{
                width: 10,
                height: 10,
                marginLeft: 5,
                borderRadius: 50,
                backgroundColor: state
                  ? palette.success.accent_500
                  : palette.error.accent_500,
              }}
            />
          </View>
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
