import styled from 'styled-components'
import { Dimensions } from 'react-native'

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
export const StyledBookMarkDetailsItem = styled.TouchableOpacity`
  width: 30%;
  height: ${Dimensions.get('screen').width / 3.3}px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 5%;
  margin-left: ${({ m }) => (m ? '5%' : '0%')};
`
export const StyledBookMarkDetails = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`
export const StyledGridImage = styled.View`
  flex-wrap: wrap;
  margin-top: 14px;
  flex-direction: row;
`
