/* packages */
import PropTypes from 'prop-types'
import { View } from 'react-native'

/* components */
import Text from '@/common/Text'
import Button from '@/common/Button'

/* styles */
import { StyleDiv, StyledDivHeader } from '@/common/ui/div.ui'

const Div = ({ children, radii = 'sm', shadowColor = 'sub', title, button, onClick, buttonBackground = 'tag', buttonShadowColor = 'main', filled = false, style = {} }) => {
  return (
    <StyleDiv radii={radii} background={filled ? 'container' : 'view'} shadowColor={shadowColor} style={{ ...style }}>
      {title && (
        <StyledDivHeader>
          <Text size={9} weight={'md'} t={'capitalize'}>
            {title}
          </Text>
          {button && (
            <View>
              <Button background={buttonBackground} h={24} shadowColor={buttonShadowColor} onPress={onClick}>
                {button}
              </Button>
            </View>
          )}
        </StyledDivHeader>
      )}
      {children}
    </StyleDiv>
  )
}

Div.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  button: PropTypes.string,
  onClick: PropTypes.func,
  filled: PropTypes.bool,
  buttonBackground: PropTypes.oneOf(['primary', 'secondary', 'error', 'success', 'warning', 'info', 'neutral']),
  buttonShadowColor: PropTypes.oneOf(['main', 'sub', 'small', 'error', 'success', 'warning', 'info', 'neutral']),
  radii: PropTypes.oneOf(['sm', 'md', 'lg', 'rounded']),
  shadowColor: PropTypes.oneOf(['main', 'sub', 'small', 'error', 'success', 'warning', 'info', 'neutral']),
  style: PropTypes.object,
}

export default Div
