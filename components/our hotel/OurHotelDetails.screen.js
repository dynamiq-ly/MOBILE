import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'

import { palette } from 'themes/palette'
import { View as Gap } from 'react-native'
import {
  ButtonWrapperDetail,
  HFLine,
  RadiusView,
  SafeAreaRowWrapperDetail,
  View,
} from 'styles/detail.module'

export default function OurHotelScreenDetails({ route }) {
  const { _data } = route.params

  return (
    <View>
      <CloseHeader />
      <Carsouel imageArray={image_array} />
      <RadiusView>
        <AreaView mode={'light'}>
          <SafeAreaRowWrapperDetail style={{ alignItems: 'flex-start' }}>
            <Gap style={{ flex: 1 }}>
              <Text
                content={_data.hotel_name}
                weight={600}
                up={'cap'}
                size={24}
              />
            </Gap>
            <Gap
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <Text
                size={21}
                up={'cap'}
                weight={600}
                content={`${_data.hotel_rating}`}
              />
              <Gap>
                <Text
                  size={21}
                  color={'dominant'}
                  up={'cap'}
                  weight={500}
                  content={'★'}
                />
              </Gap>
            </Gap>
          </SafeAreaRowWrapperDetail>
          <Gap style={{ marginTop: 10 }} />
          <Text size={16} color={'gray'} content={_data.hotel_discription} />

          <>
            {_data.hotel_features && (
              <>
                <HFLine />
                <Text content={'features'} weight={500} size={18} up={'cap'} />
                <Gap
                  style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  {_data.hotel_features.split(',').map((el, key) => (
                    <Gap
                      key={key}
                      style={{
                        backgroundColor: '#fffffe',
                        marginTop: 10,
                        marginRight: 5,
                        borderRadius: 5,
                        paddingVertical: 2,
                        paddingHorizontal: 10,
                      }}>
                      <Text size={16} content={el} />
                    </Gap>
                  ))}
                </Gap>
              </>
            )}
          </>
          <>
            {_data.hotel_features && (
              <>
                <HFLine />
                <Text content={'comments'} weight={500} size={18} up={'cap'} />
                <Gap
                  style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}></Gap>
              </>
            )}
          </>
          <Gap style={{ marginBottom: 42 }} />
        </AreaView>
      </RadiusView>

      <ButtonWrapperDetail>
        <Gap style={{ marginTop: 10, marginBottom: 24 }}>
          <Text content={'starting from'} weight={600} up={'cap'} size={18} />
          <Text
            content={`${_data.hotel_price}`}
            color={'dominant'}
            weight={800}
            up={'cap'}
            size={24}
          />
        </Gap>
        <Gap
          style={{
            width: '40%',
            marginTop: 10,
            borderRadius: 10,
            marginBottom: 24,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: palette.primary.accent_900,
          }}>
          <Text
            content={'book'}
            color={'white'}
            align={'center'}
            weight={600}
            up={'cap'}
            size={18}
          />
          <Text
            content={'now'}
            color={'white'}
            align={'center'}
            weight={600}
            up={'cap'}
            size={18}
          />
        </Gap>
      </ButtonWrapperDetail>
    </View>
  )
}

const image_array = [
  {
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/80457331.jpg?k=b19f0b4dac160f9a2f912ab37672de51e7b6b92b389d11dfe565b2c25114c678&o=&hp=1',
  },
  {
    image:
      'https://cdn2.tqsan.com/lacigale/wp-content/uploads/2016/07/thalasso-bloc.jpg.webp',
  },
  {
    image:
      'https://cdn2.tqsan.com/booking/la-cigale/Hotel-4150-20150119-115746.jpg',
  },
]
