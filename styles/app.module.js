import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { pixelSizeVertical, pixelSizeHorizontal } from 'utils/normalization'

export const SafeArewContainer = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.primary.accent_200};
`

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.primary.accent_200};
  padding: ${pixelSizeVertical(14)}px ${pixelSizeHorizontal(14)}px;
`
