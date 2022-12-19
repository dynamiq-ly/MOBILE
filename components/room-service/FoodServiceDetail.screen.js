import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'
import PlusMinusCard from 'components/cards/PlusMinusCard'

import { useCallback, useState } from 'react'
import { LogBox, View as Gap, RefreshControl } from 'react-native'
import { Image } from 'styles/image.module'

import {
  View,
  HFLine,
  ButtonWrapperDetail,
  SafeAreaRowWrapperDetail,
} from 'styles/detail.module'

import { baseUrl, __query } from 'hooks/useApi'
import { useQuery } from 'react-query'

export default function ({ route }) {
  const { _data, _id } = route.params

  const { data, refetch } = useQuery(
    ['@food-service-plate', _id],
    () => foodServicePlateFetcher(_id),
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
    <View>
      <AreaView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <Image
          source={{
            uri: `${baseUrl}storage/room-service/food-service/${data.plate_image}`,
          }}
        />
        <Gap style={{ marginBottom: 10, marginTop: 8 }} />
        <SafeAreaRowWrapperDetail>
          <Text
            content={data.plate_name}
            weight={700}
            up={'cap'}
            size={24}
            style={{ width: '90%' }}
          />
          <Text
            content={`${data.plate_price}$`}
            weight={600}
            size={21}
            color={'dominant'}
          />
        </SafeAreaRowWrapperDetail>
        <Text
          content={data.plate_descripiton}
          size={16}
          color={'gray'}
          style={{ marginTop: 10 }}
        />
        {data.supplements.length > 0 && (
          <>
            <HFLine />
            <Text content={'suplements'} weight={500} size={18} up={'cap'} />

            {data.supplements.map((el, key) => {
              return (
                <PlusMinusCard
                  key={key}
                  title={el.supplement_name}
                  price={el.supplement_price}
                />
              )
            })}
          </>
        )}
        {data.plate_variance && (
          <>
            <HFLine />
            <Text content={'variance'} weight={500} size={18} up={'cap'} />
            <Gap
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                flexWrap: 'wrap',
              }}>
              {data.plate_variance.split(',').map((el, key) => (
                <Gap
                  key={key}
                  style={{
                    backgroundColor: '#fffffe',
                    marginRight: 5,
                    borderRadius: 5,
                    paddingVertical: 2,
                    paddingHorizontal: 10,
                    marginBottom: 10,
                  }}>
                  <Text size={16} content={el} />
                </Gap>
              ))}
            </Gap>
          </>
        )}
        <Gap style={{ marginBottom: 24 }} />
      </AreaView>
      <ButtonWrapperDetail>
        <Button title={'add to cart'} />
      </ButtonWrapperDetail>
    </View>
  )
}

let foodServicePlateFetcher = function (id) {
  return __query
    .get(`api/room-service/food-service/plate/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
