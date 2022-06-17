import AreaView from 'utils/TabAreaView'
import Text from 'components/text/Text'
import Button from 'components/button/Button'
import Radio from 'components/checkbox/Radio'
import CloseHeader from 'components/header/CloseHeader'
import RadioButtonCard from 'components/cards/RadioButtonCard'

import { useState } from 'react'
import { View } from '~/styles/detail.module'
import { View as Gap } from 'react-native'
import {
  Image,
  ButtonWrapperDetail,
  SafeAreaRowWrapperDetail,
} from 'styles/detail.module'

const AcloholDrinkDetails = ({ route }) => {
  const { _data } = route.params
  const [type, setType] = useState('bottle')
  return (
    <View>
      <CloseHeader />
      <Image source={{ uri: _data.bottle_image }} />
      <AreaView>
        <Text content={_data.bottle_name} weight={700} up={'cap'} size={32} />
        <Text
          content={`${_data.bottle_region} ${_data.bottle_date_made}`}
          up={'cap'}
          size={21}
        />

        <Gap style={{ marginBottom: 10 }} />
        <Text content={_data.bottle_description} color={'gray'} size={16} />
        <SafeAreaRowWrapperDetail>
          <Radio
            children={
              <RadioButtonCard
                name={'Bottle'}
                price={_data.bottle_price_bottle}
                image={
                  'https://media.istockphoto.com/photos/red-wine-bottle-picture-id987571978?k=20&m=987571978&s=612x612&w=0&h=zGIYQaDvaDeuolW_AHecpQEhzEsPSDYC-7fBiJSak10='
                }
                state={type === 'bottle' && true}
              />
            }
            onPress={() => setType('bottle')}
          />
          <Radio
            children={
              <RadioButtonCard
                name={'Glass'}
                price={_data.bottle_price_glass}
                image={
                  'https://media.istockphoto.com/photos/glass-of-red-wine-on-white-picture-id515707206?k=20&m=515707206&s=612x612&w=0&h=tii_cH6HuhU2SPSqsCDbX___6XMwRQmOd3d4hSRitPI='
                }
                state={type === 'glass' && true}
              />
            }
            onPress={() => setType('glass')}
          />
        </SafeAreaRowWrapperDetail>
      </AreaView>
      <ButtonWrapperDetail>
        <Button title={`order ${type}`} />
      </ButtonWrapperDetail>
    </View>
  )
}

export default AcloholDrinkDetails
