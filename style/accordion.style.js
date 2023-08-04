import styled from 'styled-components'

export const AccordionContainer = styled.View`
  flex: 1;
  overflow: hidden;
  padding: 0px ${({ theme }) => theme.padding.md};
  border-radius: ${({ theme, radii = 'sm' }) => theme.radius[radii]};
  background: ${({ theme, bg = 'view' }) => theme.core.background[`variant_${bg}`]};
  ${({ theme, border = undefined }) => border && `border: 1px solid ${`${theme.core.text[`variant_${border}`]}50`};`}
`

export const AccordionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: ${({ theme }) => theme.fontSize(18)};
`
