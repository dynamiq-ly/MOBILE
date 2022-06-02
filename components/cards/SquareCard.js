import { View } from 'react-native'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import {
  ImageSquareCard,
  OverlaySquareCard,
  StyledSquareCard,
  ViewBetween,
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
          <ViewBetween>
            <Icon
              size={18}
              color={'#fffffe'}
              name='ri-heart-line'
              style={{ alignSelf: 'flex-end' }}
            />
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
          </ViewBetween>
          <Text
            content={title}
            size={18}
            up={'cap'}
            weight={600}
            color={'white'}
          />
        </OverlaySquareCard>
      </ImageSquareCard>
      <Text content={location} size={14} up={'cap'} weight={400} />
    </StyledSquareCard>
  )
}
