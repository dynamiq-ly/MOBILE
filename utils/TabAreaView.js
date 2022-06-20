import { StatusBar } from 'expo-status-bar'
import { Container } from 'styles/app.module'

/**
 * @param0 {FC} children
 * @param1 {string} mode
 * @param2 {boolean} statusBar
 */

export default function AreaView({
  children,
  mode = 'dark',
  statusBar = false,
  ...rest
}) {
  return (
    <Container {...rest} automaticallyAdjustKeyboardInsets>
      <StatusBar style={mode} hidden={statusBar} />
      {children}
    </Container>
  )
}
