import Icon from 'react-native-remix-icon'
import Input from 'components/input/Input'
import CloseHeader from '../header/CloseHeader'
import MapView, { Marker } from 'react-native-maps'

import { useEffect, useState } from 'react'
import { View } from 'styles/detail.module'
import { View as Gap, Image as RnImage } from 'react-native'

export default function BanksScreen() {
  const [isSearch, setSearch] = useState('')
  const [cordination, setCordination] = useState(list_of_cors)

  useEffect(() => {
    return setCordination(
      list_of_cors.filter((el) =>
        el.name.toLowerCase().includes(isSearch.toLowerCase())
      )
    )
  }, [isSearch])

  return (
    <View>
      <CloseHeader />
      <Gap style={{ ...search_style }}>
        <Input icon='ri-map-pin-line' onChangeText={(e) => setSearch(e)} />
      </Gap>
      <MapBox array={cordination} />
    </View>
  )
}

const list_of_cors = [
  {
    name: 'amen bank atm',
    lat: 36.830778293029844,
    long: 10.162091018130567,
  },
  {
    name: 'amen ban central',
    lat: 36.83128895685123,
    long: 10.159721358701525,
  },

  {
    name: 'uib',
    lat: 336.830044758072376,
    long: 10.159787188371821,
  },
  {
    name: 'bna',
    lat: 36.83182796674193,
    long: 10.160840367659405,
  },
  {
    name: 'post atm',
    lat: 36.83180769725178,
    long: 10.158921354409818,
  },
]

const cords = {
  latitude: 36.831199796782734,
  longitude: 10.160658088003666,
  latitudeDelta: 0.00422,
  longitudeDelta: 0.005,
}

const marker_style = {
  width: 24,
  height: 24,
  alignItems: 'center',
  justifyContent: 'center',
}

const search_style = {
  zIndex: 1,
  width: '100%',
  marginVertical: 88,
  paddingHorizontal: 16,
  position: 'absolute',
  shadowColor: '#656565',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
}

const MapBox = ({ array }) => {
  return (
    <MapView
      mapType={'hybrid'}
      style={{ height: '100%' }}
      region={{ ...cords }}>
      <Marker
        title={'chiraton hotel'}
        style={{ ...marker_style }}
        coordinate={{
          latitude: cords.latitude,
          longitude: cords.longitude,
        }}>
        <CustomMarker />
      </Marker>
      {array.map((el, key) => (
        <Marker
          key={key}
          title={el.name}
          style={{ ...marker_style }}
          coordinate={{ latitude: el.lat, longitude: el.long }}>
          <CustomMarkerItem />
        </Marker>
      ))}
    </MapView>
  )
}

const CustomMarker = function () {
  return (
    <RnImage
      style={{
        width: 32,
        height: 32,
      }}
      source={{
        uri: 'https://www.lakesideymca.co.uk/public/2018/05/map-marker-icon.png',
      }}
    />
  )
}

const CustomMarkerItem = function () {
  return (
    <Gap
      style={{
        ...marker_style,
        borderRadius: 100,
        backgroundColor: '#242424',
      }}>
      <Icon name='ri-bank-fill' size={12} color={'white'} />
    </Gap>
  )
}
