import { palette } from 'themes/palette'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// store
import AuthProvider from 'store/AuthSusbcribeProvider'
import CustomizationProvider from '~/store/CustomizationProvider'

// routing
import 'react-native-gesture-handler'
import StackNavigation from 'routes/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

// state and fetched data manager
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <ThemeProvider theme={palette}>
      <SafeAreaProvider>
        {/* query provider */}
        <QueryClientProvider client={queryClient}>
          {/* navigation provider */}
          <NavigationContainer>
            {/* auth provider */}
            <AuthProvider>
              {/* font provider */}
              <CustomizationProvider>
                {/* screen manager */}
                <StackNavigation />
              </CustomizationProvider>
            </AuthProvider>
          </NavigationContainer>
        </QueryClientProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
