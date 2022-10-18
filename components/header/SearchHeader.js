import { Keyboard } from 'react-native'
import { palette } from 'themes/palette'
import Icon from 'react-native-remix-icon'
import {
  DismissKeyboardButton,
  Field,
  GoSearchKeyboardButton,
  StyledInput,
} from 'styles/input.module'
import { SafeAreaHeader, StackViewHeader } from 'styles/header.module'

export default function SearchHeader({ value = '', setValue, click, ...rest }) {
  return (
    <SafeAreaHeader {...rest}>
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
            <>
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
              <GoSearchKeyboardButton onPress={click}>
                <Icon
                  size={18}
                  name='ri-arrow-right-line'
                  color={palette.primary.accent_0}
                />
              </GoSearchKeyboardButton>
            </>
          )}
        </Field>
      </StackViewHeader>
    </SafeAreaHeader>
  )
}
