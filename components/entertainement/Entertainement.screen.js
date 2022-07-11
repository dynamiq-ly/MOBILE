import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import TextOverImage from 'components/cards/TextOverImage'

import { palette } from 'themes/palette'
import { View, ImageBackground } from 'react-native'
import { GridLayout } from 'styles/grid.module'
import { heightPixel, widthPixel } from 'utils/normalization'
import { SafeAreaRowWrapperDetail } from 'styles/detail.module'
import { ButtonSafety, IconBox, TextBox } from 'styles/safety.module'

export default function EntertainementScreen({ navigation }) {
  return (
    <AreaView>
      <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
        <View style={{ flex: 1, marginRight: 24 }}>
          <Text
            color={'gray'}
            content={
              'This is Liam the head of the animation and inhote activities departement.'
            }
          />
        </View>
        <ImageBackground
          style={{
            width: widthPixel(56),
            height: heightPixel(56),
          }}
          source={{
            uri: 'https://w7.pngwing.com/pngs/529/271/png-transparent-panagiotis-giannakis-t-shirt-arm-shoulder-professional-fitness-coach-tshirt-physical-fitness-arm.png',
          }}
        />
      </SafeAreaRowWrapperDetail>
      <View style={{ marginBottom: 10 }} />
      <GridLayout>
        {entertainement_activity_array.map((el, key) => (
          <TextOverImage
            key={key}
            name={el.name}
            image={el.image}
            onPress={() => navigation.navigate('')}
          />
        ))}
      </GridLayout>
      <>
        <View style={{ marginBottom: 24 }} />
        <ButtonSafety
          activeOpacity={0.7}
          onPress={() => navigation.navigate('')}
          style={{ borderRadius: 10 }}>
          <IconBox style={{ borderRadius: 5 }} bg={palette.primary.accent_200}>
            <Icon name={'ri-book-line'} size={24} />
          </IconBox>
          <TextBox>
            <Text
              content={'mini club regulations'}
              weight={500}
              size={18}
              up={'cap'}
            />
          </TextBox>
          <Icon size={24} name={'ri-arrow-right-s-line'} color={'#9ca3af'} />
        </ButtonSafety>
        <ButtonSafety
          activeOpacity={0.7}
          onPress={() => navigation.navigate('')}
          style={{ borderRadius: 10 }}>
          <IconBox style={{ borderRadius: 5 }} bg={palette.primary.accent_200}>
            <Icon name={'ri-file-line'} size={24} />
          </IconBox>
          <TextBox>
            <Text content={'regulations'} weight={500} size={18} up={'cap'} />
          </TextBox>
          <Icon size={24} name={'ri-arrow-right-s-line'} color={'#9ca3af'} />
        </ButtonSafety>
        <ButtonSafety
          activeOpacity={0.7}
          onPress={() => navigation.navigate('')}
          style={{ borderRadius: 10 }}>
          <IconBox style={{ borderRadius: 5 }} bg={palette.primary.accent_200}>
            <Icon name={'ri-questionnaire-line'} size={24} />
          </IconBox>
          <TextBox>
            <Text content={'regulations'} weight={500} size={18} up={'cap'} />
          </TextBox>
          <Icon size={24} name={'ri-arrow-right-s-line'} color={'#9ca3af'} />
        </ButtonSafety>
      </>
      <View style={{ marginBottom: 24 }} />
    </AreaView>
  )
}

const entertainement_activity_array = [
  {
    name: 'day activities',
    image: 'https://www.delphinhotel.com/main_pics/pages/medium/1062.png',
  },
  {
    name: 'night shows',
    image:
      'https://www.nso.co.uk/wp-content/uploads/top-image-about2-750x385.jpg',
  },
  {
    name: 'tv sport programs',
    image:
      'https://i0.wp.com/www.broadbandtvnews.com/wp-content/uploads/2016/02/beIn-Sport.jpg?fit=940%2C520&ssl=1',
  },
  {
    name: 'events programs',
    image:
      'https://total-event.com/wp-content/uploads/2018/01/event-planning-microsoft-ignite.jpg',
  },
]
