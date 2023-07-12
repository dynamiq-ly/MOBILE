import styled from 'styled-components'

export const StyledDrawerItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.sb};
  height: ${({ theme }) => theme.fontSize(21)};
  padding: 0px ${({ theme }) => theme.padding['lg']};
`
