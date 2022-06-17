import Text from 'components/text/Text'

import {
  RadioButtonCardStyle,
  StyledShipCardImage,
  StyledTextCardShip,
} from 'styles/cards.module'

/**
 *
 * @param0 {string} name
 * @param1 {string} price
 * @param2 {string} image
 * @param3 {string} state
 * @returns
 */
const RadioButtonCard = ({ name, price, image, state }) => {
  return (
    <RadioButtonCardStyle pressed={state}>
      <StyledShipCardImage
        source={{
          uri: image,
        }}
      />
      <StyledTextCardShip>
        <Text content={name} up={'cap'} weight={600} size={16} />
        <Text
          up={'up'}
          size={14}
          weight={600}
          content={price}
          color={'dominant'}
        />
      </StyledTextCardShip>
    </RadioButtonCardStyle>
  )
}

export default RadioButtonCard
