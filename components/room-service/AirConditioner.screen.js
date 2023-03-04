import Text from 'components/text/Text'
import AreaView from '~/utils/TabAreaView'
import Icon from 'react-native-remix-icon'

import { Image } from 'styles/image.module'
import { BoxIcon, BoxText, PhoneDirectoryRow } from 'styles/list.module'
import { View as NewView } from 'react-native'

import { __query } from 'hooks/useApi'
import { useQuery } from 'react-query'
import { useCallback, useState } from 'react'
import { LogBox, RefreshControl } from 'react-native'

export default function AirConditioner() {
  const { data, refetch, isFetched, isError } = useQuery('@airCondition', airConditionInstructionFetcher, {
    refetchOnMount: true,
    initialData: [],
  })

  const [refresh, setRefresh] = useState(false)

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  return (
    <AreaView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      <Image
        source={{
          uri: 'https://www.phillyaptrentals.com/wp-content/uploads/2020/04/Central-Air-Conditioning-scaled.jpg',
        }}
      />
      <NewView style={{ marginBottom: 15 }} />
      <Text size={18} content={'Our hotel room is provided with an AC for temperature control in your room.'} />
      <NewView style={{ marginBottom: 15 }} />
      <Text size={18} up={'up'} weight={600} content={'Air Conditioner Remote Controls & AC Settings: '} />
      <NewView style={{ marginBottom: 15 }} />

      {data.map((el) => (
        <PhoneDirectoryRow key={el.id} style={{ alignItems: 'center' }}>
          <BoxIcon>
            <Icon name={el.AirConditionnerWarning ? 'ri-error-warning-line' : 'ri-arrow-right-circle-fill'} color={el.AirConditionnerWarning ? '#EE4231' : '#212121'} />
          </BoxIcon>
          <BoxText>
            <Text color={'gray'} size={17} content={el.AirConditionnerInstruction} />
          </BoxText>
        </PhoneDirectoryRow>
      ))}
    </AreaView>
  )
}

let airConditionInstructionFetcher = function () {
  return __query
    .get('api/air-conditionner')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)
