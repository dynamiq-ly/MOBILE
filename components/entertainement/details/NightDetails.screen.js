import moment from 'moment'
import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'

import { useQuery } from 'react-query'
import { Linking, TouchableOpacity, View as Gap } from 'react-native'
import { baseUrl, __query } from 'hooks/useApi'
import { useSpring } from '@react-spring/native'
import { FADE_IN_DONW, FADE_IN_UP } from 'animation/FADE_IN'
import {
  View,
  RadiusView,
  HFLine,
  SafeAreaRowWrapperDetail,
} from 'styles/detail.module'

import YoutubePlayer from 'react-native-youtube-iframe'

export default function DetailScreen({ route }) {
  const { _id, _data } = route.params

  const springContent = useSpring({
    ...FADE_IN_UP.noOpacity,
  })

  const springCarousel = useSpring({
    ...FADE_IN_DONW.noOpacity,
  })

  const { data } = useQuery(
    ['@night-shows-details', _id],
    () => fetchEntertainementById(_id),
    {
      initialData: _data,
      refetchOnMount: true,
    }
  )

  return (
    <View>
      <CloseHeader />
      <Carsouel
        style={{ ...springCarousel }}
        imageArray={[
          ...data.images.map((el) => ({
            image: `${baseUrl}storage/entertainement/${el.image}`,
          })),
        ]}
      />
      <RadiusView style={{ ...springContent }}>
        <AreaView mode={'light'}>
          <Gap style={{ marginBottom: 10 }} />
          <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
            <Text
              content={data.entertainements_title}
              weight={700}
              up={'cap'}
              size={28}
            />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(data.night_shows.night_show_web_link)
              }>
              <Icon name={'ri-external-link-line'} />
            </TouchableOpacity>
          </SafeAreaRowWrapperDetail>
          <Text
            content={`duration: ${data.entertainements_duration}h`}
            up={'cap'}
          />
          <Text
            content={data.entertainements_description}
            color={'gray'}
            style={{ marginTop: 16, marginBottom: 16 }}
          />

          <>
            <Gap
              style={{
                maxHeight: 200,
                overflow: 'hidden',
                marginBottom: 16,
              }}>
              <YoutubePlayer
                height={200}
                play={false}
                videoId={data.night_shows.night_show_video_link}
              />
            </Gap>
          </>

          <>
            <HFLine />
            <Text content={'next schedule'} weight={500} size={18} up={'cap'} />
            <Gap style={{ marginBottom: 10 }} />
            {data.timings.map((el) => (
              <SafeAreaRowWrapperDetail
                key={el.id}
                style={{ alignItems: 'center' }}>
                <Text
                  content={moment
                    .unix(el.entertainement_timings_date)
                    .format('ll')}
                  weight={600}
                  color={'gray'}
                />
                <Text
                  content={moment
                    .unix(el.entertainement_timings_date)
                    .format('LT')}
                  weight={600}
                  color={'dominant'}
                />
              </SafeAreaRowWrapperDetail>
            ))}
          </>

          <Gap style={{ marginBottom: 24 }} />
        </AreaView>
      </RadiusView>
    </View>
  )
}

let fetchEntertainementById = function (id) {
  return __query
    .get(`api/entertainement/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}
