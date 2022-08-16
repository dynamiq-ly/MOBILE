import {
  StyledCardWrapper,
  StyledFullImageCard,
  StyledFullImageClickable,
} from 'styles/cards.module'
import Text from 'components/text/Text'

/**
 * full image card
 * @param0 {string} image
 * @param1 {string} title
 * @param2 {boolean} position
 */
export default function FullImageCard({
  image,
  title,
  position = 'start',
  ...rest
}) {
  return (
    <StyledCardWrapper state={position}>
      <StyledFullImageCard
        source={{
          uri: image,
        }}>
        <StyledFullImageClickable {...rest}>
          <Text
            size={21}
            up={'cap'}
            weight={700}
            color={'white'}
            content={title}
          />
        </StyledFullImageClickable>
      </StyledFullImageCard>
    </StyledCardWrapper>
  )
}
