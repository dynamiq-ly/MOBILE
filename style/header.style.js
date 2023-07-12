import styled from 'styled-components'

export const StyledSafeHeader = styled.View`
  background: ${({ theme, background = 'view' }) => theme.core.background[`variant_${background}`]};
`

export const StyledHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.sm};
  padding: 0px ${({ theme }) => theme.gap.md};
  height: ${({ theme }) => theme.fontSize(22)};
`

export const StyledTitle = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.fontSize(22)};
`

export const StyledBox = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  width: ${({ theme }) => theme.fontSize(22)};
  align-items: ${({ align = true }) => (align ? 'flex-start' : 'flex-end')};
`
