import AreaView from 'utils/TabAreaView'
import DetailedCard from 'components/cards/DetailedCard'
import FixedWidthButton from 'components/button/FixedWidthButton'
import Text from 'components/text/Text'
import Icon from 'react-native-remix-icon'
import { useState } from 'react'
import { View as Gap, View as NewView } from 'react-native'
import { View } from 'styles/detail.module'
import { HScrollView } from 'styles/app.module'
import { VerticalListLine } from 'styles/list.module'
import { palette } from '/themes/palette'

import { food_servie_array } from 'mock/food_service'

export default function FoodService({ navigation, route }) {
  const [isCategory, setCategory] = useState('breakfast')

  return (
    <View>
      <Gap>
        <HScrollView horizontal showsHorizontalScrollIndicator={false}>
          {food_category_Array.map((el, key) => {
            return (
              <Gap
                style={{ alignItems: 'center', flexDirection: 'row' }}
                key={key}
              >
                <FixedWidthButton
                  title={el}
                  func={() => setCategory(el)}
                  active={isCategory !== el ? true : false}
                />
                {food_category_Array.length !== key + 1 && <VerticalListLine />}
              </Gap>
            )
          })}
        </HScrollView>
      </Gap>
      <NewView style={{ marginBottom: 15 }} />
      <NewView>
        <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name='ri-time-line'
            color={palette.secondary.accent_700}
            size={24}
            style={{ marginLeft: 15 }}
          />
          {food_servie_array
            .filter((el) => el.food_type === isCategory)
            .map((el, key) => {
              return (
                <Text
                  key={key}
                  size={18}
                  weight={500}
                  content={el.food_duration}
                  style={{ marginLeft: 15 }}
                />
              )
            })}
        </Gap>
        <NewView style={{ marginBottom: 15 }} />
        <Gap style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name='ri-money-dollar-circle-line'
            color={palette.secondary.accent_700}
            size={24}
            style={{ marginLeft: 15 }}
          />
          {food_servie_array
            .filter((el) => el.food_type === isCategory)
            .map((el, key) => {
              return (
                <Text
                  key={key}
                  size={18}
                  weight={500}
                  content={el.food_min_price}
                  style={{ marginLeft: 10 }}
                />
              )
            })}
        </Gap>
        <NewView style={{ marginBottom: 15 }} />
        <Gap>
          {food_servie_array
            .filter((el) => el.food_type === isCategory)
            .map((el, key) => {
              return (
                <Text
                  key={key}
                  size={16}
                  weight={500}
                  content={el.food_description}
                  style={{ marginLeft: 15 }}
                  color={'gray'}
                />
              )
            })}
        </Gap>
      </NewView>
      <AreaView>
        {food_servie_array
          .filter((el) => el.food_type === isCategory)
          .map((el, key) => {
            return (
              <DetailedCard
                key={key}
                title={el.food_name}
                price={el.food_price}
                image={el.food_image}
                description={
                  el.food_summary.length > 70
                    ? `${el.food_summary.slice(0, 70)}...`
                    : el.food_summary
                }
                onPress={() =>
                  navigation.navigate(
                    'menu-tab-stack-room-service-food-service-detail',
                    { _name: el.food_name, _data: el }
                  )
                }
              />
            )
          })}
      </AreaView>
    </View>
  )
}

const food_category_Array = [
  'breakfast',
  'lunch',
  'dinner',
  'fast food',
  'snacks',
]
