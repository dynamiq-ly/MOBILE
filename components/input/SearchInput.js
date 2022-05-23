import { useState } from 'react'
import { Keyboard } from 'react-native'
import { palette } from 'themes/palette'
import Icon from 'react-native-remix-icon'
import {
  DismissKeyboardButton,
  SearchField,
  StyledSearchInput,
} from 'styles/input.module'
import { StackViewHeader } from 'styles/header.module'

export default function SearchInput({ value = '', onChange }) {
  return (
    <SearchField>
      <Icon
        size={18}
        name='ri-search-line'
        color={palette.secondary.accent_500}
        style={{ marginRight: 10 }}
      />
      <StyledSearchInput
        value={value}
        placeholder={'type to seach...'}
        onChangeText={(Text) => onChange(Text)}
        onBlur={() => Keyboard.dismiss()}
      />
      {value.length !== 0 && (
        <DismissKeyboardButton
          onPress={() => {
            Keyboard.dismiss()
            onChange('')
          }}>
          <Icon
            size={18}
            name='ri-close-line'
            color={palette.secondary.accent_500}
          />
        </DismissKeyboardButton>
      )}
    </SearchField>
  )
}
