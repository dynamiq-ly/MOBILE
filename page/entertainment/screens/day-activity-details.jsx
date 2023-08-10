import { useState } from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

/* modules */
import { Container } from '@/shared'

/* components */
import { Button, Div, Image, Text } from '@/common'
import { Accordion, Icon, Pager } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

export default () => {
  return (
    <Container safeArea={false}>
      <View></View>
    </Container>
  )
}
