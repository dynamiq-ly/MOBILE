import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

import { mini_bar } from 'mock/mini_bar'
import { Image } from 'styles/image.module'
import { SpaceBetweenRow, StyledLaundryRow } from 'styles/list.module'

export default function MiniBar() {
  return (
    <AreaView>
      <Image
        source={{
          uri: 'https://lodgingmagazine.com/wp-content/uploads/2017/10/Bartech-Hotel-Minibar.jpg',
        }}
      />
      <Text
        size={18}
        style={{ marginTop: 10, marginBottom: 14 }}
        content={
          'the mini bar is filled up with goodies, you consume will be filled in again every day.'
        }
      />

      {mini_bar.map((el, key) => (
        <StyledLaundryRow key={key}>
          <Text
            content={el.mini_bar_category}
            weight={600}
            up={'up'}
            size={21}
          />
          {el.mini_bar_items.map((el, key) => (
            <SpaceBetweenRow key={key}>
              <Text content={el.item_name} size={16} up={'cap'} />
              <Text
                content={`${el.item_price}$`}
                color={'dominant'}
                weight={600}
                size={16}
              />
            </SpaceBetweenRow>
          ))}
        </StyledLaundryRow>
      ))}
    </AreaView>
  )
}
