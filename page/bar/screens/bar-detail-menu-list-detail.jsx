/* packages */
import { View, TouchableOpacity, RefreshControl } from 'react-native'
import { useCallback, useLayoutEffect, useState } from 'react'

/* components */
import { Icon } from '@/components'

/* modules */
import { Div, Image, Text } from '@/common'
import { Container, FlatList, OptionHeader } from '@/shared'

/* styles */
import { useTheme } from 'styled-components'

/* mocks */
import { variables } from '@/constant/variables'
import { useQuery } from 'react-query'
import { useFetch } from '@/hook/useFetch'

export default ({ navigation, route }) => {
  const { type, data: drink, id } = route.params

  const theme = useTheme()

  const [turncation, setTurncation] = useState(false)

  /* data fetching */
  const [refresh, setRefresh] = useState(false)

  const { data, isLoading, error, refetch } = useQuery(['@Bars-Detail-Menu-Drinks-Detail', id], () => getClientSideQueries.getAlcoholDrink(id), {
    initialData: drink,
  })

  let onRefresh = useCallback(() => {
    setRefresh(true)
    refetch().then(() => setRefresh(false))
  }, [])

  if (isLoading) return <Text>Loading...</Text>

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <Container stickyHeaderIndices={[0]} safeArea={false} padding={false} refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      <View style={{ backgroundColor: theme.core.background['variant_container'] }}>
        <Image source={`${variables.STORAGE_LINK}/bars/menu/alcohol/${data.image}`} height='254px' />
      </View>

      <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.sm }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* title */}
          <Text weight='bd' size={14} t={'capitalize'}>
            {data.name}
          </Text>
          {/* glass price */}
          {type === 'glass' && (
            <Text weight='md' color='info' size={12}>
              {data.price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}
            </Text>
          )}
        </View>
        {/* slug */}
        {data.slug && (
          <Text size={8} color='small'>
            {data.slug}
          </Text>
        )}
        {/* size */}
        {data.size && (
          <Text size={8} weight='md' color='sub'>
            {data.size}
          </Text>
        )}
      </View>

      {/* pricing section only when type is bottle */}
      {type === 'bottle' && (
        <View style={{ paddingHorizontal: theme.units.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: theme.units.md }}>
          <View style={{ flex: 1 }}>
            <Div filled>
              <View style={{ flexDirection: 'row' }}>
                <Image source={'https://cdn-icons-png.flaticon.com/512/45/45637.png'} width='42px' height='42px' />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text size={7} weight='md' line={1.125}>
                    Bottle
                  </Text>
                  <Text size={7} weight='md' color='info' line={1.125}>
                    {data.price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}
                  </Text>
                </View>
              </View>
            </Div>
          </View>
          <View style={{ flex: 1 }}>
            <Div filled>
              <View style={{ flexDirection: 'row' }}>
                <Image source={'https://cdn-icons-png.flaticon.com/512/45/45211.png'} width='42px' height='42px' />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text size={7} weight='md' line={1.125}>
                    Glass
                  </Text>
                  <Text size={7} weight='md' color='info' line={1.125}>
                    {data.small_price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}
                  </Text>
                </View>
              </View>
            </Div>
          </View>
        </View>
      )}

      {/* section only when type is glass */}
      {type === 'glass' && (
        <View style={{ paddingHorizontal: theme.units.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: theme.units.md }}>
          <View style={{ flex: 1 }}>
            <Div filled>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                <Text size={7} weight='md' line={1.125}>
                  Glass Type
                </Text>
                <Text size={7} weight='md' color='info' line={1.125} t='uppercase'>
                  LONG
                </Text>
              </View>
            </Div>
          </View>
          {data.features && data.features.length > 0 && (
            <View style={{ flex: 1 }}>
              <Div filled>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                  <Text size={7} weight='md' line={1.125}>
                    Main Alcohol
                  </Text>
                  <Text size={7} weight='md' color='info' line={1.125} t='uppercase'>
                    {data.features[0].label}
                  </Text>
                </View>
              </Div>
            </View>
          )}
        </View>
      )}

      {/* description */}
      {data.description && (
        <TouchableOpacity style={{ paddingHorizontal: theme.units.md, gap: 4 }} onPress={() => setTurncation(!turncation)}>
          <Text size={7} color='sub' t={'capitalize'} turncate={turncation ? null : 3} line={1.5} align='justify'>
            {data.description}
          </Text>
          <Text size={6} color='info' weight='md' t={'capitalize'}>
            {turncation ? 'see less' : 'see more'}
          </Text>
        </TouchableOpacity>
      )}

      {/* preperation section only when type is glass */}
      {type === 'glass' && data.preperation && (
        <View style={{ paddingHorizontal: theme.units.md }}>
          <Div filled title='preperation'>
            <Text size={7} color='sub' line={1.125}>
              {data.preperation}
            </Text>
          </Div>
        </View>
      )}

      {/* feature horizontal list, this type of list is only for bottles */}
      {type === 'bottle' && data.features && data.features.length > 0 && (
        <Container padding={false} safeArea={false} horizontal>
          <FlatList
            data={data.features}
            gap='sm'
            column={data.features.length}
            keyExtractor={(item) => item.id}
            renderedItem={({ item }) => (
              <View key={item.id} style={{ backgroundColor: theme.core.background['variant_container'], borderRadius: theme.units.sm, alignItems: 'center', overflow: 'hidden', minWidth: 100, gap: theme.units.md }}>
                <View style={{ width: '100%', padding: theme.units.md, backgroundColor: theme.core.text['variant_info'] }}>
                  <Text align='center' t='uppercase' weight='md' color='neutral'>
                    {item.label}
                  </Text>
                </View>
                <Image source={`${variables.STORAGE_LINK}/bars/menu/alcohol/features/${item.image}`} height='36px' width='36px' />
                <View style={{ width: '100%', padding: theme.units.sm, paddingBottom: theme.units.md }}>
                  <Text align='center' t='uppercase' weight='md'>
                    {item.value}
                  </Text>
                </View>
              </View>
            )}
            nestedScrollEnabled={true}
            scrollEnabled={false}
          />
        </Container>
      )}

      {/* served with */}
      <View style={{ paddingHorizontal: theme.units.md }}>
        <Div filled title='best served with'>
          <Text size={7} color='sub' line={1.125}>
            {data.served_slug}
          </Text>
          <View style={{ flexDirection: 'row', gap: theme.units.sm, flexWrap: 'wrap' }}>
            {JSON.parse(data.served_with).map((item, index) => (
              <Div key={index}>
                <Text size={7} line={1.125} t={'capitalize'}>
                  {item}
                </Text>
              </Div>
            ))}
          </View>
        </Div>
      </View>

      {/* ingredients and only when type is glass */}
      {type === 'glass' && data.features && data.features.length > 0 && (
        <View style={{ paddingHorizontal: theme.units.md, gap: theme.units.sm }}>
          <Div filled title='ingrediants'>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', columnGap: theme.units.md, rowGap: theme.units.sm }}>
              {data.features.map((item, index) => (
                <View key={item.id} style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                  <Icon icon={require('@/assets/icons/product/colorful/badge-check.png')} size={16} />
                  <Text t={'capitalize'} size={7} color='sub'>
                    {item.label}
                  </Text>
                </View>
              ))}
            </View>
          </Div>
        </View>
      )}
    </Container>
  )
}

const getClientSideQueries = {
  getAlcoholDrink: (id) =>
    useFetch(`/api/bars/menu/alcohol-drinks/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      }),
}