import { MenuTab } from 'screens/export'
import { TextHeader } from 'components/export'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const MenuStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='menu-tab-stack'>
      <Stack.Screen
        name='menu-tab-stack'
        component={MenuTab}
        options={{
          header: () => <TextHeader name={'Menu'} />,
        }}
      />
    </Stack.Navigator>
  )
}

export default MenuStackNavigation
