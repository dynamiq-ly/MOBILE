import styled from 'styled-components'

export const StyledSimpleCard = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.core.background.variant_container};
  padding-top: ${({ theme }) => theme.padding.md};
  padding-left: ${({ theme }) => theme.padding.md};
  padding-right: ${({ theme }) => theme.padding.md};
  padding-bottom: ${({ theme }) => theme.padding.sm};
`

export const StyledFullCard = styled.TouchableOpacity`
  flex: 1;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: ${({ h = 100 }) => `${h}px`};
  border-radius: ${({ theme, radii = 'sm' }) => theme.radius[radii]};
  background: ${({ theme }) => theme.core.background.variant_container};
`

export const StyledCardOverlay = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #12121240;
  padding: ${({ theme }) => theme.padding.md};
  ${({ item }) => {
    switch (item) {
      case 'start':
        return 'align-items: flex-start; justify-content: flex-start;'
      case 'center':
        return 'align-items: center; justify-content: center;'
      case 'end':
        return 'align-items: flex-start; justify-content: flex-end;'
    }
  }}
`