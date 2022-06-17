import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import {
  StyledPlusMinusBoxIcon,
  StyledPlusMinusStyleCard,
  StyledWrapperPlusMinusStyleCard,
} from 'styles/cards.module'

export default function PlusMinusCard({ title, count = 0, onChange }) {
  return (
    <StyledWrapperPlusMinusStyleCard>
      <Text content={title} size={16} weight={500} up={'cap'} />
      <StyledPlusMinusStyleCard>
        <StyledPlusMinusBoxIcon onPress={() => onChange(count - 1)}>
          <Icon name='ri-subtract-line' size={16} />
        </StyledPlusMinusBoxIcon>
        <Text content={count} size={18} />
        <StyledPlusMinusBoxIcon onPress={() => onChange(count + 1)}>
          <Icon name='ri-add-line' size={16} />
        </StyledPlusMinusBoxIcon>
      </StyledPlusMinusStyleCard>
    </StyledWrapperPlusMinusStyleCard>
  )
}
