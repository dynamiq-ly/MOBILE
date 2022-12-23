import { useCallback, useState } from 'react'
import { GridLayout } from 'styles/grid.module'
import { __query, baseUrl } from 'hooks/useApi'
import { LogBox, RefreshControl, Image } from 'react-native'
import {
  StyledClipBoardButton,
  BoxIcon,
  BoxText,
} from 'components/connectivity/Clibboardbutton'

import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import WineCard from 'components/cards/WineCard'

import { useQuery } from 'react-query'

const MenuBarDetails = ({ navigation, route }) => {
  const { _id, _data, _name } = route.params

  const { data, refetch } = useQuery(
    ['@bar-detail-menu-drinks', _id],
    () => barsMenuDrinksFetcher(_id),
    {
      refetchOnMount: true,
      initialData: _data,
    }
  )

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <AreaView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      <GridLayout>
        {data.map((el) => {
          return ['beer', 'soda'].findIndex(
            (item) => item === _name.toLowerCase()
          ) !== -1 ? (
            <StyledClipBoardButton
              key={el.id}
              style={{ width: '100%' }}
              activeOpacity={9}>
              <Image
                style={{ width: 52, height: 52 }}
                source={{
                  uri: `${baseUrl}storage/bars/drinks/${el.bar_drink_image}`,
                }}
              />
              <BoxText>
                <Text
                  content={el.bar_drink_name}
                  weight={600}
                  up={'cap'}
                  size={18}
                />
                <Text
                  content={`${el.bar_drink_price}$`}
                  color={'gray'}
                  size={16}
                />
              </BoxText>
            </StyledClipBoardButton>
          ) : (
            <WineCard
              key={el.id}
              title={el.bar_drink_name}
              image={`${baseUrl}storage/bars/drinks/${el.bar_drink_image}`}
              origin={`${el.drink_bar_strengh}% alcohol`}
              price={`${el.bar_drink_price}$`}
              onPress={() =>
                navigation.navigate('menu-tab-bar-menu-drink-detail', {
                  _name: el.bar_drink_name,
                  _data: el,
                })
              }
            />
          )
        })}
      </GridLayout>
    </AreaView>
  )
}

let barsMenuDrinksFetcher = function (id) {
  return __query
    .get(`api/bar/menu/drinks/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)

export default MenuBarDetails
