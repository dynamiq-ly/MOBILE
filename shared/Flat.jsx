/* packages */
import PropTypes from 'prop-types'
import { useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

/* styles */
import { useTheme } from 'styled-components'
import { SafeView, StyledFlatList } from '@/style/view.style'

const Flat = ({ data, renderedItem, keyExtractor, gap = 'sm', column = 1, header, headerStyle, nested = true, ...rest }) => {
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
    <SafeView style={!name.includes('[tab]') && !nested && { paddingBottom: bottom }}>
      <StyledFlatList
        data={data}
        renderItem={renderedItem}
        numColumns={column}
        keyExtractor={keyExtractor}
        columnWrapperStyle={{
          flex: 1,
          gap: theme.units[gap],
        }}
        contentContainerStyle={{
          gap: theme.units[gap],
          padding: theme.units.md,
        }}
        ListHeaderComponent={header}
        ListHeaderComponentStyle={{ ...headerStyle }}
        {...rest}
      />
    </SafeView>
  )
}

Flat.propTypes = {
  data: PropTypes.array.isRequired,
  renderedItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
  gap: PropTypes.oneOf(['sm', 'md', 'sb', 'lg']),
  column: PropTypes.number,
  header: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.node]),
  headerStyle: PropTypes.object,
  nested: PropTypes.bool,
}

export default Flat
