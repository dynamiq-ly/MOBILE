import Text from 'components/text/Text'
import {
  ImageSquareCard,
  OverlaySquareCard,
  StyledSquareCard,
} from 'styles/cards.module'

/**
 * square card for wine display list
 * @param0 {string} image
 * @param1 {string} title
 * @param2 {string} price
 * @param3 {string} origin
 */
const WineCard = ({ image, title, price, origin, ...rest }) => {
  return (
    <StyledSquareCard activeOpacity={0.8} {...rest}>
      <ImageSquareCard source={{ uri: image }}>
        <OverlaySquareCard>
          <Text
            content={title}
            size={18}
            color={'white'}
            weight={600}
            up={'up'}
          />
        </OverlaySquareCard>
      </ImageSquareCard>
      <Text content={origin} weight={600} size={14} up={'up'} />
      <Text
        color={'dominant'}
        content={price}
        weight={600}
        size={14}
        up={'up'}
      />
    </StyledSquareCard>
  )
}

export default WineCard
