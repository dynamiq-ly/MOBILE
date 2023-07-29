/* packages */
import PropTypes from 'prop-types'
import { Pressable, View } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useCallback, useMemo, useRef, useState } from 'react'

/* components */
import { Text } from '@/common'

/* styles */
import { useTheme } from 'styled-components'

const Bottom = ({ handleSheetChange, triggerElement, children = <Text>Hello Sheet</Text> }) => {
  const theme = useTheme()
  const bottomSheetModalRef = useRef(null)
  const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], [])

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={handlePresentModalPress}>{triggerElement}</Pressable>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        handleStyle={{ backgroundColor: theme.core.background['variant_view'], borderTopStartRadius: 14, borderTopRightRadius: 14 }}
        backgroundStyle={{ backgroundColor: theme.core.background['variant_view'] }}
        containerStyle={{ backgroundColor: '#12121225' }}>
        {children}
      </BottomSheetModal>
    </View>
  )
}

Bottom.propTypes = {
  triggerElement: PropTypes.node.isRequired,
  handleSheetChange: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Bottom
