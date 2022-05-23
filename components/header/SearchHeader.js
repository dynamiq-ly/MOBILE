import { useState } from 'react'
import { Keyboard } from 'react-native'
import { palette } from 'themes/palette'
import Icon from 'react-native-remix-icon'
import { DismissKeyboardButton, Field, StyledInput } from 'styles/input.module'
import { SafeAreaHeader, StackViewHeader } from 'styles/header.module'

export default function SearchHeader() {
  const [value, setValue] = useState('')

  return (
    <SafeAreaHeader>
      <StackViewHeader>
        <Field>
          <Icon
            size={18}
            name='ri-search-line'
            color={palette.secondary.accent_500}
            style={{ marginRight: 10 }}
          />
          <StyledInput
            value={value}
            placeholder={'type to seach...'}
            onChangeText={(Text) => setValue(Text)}
            onBlur={() => Keyboard.dismiss()}
          />
          {value.length !== 0 && (
            <DismissKeyboardButton
              onPress={() => {
                Keyboard.dismiss()
                setValue('')
              }}>
              <Icon
                size={18}
                name='ri-close-line'
                color={palette.secondary.accent_500}
              />
            </DismissKeyboardButton>
          )}
        </Field>
      </StackViewHeader>
    </SafeAreaHeader>
  )
}
