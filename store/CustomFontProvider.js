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
      'SF-100': require('../assets/font2/SFPro-Thin.ttf'),
      'SF-200': require('../assets/font2/SFPro-ExtraLight.ttf'),
      'SF-300': require('../assets/font2/SFPro-Light.ttf'),
      'SF-400': require('../assets/font2/SFPro-Regular.ttf'),
      'SF-500': require('../assets/font2/SFPro-Medium.ttf'),
      'SF-600': require('../assets/font2/SFPro-Bold.ttf'),
      'SF-700': require('../assets/font2/SFPro-SemiBold.ttf'),
      'SF-800': require('../assets/font2/SFPro-ExtraBold.ttf'),
      'SF-900': require('../assets/font2/SFPro-Black.ttf'),
    })
    setFontLoaded(true)
  }

  useEffect(() => {
    return loadFonts()
  })

  if (!isFontLoaded) return <LoadingScreen />
  else return children
}
