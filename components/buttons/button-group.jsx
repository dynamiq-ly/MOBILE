/* packages */
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Dimensions } from 'react-native'

/* components */
import { Text } from '@/common'

/* styles */
import { StyledButtonGroupContainer, StyledButtonGroupScrolledContainer, StyledButtonGroupView, StyledButtonItem } from '@/style/buttons.style'
import { useTheme } from 'styled-components'

const { width: WIDTH_VALUE_WINDOW } = Dimensions.get('window')

const ButtonGroup = ({ items = undefined, scrollabe = false, offsetX = 10, selectedIndex = 0, setSelectedIndex }) => {
  const theme = useTheme()
  const ScrollingView = scrollabe ? StyledButtonGroupScrolledContainer : StyledButtonGroupContainer

  return (
    <StyledButtonGroupView>
      <ScrollingView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {items &&
          items.map((item, index) => {
            return (
              <View
                style={[
                  {
                    flex: scrollabe ? 0 : 1,
                    minWidth: (WIDTH_VALUE_WINDOW - offsetX * 2) / 3,
                  },
                  index !== 0 && { borderLeftWidth: 1, borderLeftStyle: 'solid', borderLeftColor: `${theme.core.text['variant_sub']}50` },
                ]}>
                <StyledButtonItem key={item.id} scrollable={!scrollabe} onPress={() => setSelectedIndex(item.id)} selected={item.id === selectedIndex}>
                  <Text color={item.id === selectedIndex ? 'neutral' : 'sub'} weight='md' size={7} t={'capitalize'} turncate={1}>
                    {item.label}
                  </Text>
                </StyledButtonItem>
              </View>
            )
          })}
      </ScrollingView>
    </StyledButtonGroupView>
  )
}

ButtonGroup.propTypes = {
  scrollabe: PropTypes.bool,
  offsetX: PropTypes.number,
  items: PropTypes.array,
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
}

export default ButtonGroup
