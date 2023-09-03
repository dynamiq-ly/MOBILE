import styled from 'styled-components'

export const StyledEditField = styled.View`
  gap: ${({ theme }) => theme.gap.sm};
  border-radius: ${({ theme }) => theme.radius.md};
  ${({ theme, filled }) =>
    filled &&
    `
    padding: ${theme.gap.md};
    background: ${theme.core.background[`variant_container`]};
    `}
`

export const StyledInput = styled.TextInput`
  font-family: 'Helvetica-Regular';
  border-radius: ${({ theme }) => theme.radius.sm};
  height: ${({ multiline = false, rows = 1 }) => (multiline ? `${rows * 36}px` : '36px')};
  max-height: ${({ multiline = false, rows = 1 }) => (multiline ? `${rows * 36}px` : '36px')};
  background: ${({ theme, background = 'container' }) => theme.core.background[`variant_${background}`]};
  padding: ${({ theme, multiline = false }) => (multiline ? theme.gap.md : '0px')} ${({ theme }) => theme.gap.md};
  border: 1px solid ${({ theme, error = false }) => (error ? `${theme.core.text['variant_error']}50` : `${theme.core.text['variant_sub']}50`)};
`

export const StyledWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
