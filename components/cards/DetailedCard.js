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
export default function DetailedCard({
  image,
  title,
  description,
  price,
  ...rest
}) {
  return (
    <StyledDetailedCardView activeOpacity={1} {...rest}>
      <DetailedCardImage
        source={{
          uri: image,
        }}
      />
      <RowDetailedCardContent>
        <TitleDetailedCardContent>
          <Text
            size={18}
            up={'cap'}
            weight={600}
            content={title}
            style={{ width: '90%' }}
          />
          {price !== '' && (
            <Text
              size={18}
              up={'cap'}
              weight={600}
              align={'center'}
              content={`${price}$`}
              color={'dominant'}
            />
          )}
        </TitleDetailedCardContent>

        <Text size={14} weight={400} content={description} color={'gray'} />
      </RowDetailedCardContent>
    </StyledDetailedCardView>
  )
}
