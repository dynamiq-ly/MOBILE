import styled from 'styled-components'

export const StyledGrid = styled.View`
  flex-wrap: wrap;
  margin-top: 14px;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledBookMark = styled.View`
  width: 170px;
  margin-bottom: 24px;
  align-item: center;
  justify-content: center;
`

export const StyledGalleryPhoto = styled.TouchableOpacity`
  width: 170px;
  height: 170px;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: 170px;
  border-radius: 12px;
  position: relative;
  flex-direction: row;
  background: ${({ theme }) => `${theme.secondary.accent_700}15`};
`

export const StyledThumbnail = styled.ImageBackground`
  height: 85px;
  width: 85px;
`

export const StyledThmubnailOverlay = styled.View`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => `${theme.primary.accent_900}40`};
`
