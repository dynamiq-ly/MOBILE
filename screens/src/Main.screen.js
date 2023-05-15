import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import Widecard from 'components/cards/Widecard'

import { HScrollView } from 'styles/app.module'
import { __auth } from 'store/AuthSusbcribeProvider'
import Carousel, { Pagination } from 'react-native-x-carousel'

import { ImageSquareCard, StyledSquareCard, StyledTagCards } from 'styles/cards.module'

import { View as Gap, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native'

import { lang } from 'lang/main.i18n'
import { __t } from 'store/LocalizationProvider'

export default function MainScreen({ navigation }) {
  const interval = 5000
  const { local } = __t()

  const t = (key) => {
    const translation = lang[local][key]
    if (!translation) {
      return key
    }
    return translation
  }

  return (
    <ScrollView style={{ backgroundColor: '#f5f5f4' }}>
      <Gap
        style={{
          position: 'relative',
          overflow: 'hidden',
          marginBottom: 14,
        }}>
        <Carousel
          loop
          autoplay
          style={{ flex: 1 }}
          autoplayInterval={interval}
          Pagination={Pagination}
          renderItem={(item, key) => (
            <ImageBackground
              key={key}
              source={{ uri: item.image }}
              style={{
                width: Dimensions.get('window').width,
                height: 250,
              }}
            />
          )}
          data={[
            {
              image: 'https://www.amarinsamuiresort.com/images/promotion/banner-promotion-amarin-1.jpg',
            },
            {
              image: 'https://www.altnana.com/images/banner-altnana-longstay.jpg',
            },
            {
              image: 'https://www.centrepoint.com/bookingbackend/images/promotion/cp4/chidlom-hot%20deal-2020_l.jpg',
            },
          ]}
        />
      </Gap>

      <Gap style={{ marginHorizontal: 16, marginBottom: 24 }}>
        <Text size={24} up={'cap'} weight={700} content={`${t('greeting')}, nadine breaty`} />
      </Gap>

      <Gap style={{ marginHorizontal: 16 }}>
        <Gap
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 24,
          }}>
          {quck_access.map((el, key) => (
            <StyledTagCards
              key={key}
              style={{
                width: (Dimensions.get('screen').width - 42) / quck_access.length,
                height: 72,
              }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate(el.path)}>
                <Icon size={21} name={el.icon} color={el.color} />
                <Text size={12} up={'up'} align={'center'} weight={500} content={t(el.name)} />
              </TouchableOpacity>
            </StyledTagCards>
          ))}
        </Gap>

        {/* good plans */}
        <Text content={t('gp')} weight={700} up={'cap'} size={26} />
        <HScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 0, marginTop: 14 }}>
          {good_plans_array.map((item, key) => (
            <SquareCardSmall key={key} title={t(item.name)} image={item.image} onPress={() => navigation.navigate(item.path)} />
          ))}
        </HScrollView>

        {/* servicess and facilties */}
        <Text content={t('s_f')} weight={700} up={'cap'} size={26} style={{ marginBottom: 10 }} />
        {services_and_facilties_array.map((item, key) => (
          <Gap key={key}>
            <Widecard name={t(item.name)} image={item.image} state={'hidden'} onPress={() => navigation.navigate(item.path)} />
          </Gap>
        ))}

        {/* luxury and relax services */}
        <Text content={t('l_r')} style={{ marginTop: 18, marginBottom: 10 }} weight={700} up={'cap'} size={26} />
        {luxury_and_relax_array.map((item, key) => (
          <Gap key={key}>
            <Widecard name={t(item.name)} image={item.image} state={'hidden'} onPress={() => navigation.navigate(item.path)} />
          </Gap>
        ))}
      </Gap>

      <Gap style={{ marginBottom: 24 }} />
    </ScrollView>
  )
}

