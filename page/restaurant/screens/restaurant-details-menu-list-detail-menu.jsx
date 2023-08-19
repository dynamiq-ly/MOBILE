/* packages */
import { View, TouchableOpacity } from 'react-native'
import { useState } from 'react'

/* modules */
import { Container } from '@/shared'

/* components */
import { Div, Image, Text } from '@/common'

/* styles */
import { useTheme } from 'styled-components'

export default ({ route }) => {
  const { data } = route.params

  const theme = useTheme()
  const [turncation, setTurncation] = useState(false)

  return (
    <Container safeArea={false}>
      <Image source={data.image} height='200px' radii='md' />

      {/* title */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text weight='bd' size={14} t={'capitalize'}>
          {data.label}
        </Text>
        <Text size={10} line={1.25} color='info' turncate={1} t='capitalize' weight='md'>
          {data.price}
        </Text>
      </View>

      {/* description */}
      <TouchableOpacity style={{ gap: 4 }} onPress={() => setTurncation(!turncation)}>
        <Text size={7} color='sub' t={'capitalize'} turncate={turncation ? null : 3} line={1.25} align='justify'>
          {data.slug}
        </Text>
        <Text size={6} color='info' weight='md' t={'capitalize'}>
          {turncation ? 'see less' : 'see more'}
        </Text>
      </TouchableOpacity>

      {/* plate features */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: theme.units.md }}>
        <View style={{ flex: 1 }}>
          <Div filled>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
              <Image source={'https://cdn-icons-png.flaticon.com/512/1584/1584942.png'} width='26px' height='26px' />
              <Text size={7} weight='md' line={1.125}>
                {data.time}
              </Text>
            </View>
          </Div>
        </View>

        <View style={{ flex: 1 }}>
          <Div filled>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
              <Image source={'https://cdn-icons-png.flaticon.com/512/5536/5536449.png'} width='26px' height='26px' />
              <Text size={7} weight='md' line={1.125}>
                {data.grams}
              </Text>
            </View>
          </Div>
        </View>

        <View style={{ flex: 1 }}>
          <Div filled>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
              <Image source={'https://cdn-icons-png.flaticon.com/512/9816/9816515.png'} width='26px' height='26px' />
              <Text size={7} weight='md' line={1.125}>
                {data.calories}
              </Text>
            </View>
          </Div>
        </View>
      </View>

      {/*this food varience*/}
      {data.ingredients && (
        <View>
          <Div filled title='Food varience'>
            <View style={{ flexDirection: 'row', flex: 1, gap: theme.units.sm, flexWrap: 'wrap' }}>
              {data.ingredients
                .filter((el) => el.featured)
                .map((el, index) => (
                  <Div key={index}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                      <Image source={el.image ? el.image : require('@/assets/icons/default/cube-dark.png')} width='20px' height='20px' contentFit='contain' />
                      <Text size={6.5}>{el.label}</Text>
                    </View>
                  </Div>
                ))}
            </View>
          </Div>
        </View>
      )}
    </Container>
  )
}
