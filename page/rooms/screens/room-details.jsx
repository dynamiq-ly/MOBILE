/* packages */
import { useState } from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

/* modules */
import { Container } from '@/shared'

/* components */
import { Button, Div, Image, Text } from '@/common'
import { Accordion, Icon, Pager } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

export default ({ route }) => {
  const { data, previousScreen } = route.params

  const theme = useTheme()
  const [turncation, setTurncation] = useState(false)

  return (
    <View style={{ flex: 1 }}>
      <Container stickyHeaderIndices={[0, 7]} padding={false} safeArea={false}>
        <Pager slider={data.images} interval={5000} />

        <View style={{ gap: 6 }}>
          {/* title, price, virtual */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: theme.units.md }}>
            {/* title & price */}
            <View style={{ flex: 1, gap: 4 }}>
              {/* title */}
              <Text weight='bd' size={14} t={'capitalize'}>
                {data.slug}
              </Text>
              {/* price */}
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text size={7} color='small' weight='md' t={'capitalize'} turncate={2}>
                  {previousScreen === 'room-upgrade' ? 'Upgrade will cost' : 'starting from'}
                </Text>
                <Text size={7} color='info' weight='md' turncate={2}>
                  {previousScreen === 'room-upgrade' ? ' ' + data.room_config.room_upgrade_price : ' ' + data.price.toString()}
                </Text>
                {previousScreen !== 'room-upgrade' && (
                  <Text size={7} color='small' weight='md' turncate={2}>
                    {' / night'}
                  </Text>
                )}
              </View>
            </View>
            {/* 360 */}
            {data.virtual && (
              <TouchableOpacity
                style={{
                  ...smallRounedButtonStyle,
                  borderColor: `${theme.core.text['variant_info']}50`,
                  backgroundColor: theme.core.background['variant_info'],
                }}>
                <Icon icon={require('@/assets/icons/product/monocrome/360-view-dark.png')} size={21} />
              </TouchableOpacity>
            )}
          </View>

          {/* location */}
          <View style={{ paddingHorizontal: theme.units.md }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm - 2 }}>
              <Image source={require('@/assets/icons/product/monocrome/location-dark.png')} height='14px' width='14px' />
              <Text size={7} color='sub'>
                {`Located in ${getNumberWithSuffix(data.room_floor)} Floor`}
              </Text>
            </View>
          </View>
        </View>

        {/* room feautes */}
        {data.roomFaetures && (
          <View style={{ paddingHorizontal: theme.units.md }}>
            <Div filled title='Room Features'>
              <View style={{ flexDirection: 'row', flex: 1, gap: theme.units.sm, flexWrap: 'wrap' }}>
                {data.roomFaetures
                  .filter((el) => el.featured)
                  .map((el, index) => (
                    <Div key={index}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sm }}>
                        <Image source={el.image ? el.image : require('@/assets/icons/default/cube-dark.png')} width='14px' height='14px' contentFit='contain' />
                        <Text size={6.5}>{el.label}</Text>
                      </View>
                    </Div>
                  ))}
              </View>
            </Div>
          </View>
        )}

        {/* description */}
        <TouchableOpacity style={{ paddingHorizontal: theme.units.md, gap: 4 }} onPress={() => setTurncation(!turncation)}>
          <Text size={7} color='sub' t={'capitalize'} turncate={turncation ? null : 3} line={1.25} align='justify'>
            {data.description}
          </Text>
          <Text size={6} color='info' weight='md' t={'capitalize'}>
            {turncation ? 'see less' : 'see more'}
          </Text>
        </TouchableOpacity>

        {/* feautres */}
        <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.sm }}>
          {/* room features */}
          {data.roomFaetures && (
            <Accordion title='Room Features' background='container' border={'sub'}>
              <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', columnGap: theme.units.md, rowGap: theme.units.sm }}>
                {data.roomFaetures.map((el) => (
                  <View key={el.id} style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                    <Icon icon={require('@/assets/icons/product/colorful/badge-check.png')} size={16} />
                    <Text t={'capitalize'} size={7} color='sub'>
                      {el.label}
                    </Text>
                  </View>
                ))}
              </View>
            </Accordion>
          )}

          {/* other features */}
          {data.otherFeautures &&
            data.otherFeautures.map((el) => (
              <Accordion key={el.id} title={el.label} background='container' border={'sub'}>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', columnGap: theme.units.md, rowGap: theme.units.sm }}>
                  {el.keys.split(',').map((note, index) => (
                    <View key={index} style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                      <Icon icon={require('@/assets/icons/product/colorful/badge-check.png')} size={16} />
                      <Text t={'capitalize'} size={7} color='sub'>
                        {note}
                      </Text>
                    </View>
                  ))}
                </View>
              </Accordion>
            ))}
        </View>
      </Container>
      {/* room is upgradable */}
      {data.room_config && data.room_config.room_booking && (
        <Button style={{ marginBottom: theme.units.lg, marginTop: theme.units.sm, marginHorizontal: theme.units.md }}>{previousScreen === 'room-upgrade' ? 'Upgrade Room' : 'Book Now'}</Button>
      )}
    </View>
  )
}

const smallRounedButtonStyle = {
  width: 38,
  height: 38,
  borderWidth: 1,
  borderRadius: 9999,
  borderStyle: 'solid',
  alignItems: 'center',
  justifyContent: 'center',
}

let getNumberWithSuffix = (n) => {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}