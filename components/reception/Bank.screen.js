import Icon from 'react-native-remix-icon'
import MapView, { Marker } from 'react-native-maps'

import { View as Gap, Image as RnImage } from 'react-native'
import { View } from 'styles/detail.module'

const cords = {
  latitude: 36.831199796782734,
  longitude: 10.160658088003666,
}

export default function BanksScreen() {
  return (
    <View>
      <MapView
        style={{ width: '100%', height: '70%' }}
        region={{
          ...cords,
          latitudeDelta: 0.00422,
          longitudeDelta: 0.01,
        }}>
        <Marker
          title={'chiraton hotel'}
          coordinate={{
            latitude: cords.latitude,
            longitude: cords.longitude,
          }}>
          <CustomMarker />
        </Marker>
        {list_of_cors.map((el, key) => (
          <Marker
            key={key}
            coordinate={{ latitude: el.lat, longitude: el.long }}>
            <CustomMarkerItem />
          </Marker>
        ))}
      </MapView>
    </View>
  )
}

const CustomMarker = function () {
  return (
    <RnImage
      style={{
        width: 24,
        height: 24,
      }}
      source={{
        uri: 'https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-File.png',
      }}
    />
  )
}

const CustomMarkerItem = function () {
  return (
    <Gap
      style={{
        width: 36,
        height: 36,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffffe',
      }}>
      <Icon name='ri-bank-line' size={19} />
    </Gap>
  )
}

const list_of_cors = [
  {
    lat: 36.830778293029844,
    long: 10.162091018130567,
  },
  {
    lat: 36.83128895685123,
    long: 10.159721358701525,
  },

  {
    lat: 336.830044758072376,
    long: 10.159787188371821,
  },
  {
    lat: 36.83182796674193,
    long: 10.160840367659405,
  },
  {
    lat: 36.83180769725178,
    long: 10.158921354409818,
  },
]
