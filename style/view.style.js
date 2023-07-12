import styled from 'styled-components'

/* view where we use insets hooks to validate our safe area */
export const SafeView = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.core.background.variant_view};
`

/**
 * @file scroll view used in View.jsx
 */
export const StyledScrollView = styled.ScrollView`
  padding: 0px ${({ theme }) => theme.gap.md};
  background: ${({ theme }) => theme.core.background.variant_view};
`

/**
 * @file falt list used in Flat.jsx
 */
export const StyledFlatList = styled.FlatList`
  background: ${({ theme }) => theme.core.background.variant_view};
`
