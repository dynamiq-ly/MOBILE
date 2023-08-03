/* packages */
import { useState } from 'react'
import { View } from 'react-native'
import Animated from 'react-native-reanimated'

/* modules */
import { Container, FlatList } from '@/shared'

/* components */
import { Div, Image, Text } from '@/common'
import { ButtonGroup, Card, Pager } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

export default ({ route }) => {
  const theme = useTheme()

  const { data } = route.params

  return (
    <Container stickyHeaderIndices={[0]} padding={false}>
      <Pager slider={data.images} interval={5000} />

      <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.sb }}>
        <Text>TESTING</Text>
      </View>
    </Container>
  )
}
