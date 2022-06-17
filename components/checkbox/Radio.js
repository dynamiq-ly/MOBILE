import { Pressable } from 'react-native'

export default function Radio({ children, ...rest }) {
  return <Pressable {...rest}>{children}</Pressable>
}
