import styled from 'styled-components'

export const StyledText = styled.Text`
  text-align: ${({ align = 'left' }) => align};
  font-size: ${({ theme, size = 6 }) => theme.fontSize(size)};
  color: ${({ theme, color = 'main' }) => theme.core.text[`variant_${color}`]};
  font-family: ${({ theme, family = 'rg' }) => theme.fontFamily(theme.fontWeight[family])};
  ${({ theme, size = 6, line }) => line && `line-height: ${theme.fontSize(size * line)};`}
  ${({ t = undefined }) => t && `text-transform: ${t}`}
`
