import moment from 'moment'
import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import * as ImagePicker from 'expo-image-picker'

import { useState } from 'react'
import { palette } from 'themes/palette'
import { fontPixel, widthPixel } from 'utils/normalization'
import {
  View,
  Platform,
  ImageBackground,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native'

import { __auth } from 'store/AuthSusbcribeProvider'
import { ButtonSafety, IconBox, TextBox } from 'styles/safety.module'

export default function ProfileScreen({ navigation }) {
  const { subscribedUser, logout } = __auth()
  const [profileImage, setProfileImage] = useState(subscribedUser.profile_image)

  /**
   * @param {string} pickedFrom
   */
  const handleImagePicker = async (pickedFrom) => {
    if (pickedFrom === 'camera') {
      let pickImage = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      })

      !pickImage.cancelled && setProfileImage(pickImage.uri)
    } else if (pickedFrom === 'library') {
      let pickImage = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      })

      !pickImage.cancelled && setProfileImage(pickImage.uri)
    }
  }

  const handleActionSheetIosAndroid = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Upload From Library', 'Take a Photo'],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light',
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          setProfileImage(profileImage)
        } else if (buttonIndex === 1) {
          handleImagePicker('library')
        } else if (buttonIndex === 2) {
          handleImagePicker('camera')
        }
      }
    )

  return (
    <AreaView>
      {/* image profil */}
      <View style={{ ...styling.profileView }}>
        <ImageBackground
          imageStyle={{ borderRadius: 62 }}
          source={{ uri: profileImage }}
          style={{ ...styling.image }}>
          <TouchableOpacity
            onPress={() =>
              Platform.OS === 'ios'
                ? handleActionSheetIosAndroid()
                : handleImagePicker('library')
            }
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
      {/* room */}
      <View
        style={{
          marginTop: 24,
          borderRadius: 10,
          backgroundColor: palette.primary.accent_0,
        }}>
        <View>
          <View style={{ padding: 10 }}>
            <Text
              size={16}
              up={'cap'}
              color={'gray'}
              content={`Room: ${subscribedUser.hotel_stay.room_floor}-${subscribedUser.hotel_stay.room_number}`}
            />
          </View>
        </View>
      </View>

      {/* checkin */}
      <View
        style={{
          padding: 10,
          marginTop: 24,
          borderRadius: 10,
          justifyContent: 'space-between',
          backgroundColor: palette.secondary.accent_500,
        }}>
        <View>
          <Text color={'white'} content={'check in'} />
          <Text
            size={18}
            color={'white'}
            content={moment(new Date(subscribedUser.hotel_stay.checkin)).format(
              'MMMM DD, YYYY'
            )}
          />
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#fefefe',
            marginVertical: 10,
          }}
        />
        <View>
          <Text color={'white'} content={'check out'} />
          <Text
            size={18}
            color={'white'}
            content={moment(new Date(subscribedUser.hotel_stay.checkin)).format(
              'MMMM DD, YYYY'
            )}
          />
        </View>
      </View>

      {/* logout button */}
      <View style={{ marginTop: 24 }} />
      <LogoutButton
        title={'account details'}
        icon={'shield-user'}
        func={() => {
          navigation.navigate('menu-tab-stack-profile-account-setting')
        }}
      />
      <LogoutButton
        title={'settings'}
        icon={'settings-2'}
        func={() => {
          navigation.navigate('menu-tab-stack-setting')
        }}
      />
      <LogoutButton
        title={'log out'}
        icon={'logout-circle'}
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

export const LogoutButton = function ({ title, icon, func }) {
  return (
    <ButtonSafety activeOpacity={0.7} onPress={func}>
      <IconBox style={{ backgroundColor: palette.primary.accent_0 }}>
        <Icon name={`ri-${icon}-line`} size={fontPixel(24)} color={'#121212'} />
      </IconBox>
      <TextBox>
        <Text content={title} weight={500} size={18} up={'cap'} />
      </TextBox>
      <Icon
        name={'ri-arrow-right-s-line'}
        size={fontPixel(24)}
        color={'#9ca3af'}
      />
    </ButtonSafety>
  )
}
