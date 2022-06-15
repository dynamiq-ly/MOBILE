import Text from 'components/text/Text'
import { ImageSquareCard, StyledSquareCard } from 'styles/cards.module'

/**
 * @param0 {string} image
 * @param1 {string} title
 * @param2 {string} price
 * @param3 {string} origin
 */
const WineCard = ({ image, title, price, origin }) => {
  return (
    <StyledSquareCard activeOpacity={0.8}>
      <ImageSquareCard source={{ uri: image }} />
      <Text content={price} size={14} color={'black'} up={'up'} />
      <Text content={title} size={14} color={'black'} up={'up'} />

      <Text content={origin} size={14} color={'gray'} up={'up'} />
    </StyledSquareCard>
  )
}

export default WineCard
