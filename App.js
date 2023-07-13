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

/* ignore warning */
import { LogBox } from 'react-native'
import { ignore } from '@/config/warning-ignore'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Helvetica-Light': require('@/assets/fonts/HelveticaNeueLight.otf'),
    'Helvetica-Regular': require('@/assets/fonts/HelveticaNeueRoman.otf'),
    'Helvetica-Medium': require('@/assets/fonts/HelveticaNeueMedium.otf'),
    'Helvetica-Bold': require('@/assets/fonts/HelveticaNeueBold.otf'),
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
    </ThemeProvider>
  )
}

LogBox.ignoreLogs([...ignore])
