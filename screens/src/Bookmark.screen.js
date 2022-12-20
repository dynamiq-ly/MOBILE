import AreaView from 'utils/TabAreaView'
import {
  StyledBookMark,
  StyledGalleryPhoto,
  StyledGrid,
  StyledThmubnailOverlay,
  StyledThumbnail,
} from 'styles/bookMark.module'
import Text from 'components/text/Text'
export default function BookmarkScreen({ navigation }) {
  return (
    <AreaView mode={'dark'}>
      <StyledGrid>
        <StyledBookMark>
          <StyledGalleryPhoto
            onPress={() =>
              navigation.navigate('menu-tab-stack-bookmark-details', {
                _name: 'all',
                _data: Object.keys(bookmarked_data)
                  .map((el) => bookmarked_data[el])
                  .flat(1),
              })
            }
          >
            {Object.keys(bookmarked_data)
              .map((el) => bookmarked_data[el])
              .flat(1)
              .map((el, key) => (
                <StyledThumbnail
                  key={key}
                  source={{
                    uri: el.image,
                  }}
                >
                  <StyledThmubnailOverlay />
                </StyledThumbnail>
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
        {Object.keys(bookmarked_data).map((el, index) => (
          <StyledBookMark key={index}>
            <StyledGalleryPhoto
              onPress={() =>
                navigation.navigate('menu-tab-stack-bookmark-details', {
                  _name: el.replaceAll('_', ' '),
                  _data: bookmarked_data[el],
                })
              }
            >
              {bookmarked_data[el].map((elem, key) => (
                <StyledThumbnail
                  key={key}
                  source={{
                    uri: elem.image,
                  }}
                >
                  <StyledThmubnailOverlay />
                </StyledThumbnail>
              ))}
            </StyledGalleryPhoto>
            <Text
              align={'center'}
              content={el.replaceAll('_', ' ')}
              up={'up'}
              size={18}
              weight={600}
              style={{ marginTop: 8 }}
            />
          </StyledBookMark>
        ))}
      </StyledGrid>
    </AreaView>
  )
}

const bookmarked_data = {
  point_of_interest: [
    {
      image:
        'https://carthagemagazine.com/wp-content/uploads/2021/10/Grand-Port-of-Carthage.jpg',
    },
    {
      image: 'https://p6.storage.canalblog.com/66/96/525997/67513186.jpg',
    },
    {
      image:
        'https://www.tunisiatourism.info/uploads/editor/67933562-1600278583.jpg',
    },
  ],

  excursions: [
    {
      image: 'https://media.www.kent.ac.uk/se/18831/iStock-503925194_2000w.jpg',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/80/Dressage_Arabian_%282938612678%29.jpg',
    },
  ],
}
