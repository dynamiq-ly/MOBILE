import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import { StyledButton } from 'styles/button.module'

/**
 * @param0 {string} icon
 * @param1 {string} title
 * @prama2 {boolean} fill
 */

export default function Button({
  title = 'press here',
  icon,
  fill = false,
  ...rest
}) {
  return (
    <StyledButton bg={fill} activeOpacity={0.9} {...rest}>
      {icon && (
        <Icon
          name={icon}
          color={!fill ? '#fffffe' : '#18181b'}
          style={{ marginRight: 10 }}
        />
      )}
      <Text
        content={title}
        color={!fill && 'white'}
        align={'center'}
        weight={600}
        up={'cap'}
        size={16}
      />
    </StyledButton>
  )
}
