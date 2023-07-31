/* packages */
import { useState } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

/* styles */
import { useTheme } from 'styled-components'

/* components */
import { SimpleCard, FullCard } from '@/components'

/* utilities */
import { shadow } from '@/util/shadow'
import { data } from '@/mocks/home.data'
import { Div, Image, Text } from '@/common'
import { Container, FlatList } from '@/shared'
import { StyledSimpleCard } from '@/style/card.style'

export default ({ navigation }) => {
  const theme = useTheme()

  /* scroll */
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = (event) => {
    // setScrollY(event.nativeEvent.contentOffset.y)
  }

  return (
    <Container stickyHeaderIndices={[0]} padding={false} onScroll={handleScroll} scrollEventThrottle={16}>
      <Image source={data.banner[0].image} height='254px' />

      {/* upcomings */}
      <View>
        {data.upcoming.title && (
          <View style={{ paddingHorizontal: theme.units.md, gap: 2 }}>
            <Text weight='md' t={'capitalize'} size={11}>
              {data.upcoming.title}
            </Text>
            {data.upcoming.subtitle && (
              <Text color='sub' size={7}>
                {data.upcoming.subtitle}
              </Text>
            )}
          </View>
        )}
        {data.upcoming.data ? (
          <FlatList
            data={data.upcoming.data}
            gap='md'
            column={data.upcoming.data.length}
            keyExtractor={(_, index) => index}
            renderedItem={({ item }) => (
              <StyledSimpleCard key={item.name} style={{ height: 72, ...shadow(), gap: theme.units.md }} onPress={() => navigation.navigate(item.id)}>
                <Image source={item.image} height='21px' width='21px' />
                <Text size={6.5} t={'capitalize'} turncate={1}>
                  {item.name}
                </Text>
              </StyledSimpleCard>
            )}
            nestedScrollEnabled={true}
            scrollEnabled={false}
          />
        ) : (
          <View style={{ padding: theme.units.md }}>
            <Div filled>
              <Text align='center' size={8} weight='md' color='info'>
                No upcomings yet
              </Text>
            </Div>
          </View>
        )}
      </View>

      {/* quick access */}
      <View>
        {data.quickAccess.title && (
          <View style={{ paddingHorizontal: theme.units.md, gap: 2 }}>
            <Text weight='md' t={'capitalize'} size={11}>
              {data.quickAccess.title}
            </Text>
            {data.quickAccess.subtitle && (
              <Text color='sub' size={7}>
                {data.quickAccess.subtitle}
              </Text>
            )}
          </View>
        )}
        <FlatList
          data={data.quickAccess.data}
          gap='md'
          column={data.quickAccess.data.length}
          keyExtractor={(_, index) => index}
          renderedItem={({ item }) => (
            <StyledSimpleCard key={item.name} style={{ height: 72, ...shadow(), gap: theme.units.md }} onPress={() => navigation.navigate(item.id)}>
              <Image source={item.image} height='21px' width='21px' />
              <Text size={6.5} t={'capitalize'} turncate={1}>
                {item.name}
              </Text>
            </StyledSimpleCard>
          )}
          nestedScrollEnabled={true}
          scrollEnabled={false}
        />
      </View>

      {/* good plans */}
      <View>
        {data.plans.title && (
          <View style={{ paddingHorizontal: theme.units.md, gap: 2 }}>
            <Text weight='md' t={'capitalize'} size={11}>
              {data.plans.title}
            </Text>
            {data.plans.subtitle && (
              <Text color='sub' size={7}>
                {data.plans.subtitle}
              </Text>
            )}
          </View>
        )}
        <Container padding={false} horizontal>
          <FlatList
            data={data.plans.data}
            gap='md'
            column={data.plans.data.length}
            keyExtractor={(_, index) => index}
            renderedItem={({ item }) => (
              <View style={{ minWidth: 125 }}>
                <SimpleCard key={item.name} title={item.name} image={item.image} onPress={() => navigation.navigate(item.id)} />
              </View>
            )}
            nestedScrollEnabled={true}
            scrollEnabled={false}
          />
        </Container>
      </View>

      {/* services */}
      <View>
        {data.services.title && (
          <View style={{ paddingHorizontal: theme.units.md, gap: 2 }}>
            <Text weight='md' t={'capitalize'} size={11}>
              {data.services.title}
            </Text>
            {data.services.subtitle && (
              <Text color='sub' size={7}>
                {data.services.subtitle}
              </Text>
            )}
          </View>
        )}

        <FlatList
          data={data.services.data}
          gap='md'
          keyExtractor={(_, index) => index}
          renderedItem={({ item }) => (
            <View style={{ minWidth: 125 }}>
              <FullCard key={item.id} title={item.name} h={92} image={item.image} onPress={() => navigation.navigate(item.id)} item='end' />
            </View>
          )}
          nestedScrollEnabled={true}
          scrollEnabled={false}
        />
      </View>

      {/* luxury */}
      <View>
        {data.luxury.title && (
          <View style={{ paddingHorizontal: theme.units.md, gap: 2 }}>
            <Text weight='md' t={'capitalize'} size={11}>
              {data.luxury.title}
            </Text>
            {data.luxury.subtitle && (
              <Text color='sub' size={7}>
                {data.luxury.subtitle}
              </Text>
            )}
          </View>
        )}

        <FlatList
          data={data.luxury.data}
          gap='md'
          keyExtractor={(_, index) => index}
          renderedItem={({ item }) => (
            <View style={{ minWidth: 125 }}>
              <FullCard key={item.name} title={item.name} h={92} image={item.image} onPress={() => navigation.navigate(item.id)} item='end' />
            </View>
          )}
          nestedScrollEnabled={true}
          scrollEnabled={false}
        />
      </View>
    </Container>
  )
}
