import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import * as ImagePicker from 'expo-image-picker'

import { useEffect, useState } from 'react'
import { palette } from '~/themes/palette'
import { fontPixel, widthPixel } from 'utils/normalization'
import { ImageBackground, View, TouchableOpacity } from 'react-native'

import { __auth } from 'store/AuthSusbcribeProvider'
import { ButtonSafety, IconBox, TextBox } from '~/styles/safety.module'

export default function ProfileScreen({ navigation }) {
  const { subscribedUser, logout } = __auth()
  const [profileImage, setProfileImage] = useState(subscribedUser.profile_image)

  const handleImagePicker = async () => {
    let pickImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    })

    !pickImage.cancelled && setProfileImage(pickImage.uri)
  }

  return (
    <AreaView>
      <View style={{ ...styling.profileView }}>
        <ImageBackground
          imageStyle={{ borderRadius: 62 }}
          source={{ uri: profileImage }}
          style={{ ...styling.image }}>
          <TouchableOpacity
            onPress={() => handleImagePicker()}
            style={{ ...styling.imageIcon }}>
            <Icon
              size={21}
              name={'ri-camera-line'}
              color={palette.primary.accent_100}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ flex: 1 }}>
          <Text
            size={26}
            up={'cap'}
            weight={700}
            align={'center'}
            content={`${subscribedUser.first_name} ${subscribedUser.last_name}`}
          />
        </View>
      </View>
      <View style={{ marginTop: 24 }} />
      <LogoutButton
        func={() => {
          logout()
          navigation.navigate('menu-tab-stack')
        }}
      />
      <View style={{ marginBottom: 24 }} />
    </AreaView>
  )
}

const styling = {
  profileView: {
    position: 'relative',
    alignItems: 'center',
  },
  imageIcon: {
    width: 38,
    height: 38,
    borderRadius: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.secondary.accent_500,
  },
  image: {
    height: 150,
    marginBottom: 10,
    alignItems: 'flex-end',
    width: widthPixel(150),
    justifyContent: 'flex-end',
  },
}

const LogoutButton = function ({ func }) {
  return (
    <ButtonSafety activeOpacity={0.7} onPress={func}>
      <IconBox style={{ backgroundColor: palette.primary.accent_0 }}>
        <Icon
          name={'ri-logout-circle-line'}
          size={fontPixel(24)}
          color={'#121212'}
        />
      </IconBox>
      <TextBox>
        <Text content={'log out'} weight={500} size={18} up={'cap'} />
      </TextBox>
      <Icon
        name={'ri-arrow-right-s-line'}
        size={fontPixel(24)}
        color={'#9ca3af'}
      />
    </ButtonSafety>
  )
}
