import { MenuTab } from 'screens/export'
import {
  TextHeader,
  StackHeader,
  SafetyScreen,
  SafetyDetail,
  RestoList,
  RestoDetail,
  BarsList,
  BarDetail,
} from 'components/export'
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

      <Stack.Group key={'safety stack'}>
        {safety_Stack_Array.map((el, key) => {
          return (
            <Stack.Screen
              key={key}
              name={el.path}
              component={el.component}
              options={{
                header: el.header,
              }}
            />
          )
        })}
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default MenuStackNavigation

const safety_Stack_Array = [
  {
    path: 'menu-tab-stack-safety',
    component: SafetyScreen,
    header: () => <StackHeader name={'safety measures'} />,
  },
  {
    path: 'menu-tab-stack-safety-detail',
    component: SafetyDetail,
    header: ({ route }) => <StackHeader name={route.params._data.name} />,
  },
  {
    path: 'menu-tab-stack-restaurant-list',
    component: RestoList,
    header: () => <StackHeader name={'restaurants'} />,
  },
  {
    path: 'menu-tab-stack-bar-list',
    component: BarsList,
    header: () => <StackHeader name={'bars'} />,
  },
  {
    path: 'menu-tab-stack-restaurant-detail',
    component: RestoDetail,
    header: () => false,
  },
  {
    path: 'menu-tab-stack-bar-detail',
    component: BarDetail,
    header: () => false,
  },
]
