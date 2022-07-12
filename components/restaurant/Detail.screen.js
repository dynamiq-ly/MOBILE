import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Button from 'components/button/Button'
import ShipCard from 'components/cards/ShipCard'
import Carsouel from 'components/slider/carousel'
import CloseHeader from 'components/header/CloseHeader'
import TextOverImage from 'components/cards/TextOverImage'

import { View as Gap } from 'react-native'
import { fontPixel } from 'utils/normalization'
import {
  ButtonWrapperDetail,
  View,
  SafeAreaRowWrapperDetail,
  HFLine,
  HdRow,
  TextWrapper,
  RadiusView,
} from 'styles/detail.module'

export default function DetailScreen({ navigation, route }) {
  const { _data } = route.params
  return (
    <View>
      <CloseHeader />
      <Carsouel
        imageArray={[
          { image: _data.image },
          {
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvZEDCLiaOOIfx_vOLiJ5JDVF-PiFLGwvWg&usqp=CAU',
          },
          {
            image:
              'https://media-cdn.tripadvisor.com/media/photo-s/1b/a9/f2/ee/le-cafe-des-arts.jpg',
          },
        ]}
      />
      <RadiusView>
        <AreaView mode={'light'}>
          <Text content={_data.name} weight={700} up={'cap'} size={28} />
          <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={'ri-time-line'} style={{ marginRight: 5 }} size={21} />
            <Text
              content={`from ${_data.open} to ${_data.close}`}
              weight={500}
              up={'up'}
              size={16}
            />
          </Gap>
          <Text content={_data.content} color={'gray'} weight={400} size={16} />

          <HFLine />
          <Text content={'chefs'} weight={500} size={18} up={'cap'} />
          <SafeAreaRowWrapperDetail>
            <ShipCard
              name='wale e.sebii'
              underName='E.CHEF'
              image={
                'https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg'
              }
            />
            <ShipCard
              name='grodon l.ramsey'
              underName='S.CHEF'
              image={
                'https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg'
              }
            />
          </SafeAreaRowWrapperDetail>
          <HFLine />
          <Text content={'Menus'} weight={500} size={18} up={'cap'} />

          <SafeAreaRowWrapperDetail>
            <TextOverImage
              image={
                'https://www.heinonwine.com/wp-content/uploads/2019/04/Malaysia.jpg-lr.jpg'
              }
              name={'food'}
              onPress={() =>
                navigation.navigate(
                  'menu-tab-stack-restaurant-detail-menu-food'
                )
              }
            />
            <TextOverImage
              image={
                'https://cdn.shopify.com/s/files/1/0021/4355/1535/files/Taylors-Very-Very-Old-Tawny-Port-1_500x500.png?v=1650901488'
              }
              name={'drinks'}
              onPress={() =>
                navigation.navigate(
                  'menu-tab-stack-restaurant-detail-menu-drinks'
                )
              }
            />
          </SafeAreaRowWrapperDetail>

          <HFLine />
          <Text content={'Dress code'} weight={500} size={18} up={'cap'} />
          <HdRow>
            <Icon
              color={'#191919'}
              name='ri-shirt-line'
              style={{ margin: 5 }}
              size={fontPixel(28)}
            />
            <TextWrapper>
              <Text
                content={_data.dress_code}
                color={'gray'}
                weight={400}
                size={16}
              />
            </TextWrapper>
          </HdRow>
          <Gap style={{ marginBottom: 32 }} />
        </AreaView>
      </RadiusView>

      <ButtonWrapperDetail>
        <Button title={'book table'} icon={'ri-bookmark-3-line'} />
      </ButtonWrapperDetail>
    </View>
  )
}
