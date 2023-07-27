/* packages */
import PropTypes from 'prop-types'
import { useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

/* styles */
import { useTheme } from 'styled-components'
import { SafeView, StyledScrollView } from '@/style/view.style'

const Container = ({ children, gap = 'sb', ...rest }) => {
  const theme = useTheme()
  /**
   * in this case we are using the useSafeAreaInsets to create padding accross the element of ui
   * or they will overlap in iphone screen (android screen runs the calucation automatically)
   * but if one of the screens have a bottom tab react navigation automatically creates the safe area fro both android and ios
   * so we dont need to use this hook in bottom tab route
   */
  const { name } = useRoute()
  const { bottom } = useSafeAreaInsets()

  return (
    <SafeView style={!name.includes('[tab]') && { paddingBottom: bottom }}>
      <StyledScrollView {...rest} keyboardDismissMode={'on-drag'} contentContainerStyle={{ gap: theme.units[gap], paddingBottom: theme.units['sm'], paddingTop: theme.units['sm'] }}>
        {children}
      </StyledScrollView>
    </SafeView>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.oneOf(['sm', 'md', 'sb', 'lg']),
}

export default Container