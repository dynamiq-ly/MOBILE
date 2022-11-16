import styled from 'styled-components'

export const StyledGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const StyledBookMark = styled.View`
  width: 160px;
  margin-bottom: 24px;
  align-item: center;
  justify-content: center;
`

export const StyledGalleryPhoto = styled.TouchableOpacity`
  width: 160px;
  height: 160px;
  max-height: 160px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.secondary.accent_100};
`

export const StyledThumbnail = styled.ImageBackground`
  height: 80px;
  width: 80px;
`
