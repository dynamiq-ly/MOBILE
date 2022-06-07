import AreaView from '~/utils/TabAreaView'
import { Image } from 'styles/image.module'
import Text from 'components/text/Text'
import { StyledFullDetailedCardContent } from '~/styles/cards.module'

const MenuListDetailsScreen = ({ route }) => {
  const { _data } = route.params
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTcNy1Prx33_8N0lgoeo-1XpFjW7bjwZPKA&usqp=CAU',
        }}
      />
      <StyledFullDetailedCardContent>
        <Text content={_data.title} size={20} weight={600} up={'cap'} />
        <Text
          content={_data.price}
          size={16}
          weight={600}
          up={'cap'}
          color={'dominant'}
        />
      </StyledFullDetailedCardContent>

      <Text
        content={_data.description}
        size={16}
        weight={600}
        up={'cap'}
        color={'gray'}
      />
    </AreaView>
  )
}

export default MenuListDetailsScreen
