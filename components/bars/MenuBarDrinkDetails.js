import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import CloseHeader from 'components/header/CloseHeader'

import { useState } from 'react'
import { RadiusView, View } from '~/styles/detail.module'
import { View as Gap } from 'react-native'
import { Image, SafeAreaRowWrapperDetail } from 'styles/detail.module'

import { baseUrl, __query } from 'hooks/useApi'

const MenuBarDrinkDetails = ({ route }) => {
  const { _data } = route.params
  const [type, setType] = useState('bottle')
  return (
    <View>
      <CloseHeader />
      <Image
        source={{
          uri: `${baseUrl}storage/bars/drinks/${_data.bar_drink_image}`,
        }}
      />
      <RadiusView>
        <AreaView>
          <Text
            content={_data.bar_drink_name}
            weight={700}
            up={'cap'}
            size={32}
          />
          <Text content={`${_data.bar_drink_price}$`} up={'cap'} size={21} />

          <Gap style={{ marginBottom: 10 }} />
          <Text content={_data.bottle_description} color={'gray'} size={16} />
          <SafeAreaRowWrapperDetail></SafeAreaRowWrapperDetail>
        </AreaView>
      </RadiusView>
    </View>
  )
}

export default MenuBarDrinkDetails
