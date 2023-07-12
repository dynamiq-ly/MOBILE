import styled from 'styled-components'

export const StyledIconly = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.rounded};
  background: ${({ theme, color = undefined }) => (color ? theme.core.button[`variant_${color}`] : 'transparent')};
`
