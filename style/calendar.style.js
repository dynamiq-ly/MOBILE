import styled from 'styled-components'

export const CalendarWrapper = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.gap.sm};
`

export const ClanedarSwipteButtonItem = styled.TouchableOpacity`
  flex: 1;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.core.background.variant_container};
  border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme.core.text['variant_info'] : `${theme.core.text['variant_sub']}50`)};
`
