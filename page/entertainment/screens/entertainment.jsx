/*package*/
import { View, TouchableOpacity } from 'react-native'
import { useCallback, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

/* styles */
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

/* components */
import { FullCard, Dialog } from '@/components'

/* utilities */
import { Container, FlatList } from '@/shared'
import { BottomSheet } from '@/components'
import { Div, Image, Text } from '@/common'

/*mocks*/
import { data } from '@/mocks/entertainment.data'

export default ({ navigation }) => {
  const theme = useTheme()
  const { top } = useSafeAreaInsets()

  const [turncation, setTurncation] = useState(false)

  const paddingTop = useSharedValue(theme.units['md'])

  const animatedStyle = useAnimatedStyle(() => ({
    flex: 1,
    gap: theme.units['md'],
    paddingHorizontal: theme.units['md'],
    paddingTop: withTiming(paddingTop.value),
  }))

  /* sheet animation */
  const handleSheetChanges = useCallback((index) => {
    index === 3 ? (paddingTop.value = top) : (paddingTop.value = theme.units['md'])
  }, [])

  return (
    <Container stickyHeaderIndices={[0]} padding={false} safeArea={false}>
      <Image source={data.image} height='254px' />

      {/* title */}
      <View style={{ paddingHorizontal: theme.units.md }}>
        <Text weight='bd' size={14} t={'capitalize'}>
          {data.title}
        </Text>
      </View>
      {/*description*/}

      <TouchableOpacity style={{ paddingHorizontal: theme.units.md, gap: 4 }} onPress={() => setTurncation(!turncation)}>
        <Text size={7} color='sub' t={'capitalize'} turncate={turncation ? null : 3} line={1.25} align='justify'>
          {data.description}
        </Text>
        <Text size={6} color='info' weight='md' t={'capitalize'}>
          {turncation ? 'see less' : 'see more'}
        </Text>
      </TouchableOpacity>

      <View style={{ paddingHorizontal: theme.units.md }}>
        {/*staff*/}
        <Div filled title='staff' radii='md'>
          <BottomSheet
            handleSheetChange={handleSheetChanges}
            triggerElement={
              <View style={{ position: 'relative' }}>
                <Div>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sb }}>
                    <Image source={data.staff[0].image} height='32px' width='32px' radii='rounded' />
                    <View>
                      <Text turncate={1} size={8}>
                        {data.staff[0].name}
                      </Text>
                      <Text turncate={1} size={7} color='info'>
                        {data.staff[0].position}
                      </Text>
                    </View>
                  </View>
                </Div>
                <View style={{ width: '100%', alignItems: 'center' }}>
                  <Feather name='chevron-down' size={14} color='black' />
                </View>
              </View>
            }>
            <Animated.View style={{ ...animatedStyle }}>
              <Text t={'capitalize'} size={10} weight='md'>{`List of ${data.title} staff`}</Text>
              {data.staff.map((staff, index) => (
                <Div filled key={index}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.units.sb }}>
                    <Image source={staff.image} height='28px' width='28px' radii='rounded' />
                    <View>
                      <Text turncate={1} size={8}>
                        {staff.name}
                      </Text>
                      <Text turncate={1} size={7} color='info'>
                        {staff.position}
                      </Text>
                    </View>
                  </View>
                </Div>
              ))}
            </Animated.View>
          </BottomSheet>
        </Div>
      </View>

      {/* activities */}

      <FlatList
        data={data.activities}
        gap='md'
        keyExtractor={(_, index) => index}
        renderedItem={({ item }) => <FullCard key={item.id} title={item.name} h={92} image={item.image} onPress={() => navigation.navigate(item.id)} item='end' />}
        nestedScrollEnabled={true}
        scrollEnabled={false}
      />

      {/* config*/}
      <FlatList
        data={data.config}
        gap='md'
        keyExtractor={(_, index) => index}
        renderedItem={({ item }) => (
          <Dialog key={item.id} title={item.name} onPress={() => navigation.navigate(item.id)} background='success' small={false}>
            <Text t={'capitalize'} weight='md' size={8.5}>
              {item.label}
            </Text>
            <Text turncate={1} color='sub'>
              {item.description}
            </Text>
          </Dialog>
        )}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        nested={false}
      />
    </Container>
  )
}
