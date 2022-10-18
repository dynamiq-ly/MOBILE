import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'

import { useQuery } from 'react-query'
import { __query } from 'hooks/useApi'
import { LogBox } from 'react-native'

export default function SafetyDetail({ route }) {
  const { _id, _data } = route.params

  const { data, status } = useQuery(
    ['@measures-detail', _id],
    () => fetchMeasuresById(_id),
    {
      refetchOnMount: true,
      initialData: _data,
    }
  )

  return (
    <AreaView>
      {status === 'loading' && <Text content={''} />}
      {status === 'success' && <Text content={data.measure_content} />}
    </AreaView>
  )
}

let fetchMeasuresById = function (id) {
  return __query
    .get(`api/measures/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreLogs(['Setting a timer'])
