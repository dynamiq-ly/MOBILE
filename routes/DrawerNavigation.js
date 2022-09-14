import TabNavigation from './TabNavigation'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MenuScreen from '../screens/src/Menu.screen'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Home-initial-drawer'
      screenOptions={{
        header: () => false,
        swipeEnabled: true,
        drawerAllowFontScaling: true,
        drawerStyle: {
          width: '85%',
        },
      }}
      drawerContent={(props) => <MenuScreen {...props} />}>
      <Drawer.Screen name={'Home-initial-drawer'} component={TabNavigation} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
