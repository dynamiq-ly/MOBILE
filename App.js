import { palette } from 'themes/palette'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// store
import AuthProvider from 'store/AuthSusbcribeProvider'

// routing
import 'react-native-gesture-handler'
import StackNavigation from 'routes/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

// state and fetched data manager
import { Platform, Text, View } from 'react-native'
import { useCallback, useEffect } from 'react'
import { enableScreens } from 'react-native-screens'
import { QueryClient, QueryClientProvider } from 'react-query'

// custom font
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

const queryClient = new QueryClient()
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    SF_100: require('./assets/fonts/SF_100.ttf'),
    SF_200: require('./assets/fonts/SF_200.ttf'),
    SF_300: require('./assets/fonts/SF_300.ttf'),
    SF_400: require('./assets/fonts/SF_400.ttf'),
    SF_500: require('./assets/fonts/SF_500.ttf'),
    SF_600: require('./assets/fonts/SF_600.ttf'),
    SF_700: require('./assets/fonts/SF_700.ttf'),
    SF_800: require('./assets/fonts/SF_800.ttf'),
    SF_900: require('./assets/fonts/SF_900.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  useEffect(() => {
    if (Platform.OS === 'ios') {
      enableScreens(false)
    }
  }, []) // eslint-disable-line

  if (!fontsLoaded)
    return (
      <View style={{ paddingTop: 100 }}>
        <Text>{JSON.stringify(fontsLoaded)}</Text>
      </View>
    )
  else {
    return (
      <ThemeProvider theme={palette}>
        <SafeAreaProvider>
          {/* query provider */}
          <QueryClientProvider client={queryClient}>
            {/* navigation provider */}
            <NavigationContainer>
              {/* auth provider */}
              <AuthProvider>
                {/* screen manager */}
                <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
                  <StackNavigation />
                </View>
              </AuthProvider>
            </NavigationContainer>
          </QueryClientProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    )
  }
}
