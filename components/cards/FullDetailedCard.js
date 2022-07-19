import Text from 'components/text/Text'

import {
  StyledFullDetailedCard,
  StyledFullDetailedCardImage,
  StyledFullDetailedCardContent,
} from 'styles/cards.module'

/**
 * card like the detailed card but with flex as column
 */
export default function FullDetailedCard({ capacity, title, image, ...rest }) {
  return (
    <StyledFullDetailedCard {...rest}>
      <StyledFullDetailedCardImage source={{ uri: image }} />
      <StyledFullDetailedCardContent>
        <Text content={title} size={18} weight={600} up={'cap'} />
        <Text
          content={capacity}
          color={'dominant'}
          weight={600}
          size={16}
          up={'cap'}
        />
      </StyledFullDetailedCardContent>
    </StyledFullDetailedCard>
  )
}
