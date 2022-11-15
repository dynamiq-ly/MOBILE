import AreaView from 'utils/TabAreaView'
import {
  StyledBookMark,
  StyledGalleryPhoto,
  StyledGrid,
  StyledThumbnail,
} from '~/styles/bookMark.module'
import Text from 'components/text/Text'
export default function BookmarkScreen() {
  return (
    <AreaView mode={'dark'}>
      <StyledGrid>
        <StyledBookMark>
          <StyledGalleryPhoto>
            {[...Array(3)].map((_, key) => (
              <StyledThumbnail
                key={key}
                source={{
                  uri: 'https://vastphotos.com/files/uploads/assets/ubermenu_thumb_landscapes.jpg',
                }}
              />
            ))}
          </StyledGalleryPhoto>
          <Text
            align={'center'}
            content={'all'}
            up={'up'}
            size={18}
            weight={600}
            style={{ marginTop: 8 }}
          />
        </StyledBookMark>
        <StyledBookMark>
          <StyledGalleryPhoto>
            {[...Array(3)].map((_, key) => (
              <StyledThumbnail
                key={key}
                source={{
                  uri: 'https://vastphotos.com/files/uploads/assets/ubermenu_thumb_landscapes.jpg',
                }}
              />
            ))}
          </StyledGalleryPhoto>
          <Text
            align={'center'}
            content={'point of interest'}
            up={'up'}
            size={18}
            weight={600}
            style={{ marginTop: 8 }}
          />
        </StyledBookMark>
        <StyledBookMark>
          <StyledGalleryPhoto>
            {[...Array(3)].map((_, key) => (
              <StyledThumbnail
                key={key}
                source={{
                  uri: 'https://vastphotos.com/files/uploads/assets/ubermenu_thumb_landscapes.jpg',
                }}
              />
            ))}
          </StyledGalleryPhoto>
          <Text
            align={'center'}
            content={'entertainment'}
            up={'up'}
            size={18}
            weight={600}
            style={{ marginTop: 8 }}
          />
        </StyledBookMark>
      </StyledGrid>
    </AreaView>
  )
}
