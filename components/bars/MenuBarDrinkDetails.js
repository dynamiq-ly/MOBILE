import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import Button from 'components/button/Button'
import Radio from 'components/checkbox/Radio'
import CloseHeader from 'components/header/CloseHeader'
import RadioButtonCard from 'components/cards/RadioButtonCard'

import { useState } from 'react'
import { RadiusView, View } from '~/styles/detail.module'
import { View as Gap } from 'react-native'
import {
  Image,
  ButtonWrapperDetail,
  SafeAreaRowWrapperDetail,
} from 'styles/detail.module'

const MenuBarDrinkDetails = ({ route }) => {
  const { _data } = route.params
  const [type, setType] = useState('bottle')
  return (
    <View>
      <CloseHeader />
      <Image source={{ uri: _data.bottle_image }} />
      <RadiusView>
        <AreaView>
          <Text content={_data.bottle_name} weight={700} up={'cap'} size={32} />
          <Text
            content={`${_data.bottle_region} ${_data.bottle_date_made}`}
            up={'cap'}
            size={21}
          />

          <Gap style={{ marginBottom: 10 }} />
          <Text content={_data.bottle_description} color={'gray'} size={16} />
          <SafeAreaRowWrapperDetail></SafeAreaRowWrapperDetail>
        </AreaView>
      </RadiusView>
    </View>
  )
}

export default MenuBarDrinkDetails
