import { Image, View } from 'react-native'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'

import {
  StyledPlusMinusBoxIcon,
  StyledPlusMinusStyleCard,
  StyledWrapperPlusMinusStyleCard,
} from 'styles/cards.module'
import { useState } from 'react'

export default function PlusMinusCard({ title, price }) {
  const [quantity, setQuantity] = useState(0)

  return (
    <StyledWrapperPlusMinusStyleCard>
      <View style={{ flex: 1 }}>
        <Text content={title} size={18} weight={500} up={'cap'} />
        <Text content={price} size={16} weight={500} up={'cap'} />
      </View>
      <StyledPlusMinusStyleCard>
        {quantity > 0 && (
          <StyledPlusMinusBoxIcon onPress={() => setQuantity(quantity - 1)}>
            <Icon name='ri-subtract-line' size={16} />
          </StyledPlusMinusBoxIcon>
        )}
        <Text style={{ marginHorizontal: 8 }} content={quantity} size={18} />
        <StyledPlusMinusBoxIcon onPress={() => setQuantity(quantity + 1)}>
          <Icon name='ri-add-line' size={16} />
        </StyledPlusMinusBoxIcon>
      </StyledPlusMinusStyleCard>
    </StyledWrapperPlusMinusStyleCard>
  )
}
