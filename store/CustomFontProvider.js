import * as font from 'expo-font'
import { LoadingScreen } from 'screens/export'
import { useState, useEffect, useContext, createContext } from 'react'

const CustomFontContext = createContext()
export const _useCustomFont = () => useContext(CustomFontContext)

/**
 * @description context to provide custom font for our applications
 * @param {ReactElement} children
 * @return {FC} JSX.Element
 */

export default function CustomFontProvider({ children }) {
  const [isFontLoaded, setFontLoaded] = useState(false)

  let loadFonts = async () => {
    await font.loadAsync({
      'inter-100': require('../assets/fonts/Inter-Thin.ttf'),
      'inter-200': require('../assets/fonts/Inter-ExtraLight.ttf'),
      'inter-300': require('../assets/fonts/Inter-Light.ttf'),
      'inter-400': require('../assets/fonts/Inter-Regular.ttf'),
      'inter-500': require('../assets/fonts/Inter-Medium.ttf'),
      'inter-600': require('../assets/fonts/Inter-SemiBold.ttf'),
      'inter-700': require('../assets/fonts/Inter-Bold.ttf'),
      'inter-800': require('../assets/fonts/Inter-ExtraBold.ttf'),
      'inter-900': require('../assets/fonts/Inter-Black.ttf'),
    })
    setFontLoaded(true)
  }

  useEffect(() => {
    return loadFonts()
  })

  if (!isFontLoaded) return <LoadingScreen />
  else return children
}
