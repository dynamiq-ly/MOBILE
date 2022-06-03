import {
  StyledDetailedCardView,
  DetailedCardImage,
  RowDetailedCardContent,
  TitleDetailedCardContent,
} from 'styles/cards.module'
import Text from 'components/text/Text'

/**
 * @description detailed Card for lists
 * @param0 {string} image
 * @param1 {string} title
 * @param2 {string} description
 * @param3 {string} price
 * @returns JSX.element
 */
export default function DetailedCard({ image, title, description, price }) {
  return (
    <StyledDetailedCardView>
      <DetailedCardImage
        source={{
          uri: image,
        }}
      />
      <RowDetailedCardContent>
        <TitleDetailedCardContent>
          <Text size={20} up={'cap'} weight={600} content={title} />
          <Text size={20} up={'cap'} weight={600} content={price} />
        </TitleDetailedCardContent>

        <Text size={16} weight={400} content={description} color={'gray'} />
      </RowDetailedCardContent>
    </StyledDetailedCardView>
  )
}
