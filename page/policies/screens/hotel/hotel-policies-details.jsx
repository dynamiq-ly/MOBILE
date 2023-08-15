/* packages */
import { WebView } from 'react-native-webview'
import { Platform } from 'react-native'

/* styles */
import { useTheme } from 'styled-components'

export default ({ route }) => {
  const { file } = route.params

  const theme = useTheme()

  return (
    <WebView
      style={{ flex: 1, backgroundColor: theme.core.background['variant_view'] }}
      source={{ uri: Platform.OS === 'ios' ? file : `https://docs.google.com/gview?embedded=true&url=${file}` || 'https://landing.utells.com/' }}
    />
  )
}
