import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'

import { View, LogBox } from 'react-native'
import { Image } from 'styles/image.module'
import { fontPixel } from '~/utils/normalization'

import { useQuery } from 'react-query'
import { __query, baseUrl } from 'hooks/useApi'

import {
  GroupsBtn,
  ButtonItem,
  Divider,
  IconBox,
  TextBox,
} from 'styles/button.module'

export default function GymScreen({ navigation }) {
  const { data, status } = useQuery('@gym', gymFetcher, {
    refetchOnMount: true,
  })

  return (
    <AreaView>
      {status === 'success' && (
        <>
          <Image
            source={{
              uri: `${baseUrl}storage/gym/${data.gym_image}`,
            }}
          />
          <View style={{ marginTop: 10 }} />
          <Text
            content={data.gym_name}
            up={'cap'}
            size={24}
            weight={600}
            style={{ marginBottom: 10 }}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name={'ri-time-line'}
              size={fontPixel(20)}
              style={{ marginRight: 5 }}
            />
            <Text content={data.gym_timing} up={'up'} size={16} weight={400} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name={'ri-map-pin-line'}
              size={fontPixel(20)}
              style={{ marginRight: 5 }}
            />
            <Text content={data.gym_floor} up={'cap'} size={16} weight={400} />
          </View>
          <View style={{ marginTop: 10 }} />
          <Text
            size={16}
            up={'cap'}
            weight={400}
            color={'gray'}
            content={data.gym_description}
          />
          <View style={{ marginTop: 14 }} />
          <GroupsBtn>
            {gym_array.map((el, index) => (
              <View key={index}>
                <ButtonItem
                  activeOpacity={0.9}
                  onPress={() => {
                    navigation.navigate(el.path, {
                      _equipement: [...data.equipments],
                      _terms: data.gym_term_of_use,
                    })
                  }}>
                  <IconBox color={el.color}>
                    <Icon
                      name={el.icon}
                      size={fontPixel(24)}
                      color={'#fffffe'}
                    />
                  </IconBox>
                  <TextBox>
                    <Text content={el.name} weight={500} size={18} up={'cap'} />
                  </TextBox>
                  <Icon
                    name={'ri-arrow-right-s-line'}
                    size={fontPixel(24)}
                    color={'#9ca3af'}
                  />
                </ButtonItem>
                {index != gym_array.length - 1 && <Divider />}
              </View>
            ))}
          </GroupsBtn>

          <View style={{ marginTop: 14 }} />
        </>
      )}
    </AreaView>
  )
}

const gym_array = [
  {
    name: 'Gym Equipment',
    path: 'menu-tab-stack-gym-equipement',
    icon: 'ri-bell-line',
    color: '#4B8673',
  },
  {
    name: 'Gym Booking system',
    path: 'menu-tab-stack-gym-booking',
    icon: 'ri-bookmark-2-line',
    color: '#4B8673',
  },
  {
    name: 'gym use of terms',
    path: 'menu-tab-stack-gym-use-terms',
    icon: 'ri-file-line',
    color: '#4B8673',
  },
]

let gymFetcher = function () {
  return __query
    .get('api/gym')
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.message)
    })
}
LogBox.ignoreAllLogs(true)
