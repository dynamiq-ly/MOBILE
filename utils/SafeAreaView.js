import { StatusBar } from 'expo-status-bar'
import { Container, SafeArewContainer } from 'styles/app.module'

/**
 * @param0 {FC} children
 * @param1 {string} mode
 * @param2 {boolean} statusBar
 */

export default function SafeAreaView({
  children,
  mode = 'dark',
  statusBar = false,
  ...rest
}) {
  return (
    <SafeArewContainer {...rest}>
      <StatusBar style={mode} hidden={statusBar} />
      <Container>{children}</Container>
    </SafeArewContainer>
  )
}
