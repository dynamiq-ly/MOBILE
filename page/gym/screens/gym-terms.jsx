/* packages */
import { WebView } from 'react-native-webview'

export default ({ route }) => {
  const { data } = route.params

  return <WebView style={{ flex: 1 }} source={{ uri: data || 'https://landing.utells.com/' }} />
}