const services_and_facilties_array = [
  {
    name: 'how_can_we_help',
    path: 'menu-tab-stack-how-can-we-help',
    image: 'https://img.freepik.com/free-photo/one-two-young-hotel-receptionists-standing-by-counter-looking-touchpad-display-consulting-client-phone-against-colleague_274679-18500.jpg',
  },
  {
    name: 'bars',
    path: 'menu-tab-stack-bar-list',
    image: 'https://www.atlantaeats.com/wp-content/uploads/2021/01/bling-pig-interior-600x400.jpg',
  },
  {
    name: 'restaurants',
    path: 'menu-tab-stack-restaurant-list',
    image: 'https://dynl.mktgcdn.com/p/NqJkgnvZfhiYwatZzeKB3RyE0QygIMnjY3gptqyeVsE/600x400.jpg',
  },
  {
    name: 'entertainement',
    path: 'menu-tab-stack-entertaining',
    image: 'https://wistatefair.com/fair/wp-content/uploads/2022/06/entertainment-stage-600x400-1.png',
  },
]

export function SquareCardSmall({ title, image, ...rest }) {
  return (
    <StyledSquareCard style={{ marginRight: 14, minHeight: 150, width: 142 }} activeOpacity={0.8} {...rest}>
      <ImageSquareCard source={{ uri: image }} style={{ height: 110 }} />

      <Text size={18} up={'cap'} weight={400} content={title.length > 36 ? `${title.slice(0, 36)}...` : title} />
    </StyledSquareCard>
  )
}

const good_plans_array = [
  {
    name: 'rent_vehicules',
    path: 'menu-tab-stack-renting',
    image: 'https://www.northamericanar.com/wp-content/uploads/2020/04/car-rental.jpg',
  },
  {
    name: 'excursions',
    path: 'menu-tab-stack-excursions',
    image: 'https://www.hmebc.com/wp-content/uploads/freedom-excursion.jpg',
  },

  {
    name: 'interesting_point',
    path: 'menu-tab-stack-point-of-interest',
    image: 'https://gladiatortours.com/wp-content/uploads/amalfi-and-positano-coast-excursion-400x400.jpg',
  },
  {
    name: 'shops',
    path: 'menu-tab-stack-shops',
    image: 'https://www.terratintagroup.com/wp-content/uploads/2017/07/Zwart-60x60-30x60_Stonedesign-Chalk-60x60_b-400x400.jpeg',
  },
  {
    name: 'transport',
    path: 'menu-tab-stack-transportation',
    image: 'https://th.bing.com/th/id/R.6712cf65502d731e5487adf83c1d1521?rik=h42Bi3LrBaunDw&pid=ImgRaw&r=0',
  },
]

const luxury_and_relax_array = [
  {
    name: 'rooms_services',
    path: 'menu-tab-stack-room-service',
    image: 'https://media.istockphoto.com/videos/ordering-room-service-video-id1083647268?s=640x640',
  },
  {
    name: 'rooms',
    path: 'menu-tab-stack-rooms',
    image: 'https://www.casabianca-santorini.com/wp-content/uploads/2015/10/room-2-500x500.jpg',
  },
  {
    name: 'swimming_pool',
    path: 'menu-tab-stack-swimming-pool',
    image: 'https://sirbenainsliesportscentre.com/wp-content/uploads/2015/10/JR20140624_TSchool_Swimming-10-400x400.jpg',
  },
  {
    name: 'gym_training',
    path: 'menu-tab-stack-gym',
    image: 'https://www.lifefitnessemea.com/resource/image/643794/portrait_ratio1x1/400/400/5cbd7a48ed5dd9647aad3d2bd2562c90/Ge/lfa-trainers-fitfair2019-20191122-wf2-8495-2-.jpg',
  },
]

const quck_access = [
  {
    path: 'menu-tab-stack-our-hotels',
    name: 'our_hotels',
    color: '#472183',
    icon: 'ri-hotel-line',
  },
  {
    path: 'menu-tab-stack-quick-access',
    name: 'quick_access',
    color: '#227C70',
    icon: 'ri-wallet-line',
  },
  {
    path: '',
    name: 'my_bookings',
    color: '#CE7777',
    icon: 'ri-book-2-line',
  },
  {
    path: '',
    name: 'digital_key',
    color: '#3A4F7A',
    icon: 'ri-refund-line',
  },
]
