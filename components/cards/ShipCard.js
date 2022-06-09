import Text from 'components/text/Text'

import {
  StyledShipCard,
  StyledShipCardImage,
  StyledTextCardShip,
} from 'styles/cards.module'

/**
 * ship small
 * @param0 {string} name
 * @param1 {string} underName
 * @param2 {string} image
 */
const ShipCard = ({ name = 'NAME', underName = 'N/A', image }) => {
  return (
    <StyledShipCard>
      <StyledShipCardImage
        source={{
          uri: image,
        }}
      />
      <StyledTextCardShip>
        <Text content={name} up={'cap'} weight={600} size={20} />
        <Text
          up={'up'}
          size={16}
          weight={600}
          content={underName}
          color={underName === 'N/A' ? 'gray' : 'dominant'}
        />
      </StyledTextCardShip>
    </StyledShipCard>
  )
}

export default ShipCard
