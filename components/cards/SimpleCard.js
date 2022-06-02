import Text from 'components/text/Text'
import {
  ImageSimpleCard,
  StyledSimpleCard,
  TextSimpleCard,
} from 'styles/cards.module'

/**
 *
 * @param0 {string} image
 * @param1 {string} title
 * @returns
 */
export default function SimpleCard({ title, image, ...rest }) {
  return (
    <StyledSimpleCard activeOpacity={1} {...rest}>
      <ImageSimpleCard source={{ uri: image }} />
      <TextSimpleCard>
        <Text
          size={18}
          up={'up'}
          weight={500}
          content={title}
          align={'center'}
        />
      </TextSimpleCard>
    </StyledSimpleCard>
  )
}
