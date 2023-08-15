/* packages */
import { WebView } from 'react-native-webview'
import { Platform } from 'react-native'

export default ({ route }) => {
  const { data } = route.params

  return <WebView style={{ flex: 1 }} source={{ uri: Platform.OS === 'ios' ? data : `https://docs.google.com/gview?embedded=true&url=${data}` || 'https://landing.utells.com/' }} />
}
