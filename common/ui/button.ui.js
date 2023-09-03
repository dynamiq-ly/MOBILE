import styled from 'styled-components'

export const StyledButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: ${({ h = '36px' }) => h};
  max-height: ${({ h = '36px' }) => h};
  min-height: 24px;
  gap: ${({ theme }) => theme.gap.sm};
  padding: 0 ${({ theme }) => theme.gap.md};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme, color = 'neutral' }) => theme.core.button[`variant_${color}`]};
  border: 1px solid ${({ theme, shadowColor = 'sub' }) => `${theme.core.text[`variant_${shadowColor}`]}`};
`
