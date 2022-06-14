import { useCallback, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Container } from 'styles/app.module'
import { RefreshControl } from 'react-native'

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
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait().then(() => setRefreshing(false))
  }, [])

  return (
    <Container
      {...rest}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <StatusBar style={mode} hidden={statusBar} />
      {children}
    </Container>
  )
}

const wait = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000))
}
