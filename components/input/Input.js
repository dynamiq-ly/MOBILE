import { palette } from 'themes/palette'
import Icon from 'react-native-remix-icon'
import {
  Field,
  StyledInput,
  TextAreaField,
  StyledTextAreaInput,
} from 'styles/input.module'

/**
 * one line input
 * @param0 {string} placeholder
 * @param1 {boolean} background
 * @param2 {string} icon
 */
export default function Input({
  placeholder = 'placeholder',
  background = false,
  icon = 'ri-input-cursor-move',
  ...rest
}) {
  return (
    <Field>
      {icon && (
        <Icon
          size={18}
          name={icon}
          style={{ marginRight: 10 }}
          color={palette.secondary.accent_500}
        />
      )}
      <StyledInput placeholder={placeholder} bg={background} {...rest} />
    </Field>
  )
}

/**
 * multiline input
 * @param0 {string} placeholder
 * @param1 {boolean} background
 * @param2 {string} icon
 */
export function TextArea({
  placeholder = 'placeholder',
  background = false,
  icon = 'ri-input-cursor-move',
  ...rest
}) {
  return (
    <TextAreaField>
      {icon && (
        <Icon
          size={18}
          name={icon}
          color={'#9ca3af'}
          style={{ marginTop: 3, marginRight: 10 }}
        />
      )}
      <StyledTextAreaInput
        multiline={true}
        numberOfLines={4}
        placeholder={placeholder}
        bg={background}
        style={{ textAlignVertical: 'top' }}
        {...rest}
      />
    </TextAreaField>
  )
}
