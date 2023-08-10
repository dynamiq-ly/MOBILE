/* packages */
import { View } from 'react-native'
import PropTypes from 'prop-types'

/* components */
import { Image, Text } from '@/common'

/* styles */
import { StyledCardContainer, StyledCardOptionLayer, StyledCardOverlay } from '@/style/card.style'
import { useTheme } from 'styled-components'

const OptionCard = ({ onPress, title = 'first title', subTitle = 'second title', timing = 'third title', subTiming = 'fourth title', closed = false, reservation = false, adults = false }) => {
  const theme = useTheme()

  return (
    <StyledCardContainer direction={'column'} padding={false} activeOpacity={0.7} onPress={onPress}>
      {/* options, image */}
      <View style={{ position: 'relative' }}>
        <Image source={'https://th.bing.com/th/id/R.e8c1ab783c84ab8b9dd95a53670389bc?rik=q0RY3tBvawJDUA&pid=ImgRaw&r=0'} height='100px' />

        <StyledCardOptionLayer item='start' style={{ gap: theme.units.sm }}>
          {/* reservation */}
          {reservation && (
            <View
              style={{
                backgroundColor: theme.core.text['variant_info'],
                paddingHorizontal: theme.units.md,
                paddingVertical: theme.units.sm,
                borderTopEndRadius: theme.units.sm,
                borderBottomEndRadius: theme.units.sm,
              }}>
              <Text t='capitalize' color='neutral' weight='md'>
                reservation required
              </Text>
            </View>
          )}

          {/* adults */}
          {adults && (
            <View
              style={{
                backgroundColor: theme.core.text['variant_main'],
                paddingHorizontal: theme.units.md,
                paddingVertical: theme.units.sm,
                borderTopEndRadius: theme.units.sm,
                borderBottomEndRadius: theme.units.sm,
              }}>
              <Text t='capitalize' color='neutral' weight='md'>
                adults only
              </Text>
            </View>
          )}
        </StyledCardOptionLayer>

        {closed && (
          <StyledCardOverlay item={'center'}>
            <View style={{ backgroundColor: theme.core.background['variant_error'], padding: 4, borderRadius: 2.5 }}>
              <Text color='error' t='uppercase' weight='md'>
                closed
              </Text>
            </View>
          </StyledCardOverlay>
        )}
      </View>

      {/* text, info */}
      <View style={{ flex: 1, gap: theme.units.sm, padding: theme.units.md }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text size={8} weight='md' t='capitalize' turncate={1}>
            {title}
          </Text>
          <Text size={7} t='capitalize' turncate={1}>
            {subTitle}
          </Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text t='capitalize' color='sub' weight='md'>
            {timing}
          </Text>
          <Text t='capitalize' color='sub' weight='md'>
            {subTiming}
          </Text>
        </View>
      </View>
    </StyledCardContainer>
  )
}

OptionCard.propTypes = {
  onPress: PropTypes.func,

  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  timing: PropTypes.string,
  subTiming: PropTypes.string,

  closed: PropTypes.bool,
  reservation: PropTypes.bool,
  adults: PropTypes.bool,
}

export default OptionCard
