/* packages */
import PropTypes from 'prop-types'
import Animated, { Extrapolate, interpolate, measure, runOnUI, useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'

/* components */
import { Text } from '@/common'
import Icon from '../product-icon/Icon'

/* styles */
import { useTheme } from 'styled-components'
import { AccordionButton, AccordionContainer } from '@/style/accordion.style'
import { useEffect } from 'react'

const Accordion = ({ children, title = 'accordion', background = 'view', radii = 'sm', border = undefined }) => {
  const theme = useTheme()

  const childrenRef = useAnimatedRef(null)
  const heightValue = useSharedValue(0)
  const open = useSharedValue(false)
  const progress = useDerivedValue(() => (open.value ? withTiming(1) : withTiming(0)))

  const heightAnimatedStyle = useAnimatedStyle(() => ({
    height: interpolate(progress.value, [0, 1], [0, heightValue.value + theme.units.md], Extrapolate.CLAMP),
  }))

  const rotateAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 135}deg` }],
  }))

  return (
    <AccordionContainer bg={background} radii={radii} border={border}>
      <AccordionButton
        activeOpacity={0.8}
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              'worklet'
              heightValue.value = measure(childrenRef).height
            })()
          }
          open.value = !open.value
        }}>
        <Text size={7.75} t={'capitalize'} weight='md'>
          {title}
        </Text>
        <Animated.View style={rotateAnimatedStyle}>
          <Icon icon={require('@/assets/icons/product/monocrome/plus-dark.png')} />
        </Animated.View>
      </AccordionButton>

      <Animated.View style={[heightAnimatedStyle, { position: 'relative' }]}>
        <Animated.View style={{ position: 'absolute', top: 0, width: '100%', paddingTop: 5 }} ref={childrenRef}>
          {children}
        </Animated.View>
      </Animated.View>
    </AccordionContainer>
  )
}

Accordion.propTypes = {
  title: PropTypes.string,
  radii: PropTypes.oneOf(['sm', 'md', 'sb', 'lg']),
  border: PropTypes.oneOf(['main', 'sub', 'small', 'error', 'success', 'warning', 'info', 'neutral']),
  background: PropTypes.oneOf(['view', 'container', 'error', 'success', 'warning', 'info', 'tag']),
  children: PropTypes.node,
}

export default Accordion
