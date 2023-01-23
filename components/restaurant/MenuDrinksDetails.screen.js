import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { __query } from '~/hooks/useApi'
import { Image } from 'styles/image.module'
import { LogBox, RefreshControl, View } from 'react-native'
import { SafeAreaRowWrapperDetail } from 'styles/detail.module'

const MenuDrinksDetails = ({ route }) => {
  const { _id, _image, _data } = route.params

  const { data, refetch } = useQuery(
    ['@restaurant-drink-menu-soft', _id],
    () => restaurantDrinkMenuSoft(_id),
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
      <Image
        source={{
          uri: _image,
        }}
      />
      <View style={{ marginBottom: 20 }} />
      {data.map((el, key) => {
        return (
          <View key={key}>
            <SafeAreaRowWrapperDetail>
              <Text
                size={21}
                up={'cap'}
                weight={600}
                content={el.soft_drink_name}
              />
              <Text
                size={18}
                weight={600}
                color={'dominant'}
                content={new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(el.soft_drink_price)}
              />
            </SafeAreaRowWrapperDetail>
            <Text
              size={16}
              up={'cap'}
              weight={400}
              color={'gray'}
              content={el.soft_drink_variants}
            />
            <View style={{ marginBottom: 10 }} />
          </View>
        )
      })}
    </AreaView>
  )
}

let restaurantDrinkMenuSoft = function (id) {
  return __query
    .get(`api/restaurant/drinks/soft=${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)

export default MenuDrinksDetails
