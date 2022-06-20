import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import NotFound from 'components/notFound/NotFound'

import { __query } from 'hooks/useApi'
import { useQuery } from 'react-query'
import { RefreshControl } from 'react-native'
import { useCallback, useState } from 'react'
import { fontPixel } from 'utils/normalization'
import { ButtonSafety, IconBox, TextBox } from 'styles/safety.module'

export default function SafetyScreen({ navigation }) {
  const { data, refetch, isError } = useQuery(
    '@measures',
    fetchSafetyMeasures,
    {
      casheTime: 1800,
      initialData: [],
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
      {data.length === 0 ? (
        <NotFound killProcess={isError} />
      ) : (
        data.map((el) => {
          return (
            <ButtonSafety
              key={el.id}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('menu-tab-stack-safety-detail', {
                  _name: el.measure_name,
                  _data: el,
                })
              }>
              <IconBox>
                <Icon
                  name={el.measure_icon}
                  size={fontPixel(24)}
                  color={'#fffffe'}
                />
              </IconBox>
              <TextBox>
                <Text
                  content={el.measure_name}
                  weight={500}
                  size={18}
                  up={'cap'}
                />
              </TextBox>
              <Icon
                name={'ri-arrow-right-s-line'}
                size={fontPixel(24)}
                color={'#9ca3af'}
              />
            </ButtonSafety>
          )
        })
      )}
    </AreaView>
  )
}

let fetchSafetyMeasures = function () {
  return __query
    .get('/api/measures')
    .then((res) => {
      if (res.status === 200) return res.data
      else throw new Error('something went wrong')
    })
    .catch(() => {
      throw new Error('something went wrong')
    })
}

console.disableYellowBox = true
