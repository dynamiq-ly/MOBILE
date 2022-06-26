import Text from 'components/text/Text'
import AreaView from 'utils/TabAreaView'
import Button from 'components/button/Button'
import PlusMinusCard from 'components/cards/PlusMinusCard'

import { useState } from 'react'
import { View as Gap } from 'react-native'
import { Image } from 'styles/image.module'

import {
  View,
  HFLine,
  ButtonWrapperDetail,
  SafeAreaRowWrapperDetail,
} from 'styles/detail.module'
import { GridLayout } from '~/styles/grid.module'

export default function ({ route }) {
  const { _data } = route.params
  const [count, setCount] = useState(0)

  return (
    <View>
      <AreaView>
        <Image source={{ uri: _data.food_image }} />
        <Gap style={{ marginBottom: 5 }} />
        <SafeAreaRowWrapperDetail>
          <Text content={_data.food_name} weight={700} up={'cap'} size={24} />
          <Text
            content={`${_data.food_price}$`}
            weight={600}
            size={21}
            color={'dominant'}
          />
        </SafeAreaRowWrapperDetail>
        <Text content={_data.food_summary} size={16} color={'gray'} />
        {_data.food_supplement && (
          <>
            <HFLine />
            <Text content={'suplements'} weight={500} size={18} up={'cap'} />
            <GridLayout>
              {_data.food_supplement.map((el, key) => {
                return (
                  <PlusMinusCard
                    key={key}
                    count={count}
                    onChange={setCount}
                    title={el.suplement_name}
                    uri={el.supplement_image}
                  />
                )
              })}
            </GridLayout>
          </>
        )}
        {_data.food_variance && (
          <>
            <HFLine />
            <Text content={'variance'} weight={500} size={18} up={'cap'} />
            <Gap
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              {_data.food_variance.split(',').map((el, key) => (
                <Gap
                  key={key}
                  style={{
                    backgroundColor: '#fffffe',
                    marginRight: 5,
                    borderRadius: 5,
                    paddingVertical: 2,
                    paddingHorizontal: 10,
                  }}>
                  <Text size={16} content={el} />
                </Gap>
              ))}
            </Gap>
          </>
        )}
        <Gap style={{ marginBottom: 24 }} />
      </AreaView>
      <ButtonWrapperDetail>
        <Button title={'add to cart'} />
      </ButtonWrapperDetail>
    </View>
  )
}
