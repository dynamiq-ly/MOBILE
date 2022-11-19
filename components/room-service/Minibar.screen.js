import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'

import { useCallback, useState } from 'react'
import { __query } from 'hooks/useApi'

import { useQuery } from 'react-query'
import { mini_bar } from 'mock/mini_bar'
import { Image } from 'styles/image.module'
import { TextArea } from 'components/input/Input'
import { FlatList, LogBox, RefreshControl } from 'react-native'
import { SpaceBetweenRow, StyledLaundryRow } from 'styles/list.module'

export default function MiniBar() {
  const { data } = useQuery(
    '@room-service-mini-bar',
    roomServiceMiniBarFetcher,
    {
      refetchOnMount: true,
    }
  )

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

      <>
        <StyledLaundryRow>
          <Text content={'Alcohols'} weight={600} up={'up'} size={21} />
          {data
            .filter((el) => el.min_bar_item_type === 'alcohol')
            .map((el, key) => (
              <SpaceBetweenRow key={key}>
                <Text content={el.mini_bar_item_name} size={16} up={'cap'} />
                <Text
                  content={`${el.mini_bar_item_price}$`}
                  color={'dominant'}
                  weight={600}
                  size={16}
                />
              </SpaceBetweenRow>
            ))}
        </StyledLaundryRow>
      </>

      <>
        <StyledLaundryRow>
          <Text content={'drinks'} weight={600} up={'up'} size={21} />
          {data
            .filter((el) => el.min_bar_item_type === 'soft')
            .map((el, key) => (
              <SpaceBetweenRow key={key}>
                <Text content={el.mini_bar_item_name} size={16} up={'cap'} />
                <Text
                  content={`${el.mini_bar_item_price}$`}
                  color={'dominant'}
                  weight={600}
                  size={16}
                />
              </SpaceBetweenRow>
            ))}
        </StyledLaundryRow>
      </>

      <>
        <StyledLaundryRow>
          <Text content={'snacks'} weight={600} up={'up'} size={21} />
          {data
            .filter((el) => el.min_bar_item_type === 'snacks')
            .map((el, key) => (
              <SpaceBetweenRow key={key}>
                <Text content={el.mini_bar_item_name} size={16} up={'cap'} />
                <Text
                  content={`${el.mini_bar_item_price}$`}
                  color={'dominant'}
                  weight={600}
                  size={16}
                />
              </SpaceBetweenRow>
            ))}
        </StyledLaundryRow>
      </>

      <>
        <Text
          size={16}
          style={{ marginTop: 10 }}
          color={'gray'}
          content={
            'You can request specific items to be added to you mini bar (V.A.T included). '
          }
        />
        <TextArea placeholder={'content of request'} icon={'ri-message-line'} />
        <Button title={'request'} />
      </>
    </AreaView>
  )
}

let roomServiceMiniBarFetcher = function () {
  return __query
    .get('api/room-service/mini-bar')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}
