import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'

import { View as NewView } from 'react-native'
import { Image } from 'styles/image.module'
import { fontPixel } from 'utils/normalization'
import { ButtonWrapperDetail, View } from 'styles/detail.module'
import { BoxIcon, BoxText, PhoneDirectoryRow } from 'styles/list.module'

import { __query } from 'hooks/useApi'
import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { LogBox, RefreshControl } from 'react-native'

export default function MainLaundryScreen({ navigation }) {
  const { data, refetch, isFetched, isError } = useQuery('@laundry', laundryInstructionFetcher, {
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
      <AreaView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
        <Image
          source={{
            uri: 'https://www.laundryluv.com/images/self-service-laundry/hero.png',
          }}
        />
        <NewView style={{ marginBottom: 15 }} />
        <Text up={'up'} size={18} weight={600} content={'instruction to use the hotel laundry service'} />

        {data.map((el) => (
          <PhoneDirectoryRow key={el.id} style={{ alignItems: 'center' }}>
            <BoxIcon>
              <Icon name={'ri-arrow-right-circle-fill'} size={fontPixel(18)} />
            </BoxIcon>
            <BoxText>
              <Text content={el.LaundryInstruction} color={'gray'} size={16} />
            </BoxText>
          </PhoneDirectoryRow>
        ))}
      </AreaView>
      <ButtonWrapperDetail>
        <Button title={'view menu'} icon={'ri-arrow-right-line'} onPress={() => navigation.navigate('menu-tab-stack-laundry-menu')} />
      </ButtonWrapperDetail>
    </View>
  )
}

let laundryInstructionFetcher = function () {
  return __query
    .get('api/laundry')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
