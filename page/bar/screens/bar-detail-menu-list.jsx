/* packages */
import { useState } from 'react'
import { View } from 'react-native'

/* modules */
import { FlatList } from '@/shared'
import { Div, Image, Text } from '@/common'

/* components */
import { ButtonGroup, Card } from '@/components'

/* styles */
import { useTheme } from 'styled-components'

export default ({ navigation, route }) => {
  const { categories, type, data } = route.params

  const theme = useTheme()
  const [state, setState] = useState(1)

  /* soft drinks */
  if (type === 'soft') {
    return (
      <View style={{ flex: 1 }}>
        {data && (
          <FlatList
            header={<Image source={data.image} height='200px' radii='md' />}
            headerStyle={{ marginBottom: theme.units.md }}
            data={data.data}
            keyExtractor={(_, index) => index}
            renderedItem={({ item }) => (
              <Div filled>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text size={8.5} weight='md'>
                    {item.name}
                  </Text>
                  <Text size={8} color='info' weight='md'>
                    {item.price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}
                  </Text>
                </View>
                <View>
                  <Text size={7} color='sub'>
                    {item.ingredients.join(', ')}
                  </Text>
                </View>
              </Div>
            )}
          />
        )}
      </View>
    )
  }

  /* alcoholic drinks */
  return (
    <View style={{ flex: 1 }}>
      {data && (
        <FlatList
          header={categories && categories.length > 0 ? <ButtonGroup scrollabe={categories.length > 3} selectedIndex={state} setSelectedIndex={setState} items={categories.map((el, index) => ({ id: index + 1, label: el }))} /> : null}
          headerStyle={{ marginBottom: theme.units.md }}
          data={data.data.filter((el) => el.category === categories.find((el) => el === categories[state - 1]))}
          keyExtractor={(_, index) => index}
          renderedItem={({ item }) => (
            <Card
              image={item.image}
              padding={false}
              onPress={() =>
                navigation.navigate('[stack] stack-bar-detail-menu-list-detail', {
                  type: item.type,
                })
              }>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text size={8.5} weight='md'>
                  {item.name}
                </Text>
                <Text size={8} color='info' weight='md'>
                  {item.price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}
                </Text>
              </View>
              <Text size={7} color='sub' line={1.125} turncate={2}>
                {item.slug}
              </Text>
            </Card>
          )}
        />
      )}
    </View>
  )
}
