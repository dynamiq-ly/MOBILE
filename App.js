import 'react-native-gesture-handler'

/* hooks */
import { View } from 'react-native'
import { useCallback } from 'react'

/* custom font loading */
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

/* theming using styled component */
import { theme } from '@/constant/theme'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

/* default components imports */
import { StatusBar } from 'expo-status-bar'
import StackNavigation from '@/navigation/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

/* data providers */
import {QueryClient,  QueryClientProvider} from 'react-query'

/* ignore warning */
import { LogBox } from 'react-native'
import { ignore } from '@/config/warning-ignore'

const queryClient = new QueryClient()
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Helvetica-Light': require('@/assets/fonts/Manrope-Light.ttf'),
    'Helvetica-Regular': require('@/assets/fonts/Manrope-Regular.ttf'),
    'Helvetica-Medium': require('@/assets/fonts/Manrope-SemiBold.ttf'),
    'Helvetica-Bold': require('@/assets/fonts/Manrope-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={{ ...theme }}>
      <StatusBar style={'auto'} />
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <BottomSheetModalProvider>
              <SafeAreaProvider>
                <NavigationContainer>
                  <StackNavigation />
                </NavigationContainer>
              </SafeAreaProvider>
            </BottomSheetModalProvider>
          </View>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

LogBox.ignoreLogs([...ignore])
