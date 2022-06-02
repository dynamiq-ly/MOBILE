import { View } from 'react-native'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import { fontPixel } from 'utils/normalization'

import {
  ImageSquareCard,
  OverlaySquareCard,
  StyledSquareCard,
} from 'styles/cards.module'

/**
 *
 * @param0 {string} title
 * @param1 {string} image
 * @param2 {string} location
 * @param3 {rating} rating
 * @returns
 */
export default function SquareCard({ title, image, location, rating }) {
  return (
    <StyledSquareCard activeOpacity={0.8}>
      <ImageSquareCard source={{ uri: image }}>
        <OverlaySquareCard>
          <Icon size={fontPixel(24)} color={'#fffffe'} name='ri-heart-line' />
          <View
            style={{
              flexDirection: 'row-reverse',
              alignItems: 'center',
            }}>
            {[...Array(rating)].map((_, index) => (
              <Icon
                size={14}
                key={index}
                color={'yellow'}
                name='ri-star-fill'
                style={{ alignSelf: 'flex-end' }}
              />
            ))}
          </View>
        </OverlaySquareCard>
      </ImageSquareCard>
      <Text content={title} size={18} up={'cap'} weight={600} />
    </StyledSquareCard>
  )
}
