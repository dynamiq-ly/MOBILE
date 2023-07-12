import styled from 'styled-components'

export const StyledSimpleCard = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.core.background.variant_container};
  padding-top: ${({ theme }) => theme.padding.md};
  padding-left: ${({ theme }) => theme.padding.md};
  padding-right: ${({ theme }) => theme.padding.md};
  padding-bottom: ${({ theme }) => theme.padding.sm};
`
