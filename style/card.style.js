import styled from 'styled-components'

/* normal card */
export const StyledCardContainer = styled.TouchableOpacity`
  flex: 1;

  overflow: hidden;
  justify-content: space-between;
  
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.core.background.variant_container};

  border: 1px solid ${({ theme }) => `${theme.core.text['variant_sub']}50`};
  ${({theme, padding = true }) => padding && `padding: ${theme.padding.md};` }
  flex-direction: ${({ direction = 'row' }) => direction || 'row'};
`

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
  padding-bottom: ${({ theme }) => theme.padding.md};
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

export const StyledCardOptionLayer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: ${({ theme }) => theme.padding.md} 0px;
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