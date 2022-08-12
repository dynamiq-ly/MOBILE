import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'
import Markdown, { MarkdownIt } from 'react-native-markdown-display'

import { useQuery } from 'react-query'
import { baseUrl, __query } from 'hooks/useApi'
import { useSpring } from '@react-spring/native'
import { View as Gap, LogBox } from 'react-native'
import { FADE_IN_DONW, FADE_IN_UP } from 'animation/FADE_IN'

import {
  View,
  SafeAreaRowWrapperDetail,
  RadiusView,
} from 'styles/detail.module'

export default function SwimmingPoolDetails({ route }) {
  const { _id, _data } = route.params

  const { data } = useQuery(
    ['@swimming-pool-detail', _id],
    () => fetchSwimmingPoolById(_id),
    {
      refetchOnMount: true,
      initialData: _data,
    }
  )

  const springContent = useSpring({
    ...FADE_IN_UP.noOpacity,
  })

  const springCarousel = useSpring({
    ...FADE_IN_DONW.noOpacity,
  })

  return (
    <View>
      <CloseHeader />
      <Carsouel
        style={{ ...springCarousel }}
        imageArray={[
          {
            image: `${baseUrl}/storage/swimming-pool/images/${data.pool_image}`,
          },
        ]}
      />
      <RadiusView style={{ ...springContent }}>
        <AreaView contentInsetAdjustmentBehavior='automatic'>
          <Gap style={{ marginBottom: 10 }} />
          <Text content={data.pool_name} weight={700} up={'cap'} size={28} />
          <Gap style={{ marginBottom: 6 }} />
          <SafeAreaRowWrapperDetail
            style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
            <Icon name={'ri-user-line'} size={18} style={{ marginRight: 5 }} />
            <Text
              content={'This pool can hold up to '}
              color={'gray'}
              size={18}
            />
            <Text
              content={data.pool_capacity}
              color={'dominant'}
              weight={500}
              up={'cap'}
              size={18}
            />
            <Text content={' person'} size={18} color={'gray'} />
          </SafeAreaRowWrapperDetail>
          <Markdown markdownit={MarkdownIt({ typographer: true })}>
            {data.pool_description}
          </Markdown>
        </AreaView>
        <Gap style={{ marginBottom: 24 }} />
      </RadiusView>
    </View>
  )
}

const fetchSwimmingPoolById = function (id) {
  return __query(`api/swimming-pool/pools/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}

LogBox.ignoreAllLogs(true)