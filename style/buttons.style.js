import styled from 'styled-components'

export const StyledButtonGroupView = styled.View`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => `${theme.core.text['variant_sub']}50`};
`

export const StyledButtonGroupScrolledContainer = styled.ScrollView`
  overflow: hidden;
  flex-direction: row;
  height: ${({ theme }) => theme.fontSize(19)};
  background: ${({ theme }) => theme.core.background['variant_container']};
`

export const StyledButtonGroupContainer = styled.View`
  overflow: hidden;
  flex-direction: row;
  height: ${({ theme }) => theme.fontSize(19)};
  background: ${({ theme }) => theme.core.background['variant_container']};
`

export const StyledButtonItem = styled.Pressable`
  flex: 1;
  border: none;
  align-items: center;
  justify-content: center;
  padding: 0px ${({ theme }) => theme.padding.md};
  background: ${({ theme, selected = false }) => (selected ? theme.core.button['variant_neutral'] : theme.core.button['variant_secondary'])};
`
