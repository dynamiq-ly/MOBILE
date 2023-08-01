/* packages */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native'

/* components */
import { Text } from '@/common'

/* styles */
import { shadow } from '@/util/shadow'
import { StyledButtonGroupContainer, StyledButtonGroupScrolledContainer, StyledButtonItem } from '@/style/buttons.style'

const { width: WIDTH_VALUE_WINDOW } = Dimensions.get('window')

const ButtonGroup = ({ items = undefined, scrollabe = false, offsetX = 10, selectedIndex = 0, setSelectedIndex }) => {
  const ScrollingView = scrollabe ? StyledButtonGroupScrolledContainer : StyledButtonGroupContainer

  return (
    <ScrollingView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      {items &&
        items.map((item) => {
          return (
            <StyledButtonItem key={item.id} onPress={() => setSelectedIndex(item.id)} selected={item.id === selectedIndex} min={(WIDTH_VALUE_WINDOW - offsetX * 2) / 3}>
              <Text color={item.id === selectedIndex ? 'neutral' : 'sub'} weight='md' size={7} t={'capitalize'} turncate={1}>
                {item.label}
              </Text>
            </StyledButtonItem>
          )
        })}
    </ScrollingView>
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
