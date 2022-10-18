import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Icon from 'react-native-remix-icon'
import Widecard from 'components/cards/Widecard'
import FullImageCard from 'components/cards/FullImageCard'

import { HScrollView } from 'styles/app.module'
import { __auth } from 'store/AuthSusbcribeProvider'
import Carsouel from 'components/slider/carousel'

import {
  ImageSquareCard,
  StyledSquareCard,
  StyledTagCards,
} from 'styles/cards.module'
import { View as Gap, TouchableOpacity } from 'react-native'

export default function MainScreen({ navigation }) {
  return (
    <AreaView>
      <Gap style={{ marginBottom: 24 }}>
        <Text
          size={24}
          up={'cap'}
          color={'gray'}
          align={'center'}
          content={'Beia bakhta palaca'}
        />
      </Gap>

      <>
        <Carsouel
          style={{ marginBottom: 24, height: 175, borderRadius: 14 }}
          imageArray={[
            {
              image:
                'https://www.amarinsamuiresort.com/images/promotion/banner-promotion-amarin-1.jpg',
            },
            {
              image:
                'https://www.altnana.com/images/banner-altnana-longstay.jpg',
            },
            {
              image:
                'https://www.centrepoint.com/bookingbackend/images/promotion/cp4/chidlom-hot%20deal-2020_l.jpg',
            },
          ]}
        />
      </>

      <Gap
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 24,
        }}>
        <StyledTagCards style={{ width: '23%', height: 78 }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={() =>
              navigation.navigate('menu-tab-stack-how-can-we-help')
            }>
            <Icon name={'ri-headphone-line'} color={'black'} />
            <Text size={14} up={'up'} weight={500} content={'reception'} />
          </TouchableOpacity>
        </StyledTagCards>
        <StyledTagCards style={{ width: '23%', height: 78 }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={() => navigation.navigate('menu-tab-stack-room-service')}>
            <Icon name={'ri-hand-heart-line'} color={'purple'} />
            <Text size={14} up={'up'} weight={500} content={'Services'} />
          </TouchableOpacity>
        </StyledTagCards>

        <StyledTagCards style={{ width: '23%', height: 78 }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={() =>
              navigation.navigate('menu-tab-stack-transportation')
            }>
            <Icon name={'ri-car-line'} color={'red'} />
            <Text size={13} up={'up'} weight={500} content={'transport'} />
          </TouchableOpacity>
        </StyledTagCards>

        <StyledTagCards style={{ width: '23%', height: 78 }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center' }}
            onPress={() => navigation.navigate('menu-tab-stack-our-hotels')}>
            <Icon name={'ri-hotel-line'} color={'blue'} />
            <Text size={14} up={'up'} weight={500} content={'hotels'} />
          </TouchableOpacity>
        </StyledTagCards>
      </Gap>

      {/* good plans */}
      <Text content={'good plans'} weight={700} up={'cap'} size={21} />
      <HScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 0, marginTop: 14 }}>
        {good_plans_array.map((item, key) => (
          <SquareCardSmall
            key={key}
            title={item.name}
            image={item.image}
            onPress={() => navigation.navigate(item.path)}
          />
        ))}
      </HScrollView>

      {/* servicess and facilties */}
      <Text
        content={'services and facilties'}
        weight={700}
        up={'cap'}
        size={21}
        style={{ marginBottom: 10 }}
      />
      {services_and_facilties_array.map((item, key) => (
        <Gap key={key} style={{ marginBottom: -24, marginTop: 10 }}>
          <Widecard
            name={item.name}
            image={item.image}
            state={'hidden'}
            onPress={() => navigation.navigate(item.path)}
          />
        </Gap>
      ))}

      {/* luxury and relax services */}
      <Text
        content={'luxury and relax'}
        style={{ marginTop: 18 }}
        weight={700}
        up={'cap'}
        size={21}
      />
      <HScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 0 }}>
        {luxury_and_relax_array.map((item, key) => (
          <Gap key={key} style={{ marginRight: 12 }}>
            <FullImageCard
              title={item.name}
              image={item.image}
              position={item.id % 2 !== 1 && 'end'}
              onPress={() => navigation.navigate(item.path)}
            />
          </Gap>
        ))}
      </HScrollView>

      <Gap style={{ marginBottom: 24 }} />
    </AreaView>
  )
}

