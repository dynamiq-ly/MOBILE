/* packages */
import PropTypes from 'prop-types'
import { Pressable, View } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useCallback, useMemo, useRef } from 'react'

/* components */
import { Text } from '@/common'

/* styles */

const Bottom = ({ triggerElement, children = <Text>Hello Sheet</Text> }) => {
  const bottomSheetModalRef = useRef(null)
  const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], [])

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={handlePresentModalPress}>{triggerElement}</Pressable>
      <BottomSheetModal ref={bottomSheetModalRef} index={1} snapPoints={snapPoints}>
        {children}
      </BottomSheetModal>
    </View>
  )
}

Bottom.propTypes = {
  triggerElement: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Bottom
