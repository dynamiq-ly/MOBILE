import styled from 'styled-components'

export const StyledButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: ${({ h = '36px' }) => h};
  max-height: ${({ h = '36px' }) => h};
  min-height: 24px;
  gap: ${({ theme }) => theme.gap.sm};
  padding: 0 ${({ theme }) => theme.gap.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme, color = 'neutral' }) => theme.core.button[`variant_${color}`]};
`
