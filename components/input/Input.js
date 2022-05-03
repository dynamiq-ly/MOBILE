import Icon from 'react-native-remix-icon'
import { Field, StyledInput } from 'styles/input.module'

/**
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
          color={'#9ca3af'}
          style={{ marginRight: 10 }}
        />
      )}
      <StyledInput placeholder={placeholder} bg={background} {...rest} />
    </Field>
  )
}
