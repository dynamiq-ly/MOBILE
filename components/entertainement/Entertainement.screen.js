import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'
import TextOverImage from 'components/cards/TextOverImage'

import { palette } from 'themes/palette'
import { View as Gap, ImageBackground } from 'react-native'
import { GridLayout } from 'styles/grid.module'
import { heightPixel, widthPixel } from 'utils/normalization'
import { HFLine, RadiusView, SafeAreaRowWrapperDetail, View } from 'styles/detail.module'
import { ButtonSafety, IconBox, TextBox } from 'styles/safety.module'
import Widecard from '../cards/Widecard'

export default function EntertainementScreen({ navigation }) {
  return (
    <View>
      <CloseHeader />
      <Carsouel
        imageArray={[
          {
            image: 'https://total-event.com/wp-content/uploads/2018/01/event-planning-microsoft-ignite.jpg',
          },
          {
            image: 'https://thumbs.dreamstime.com/b/belek-turkey-september-pool-party-shaped-air-mattresses-belek-turkey-september-crowded-outdoor-pool-party-unicorns-139910876.jpg',
          },
        ]}
      />
      <RadiusView>
        <AreaView mode={'dark'}>
          <Text content={'Entertainement'} size={24} weight={600} up={'cap'} style={{ marginBottom: 12 }} />
          <Text
            size={14}
            color={'gray'}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed euismod nisi porta lorem mollis aliquam. Pellentesque habitant morbi tristique senectus et.'
            }
          />
          <Gap style={{ marginTop: 16 }} />
          <SafeAreaRowWrapperDetail style={{ alignItems: 'center' }}>
            <ImageBackground
              style={{
                width: widthPixel(56),
                height: heightPixel(56),
              }}
              source={{
                uri: 'https://w7.pngwing.com/pngs/529/271/png-transparent-panagiotis-giannakis-t-shirt-arm-shoulder-professional-fitness-coach-tshirt-physical-fitness-arm.png',
              }}
            />
            <Gap style={{ flex: 1, marginLeft: 24 }}>
              <Text color={'gray'} content={'This is Liam the head of the animation and inhote activities departement.'} />
            </Gap>
          </SafeAreaRowWrapperDetail>
          <Gap style={{ marginBottom: 24 }} />
          {entertainement_activity_array.map((el, key) => (
            <Widecard
              key={key}
              name={el.name}
              state={'hidden'}
              image={el.image}
              onPress={() =>
                navigation.navigate('menu-tab-stack-entertaining-events', {
                  _name: el.name,
                })
              }
            />
          ))}

          <>
            <Gap style={{ marginBottom: 10 }} />
            <ButtonSafety activeOpacity={0.7} onPress={() => navigation.navigate('')} style={{ borderRadius: 10 }}>
              <IconBox style={{ borderRadius: 5 }} bg={palette.primary.accent_200}>
                <Icon name={'ri-book-line'} size={24} />
              </IconBox>
              <TextBox>
                <Text content={'mini club regulations'} weight={500} size={18} up={'cap'} />
              </TextBox>
              <Icon size={24} name={'ri-arrow-right-s-line'} color={'#9ca3af'} />
            </ButtonSafety>
            <ButtonSafety activeOpacity={0.7} onPress={() => navigation.navigate('')} style={{ borderRadius: 10 }}>
              <IconBox style={{ borderRadius: 5 }} bg={palette.primary.accent_200}>
                <Icon name={'ri-file-line'} size={24} />
              </IconBox>
              <TextBox>
                <Text content={'regulations'} weight={500} size={18} up={'cap'} />
              </TextBox>
              <Icon size={24} name={'ri-arrow-right-s-line'} color={'#9ca3af'} />
            </ButtonSafety>
            <ButtonSafety activeOpacity={0.7} onPress={() => navigation.navigate('')} style={{ borderRadius: 10 }}>
              <IconBox style={{ borderRadius: 5 }} bg={palette.primary.accent_200}>
                <Icon name={'ri-questionnaire-line'} size={24} />
              </IconBox>
              <TextBox>
                <Text content={'help'} weight={500} size={18} up={'cap'} />
              </TextBox>
              <Icon size={24} name={'ri-arrow-right-s-line'} color={'#9ca3af'} />
            </ButtonSafety>
          </>
          <Gap style={{ marginBottom: 24 }} />
        </AreaView>
      </RadiusView>
    </View>
  )
}

const entertainement_activity_array = [
  {
    name: 'day activities',
    image: 'https://www.delphinhotel.com/main_pics/pages/medium/1062.png',
  },
  {
    name: 'night shows',
    image: 'https://www.nso.co.uk/wp-content/uploads/top-image-about2-750x385.jpg',
  },
  {
    name: 'tv sport programs',
    image: 'https://i0.wp.com/www.broadbandtvnews.com/wp-content/uploads/2016/02/beIn-Sport.jpg?fit=940%2C520&ssl=1',
  },
  {
    name: 'events programs',
    image: 'https://total-event.com/wp-content/uploads/2018/01/event-planning-microsoft-ignite.jpg',
  },
]
