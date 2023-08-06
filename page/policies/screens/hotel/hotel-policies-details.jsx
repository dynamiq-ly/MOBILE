/* packages */
import { WebView } from 'react-native-webview'

export default ({ route }) => {
  const { file } = route.params

  return <WebView style={{ flex: 1 }} source={{ uri: file || 'https://landing.utells.com/' }} />
}
