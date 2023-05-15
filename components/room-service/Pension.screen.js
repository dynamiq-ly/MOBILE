import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import NotFound from 'components/notFound/NotFound'

import { __query, baseUrl } from 'hooks/useApi'
import { useQuery } from 'react-query'
import { View } from 'styles/detail.module'
import { useCallback, useState } from 'react'
import { Image } from '~/styles/image.module'
import { FlatList, LogBox, RefreshControl, TouchableOpacity, Image as RNImg, View as Gap } from 'react-native'

import { StyledDetailedCardView } from '~/styles/cards.module'

export default function PensionScreen() {
  const { data, refetch, isFetched, isError } = useQuery('@pensions', pensionFetcher, {
    refetchOnMount: true,
    initialData: [],
  })

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <View>
      {data.length === 0 ? (
        <NotFound killProcess={(isFetched && data.length === 0) || isError} />
      ) : (
        <FlatList
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
          data={data}
          style={{ paddingHorizontal: 16 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              key={item.id}
              title={item.pension_name}
              price={item.pension_price}
              kids={item.pension_price_kids}
              image={`${baseUrl}storage/rooms/pension/${item.pension_image}`}
              description={item.pension_description.length > 70 ? `${item.pension_description.slice(0, 70)}...` : item.pension_description}
            />
          )}
          ListHeaderComponent={
            <>
              <Image
                style={{ marginBottom: 15 }}
                source={{
                  uri: 'https://th.bing.com/th/id/OIP.yh7rfQdb66OiuIt7CnWkxQHaFj?pid=ImgDet&rs=1',
                }}
              />
              <Text style={{ marginBottom: 24 }} content={'If you wish to upgrade your pension our hotel gives you multiple choices and options to choose from.'} size={18} />
            </>
          }
        />
      )}
    </View>
  )
}

let pensionFetcher = function () {
  return __query('api/pension')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)

const Card = ({ image, title, price, kids, description }) => {
  return (
    <StyledDetailedCardView style={{ minHeight: 82 }}>
      <RNImg source={{ uri: image }} style={{ width: 82, height: '100%' }} />
      <Gap style={{ overflow: 'hidden', padding: 5, flex: 1 }}>
        <Text content={title} size={18} weight={600} up={'cap'} />
        <Gap style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
          <Gap style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <Icon name='ri-currency-line' size={18} />
            <Text content={`Price: ${price}`} />
          </Gap>
          <Gap style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <Icon name='ri-emotion-happy-line' size={18} />
            <Text content={`Kids Price: ${kids}`} />
          </Gap>
        </Gap>
        <Text content={description} color={'gray'} />
      </Gap>
    </StyledDetailedCardView>
  )
}
