import { Pressable } from 'react-native'

export default function Radio({ checked = false, onChange, children }) {
  return <Pressable onPress={() => onChange(!checked)}>{children}</Pressable>
}
