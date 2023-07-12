import styled from 'styled-components'

export const StyledLoaderContainer = styled.View`
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.fontSize(21)};
  width: ${({ theme }) => theme.fontSize(21)};
  border-radius: ${({ theme }) => theme.radius.rounded};
`
