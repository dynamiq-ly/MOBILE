import styled from 'styled-components'

export const StyleDiv = styled.View`
  gap: ${({ theme }) => theme.gap.md};
  padding: ${({ theme }) => theme.padding.sb};
  border-radius: ${({ theme, radii = 'sm' }) => theme.radius[radii]};
  background: ${({ theme, background = 'container' }) => theme.core.background[`variant_${background}`]};
`

export const StyledDivHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.md};
`
