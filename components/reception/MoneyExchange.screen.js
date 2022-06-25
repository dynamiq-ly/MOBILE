import AreaView from 'utils/TabAreaView'

import Text from 'components/text/Text'
import Input from 'components/input/Input'
import { useState } from 'react'

export default function MoneyExchange() {
  const [value, setValue] = useState('')
  return (
    <AreaView>
      <Input
        value={value}
        icon={'ri-exchange-line'}
        placeholder={'money amount'}
        onChangeText={(text) => setValue(text)}
      />

      <Text content={`${value}`} />
    </AreaView>
  )
}
