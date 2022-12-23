import {
  StyledBookMarkDetailsItem,
  StyledGridImage,
  StyledBookMarkDetails,
} from '~/styles/bookMark.module'
import AreaView from '~/utils/TabAreaView'

const BookmarkDetails = ({ route }) => {
  const { _data } = route.params

  console.log(_data)

  return (
    <AreaView>
      <StyledGridImage>
        {_data.map((el, key) => (
          <StyledBookMarkDetailsItem key={key} m={key % 3 !== 0}>
            <StyledBookMarkDetails
              source={{
                uri: el.image,
              }}
            />
          </StyledBookMarkDetailsItem>
        ))}
      </StyledGridImage>
    </AreaView>
  )
}

export default BookmarkDetails