const services_and_facilties_array = [
  {
    name: 'how can we help',
    path: 'menu-tab-stack-how-can-we-help',
    image:
      'https://img.freepik.com/free-photo/one-two-young-hotel-receptionists-standing-by-counter-looking-touchpad-display-consulting-client-phone-against-colleague_274679-18500.jpg',
  },
  {
    name: 'bars',
    path: 'menu-tab-stack-bar-list',
    image:
      'https://www.atlantaeats.com/wp-content/uploads/2021/01/bling-pig-interior-600x400.jpg',
  },
  {
    name: 'restaurants',
    path: 'menu-tab-stack-restaurant-list',
    image:
      'https://dynl.mktgcdn.com/p/NqJkgnvZfhiYwatZzeKB3RyE0QygIMnjY3gptqyeVsE/600x400.jpg',
  },
  {
    name: 'entertainement',
    path: 'menu-tab-stack-entertaining',
    image:
      'https://wistatefair.com/fair/wp-content/uploads/2022/06/entertainment-stage-600x400-1.png',
  },
]

export function SquareCardSmall({ title, image, ...rest }) {
  return (
    <StyledSquareCard
      style={{ marginRight: 14, minHeight: 150, width: 142 }}
      activeOpacity={0.8}
      {...rest}>
      <ImageSquareCard source={{ uri: image }} style={{ height: 110 }} />

      <Text
        size={18}
        up={'cap'}
        weight={400}
        content={title.length > 36 ? `${title.slice(0, 36)}...` : title}
      />
    </StyledSquareCard>
  )
}

const good_plans_array = [
  {
    name: 'interesting point',
    path: 'menu-tab-stack-point-of-interest',
    image:
      'https://gladiatortours.com/wp-content/uploads/amalfi-and-positano-coast-excursion-400x400.jpg',
  },
  {
    name: 'shops',
    path: 'menu-tab-stack-shops',
    image:
      'https://www.terratintagroup.com/wp-content/uploads/2017/07/Zwart-60x60-30x60_Stonedesign-Chalk-60x60_b-400x400.jpeg',
  },
  {
    name: 'excursions',
    path: 'menu-tab-stack-excursions',
    image: 'https://www.hmebc.com/wp-content/uploads/freedom-excursion.jpg',
  },
  {
    name: 'rent vehicules',
    path: 'menu-tab-stack-renting',
    image:
      'https://www.northamericanar.com/wp-content/uploads/2020/04/car-rental.jpg',
  },
]

const luxury_and_relax_array = [
  {
    name: "room's services",
    path: 'menu-tab-stack-room-service',
    image:
      'https://media.istockphoto.com/videos/ordering-room-service-video-id1083647268?s=640x640',
  },
  {
    name: 'rooms',
    path: 'menu-tab-stack-rooms',
    image:
      'https://www.casabianca-santorini.com/wp-content/uploads/2015/10/room-2-500x500.jpg',
  },
  {
    name: 'swimming pool',
    path: 'menu-tab-stack-swimming-pool',
    image:
      'https://sirbenainsliesportscentre.com/wp-content/uploads/2015/10/JR20140624_TSchool_Swimming-10-400x400.jpg',
  },
  {
    name: 'gym training',
    path: 'menu-tab-stack-gym',
    image:
      'https://www.lifefitnessemea.com/resource/image/643794/portrait_ratio1x1/400/400/5cbd7a48ed5dd9647aad3d2bd2562c90/Ge/lfa-trainers-fitfair2019-20191122-wf2-8495-2-.jpg',
  },
]
