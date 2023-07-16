/* packages */
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'

/* routes */
import TabNavigation from './TabNavigation'

/* components */
import { features } from '@/config/features'
import { DrawerItem } from '@/components'

/* styles */
import { useTheme } from 'styled-components'
import { View } from 'react-native'

const Drawer = createDrawerNavigator()

export default ({}) => {
  const theme = useTheme()

  return (
    <Drawer.Navigator
      initialRouteName='[drawer] drawer-home'
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: { width: '80%', padding: theme.units.md, backgroundColor: theme.core.neutral['900'] },
        sceneContainerStyle: { backgroundColor: theme.core.neutral['900'] },
      }}
      drawerContent={(props) => {
        return <DrawerContent {...props} navigation={props.navigation} />
      }}>
      <Drawer.Screen name='[drawer] drawer-home'>{(props) => <TabNavigation {...props} />}</Drawer.Screen>
    </Drawer.Navigator>
  )
}

const DrawerContent = ({ navigation }) => {
  const theme = useTheme()
  const { bottom } = useSafeAreaInsets()
  const [active, setActive] = useState(features[0].id)

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ backgroundColor: theme.core.neutral['900'], gap: theme.units.sm, paddingBottom: bottom }}>
      {features.map((f, index) => (
        <View key={index} style={{ gap: theme.units.sm }}>
          {f.map((feature, key) => (
            <DrawerItem
              key={key}
              label={feature.name}
              icon={feature.icon}
              active={active === feature.id}
              color={feature.color}
              onPress={() => {
                setActive(feature.id)
                navigation.navigate(feature.id, feature.param)
              }}
            />
          ))}
          {index < features.length - 1 && <View style={{ height: 1, backgroundColor: '#323232', borderRadius: theme.units.md }} />}
        </View>
      ))}
    </DrawerContentScrollView>
  )
}
