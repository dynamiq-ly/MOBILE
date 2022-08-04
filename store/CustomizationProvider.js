import * as font from 'expo-font'
import { LoadingScreen } from 'screens/export'
import { _retriveValueByKey } from 'utils/asyncStorage'
import { useState, useEffect, useContext, createContext } from 'react'

const CustomFontContext = createContext()
export const _useCustomFont = () => useContext(CustomFontContext)

/**
 * @description context to provide custom font for our applications
 * @param {ReactElement} children
 * @return {FC} JSX.Element
 */

export default function CustomizationProvider({ children }) {
  const [isFontLoaded, setFontLoaded] = useState(false)

  let loadFonts = async () => {
    await font.loadAsync({
      'SF-100': require('../assets/fonts/SFPro-Thin.ttf'),
      'SF-200': require('../assets/fonts/SFPro-ExtraLight.ttf'),
      'SF-300': require('../assets/fonts/SFPro-Light.ttf'),
      'SF-400': require('../assets/fonts/SFPro-Regular.ttf'),
      'SF-500': require('../assets/fonts/SFPro-Medium.ttf'),
      'SF-600': require('../assets/fonts/SFPro-SemiBold.ttf'),
      'SF-700': require('../assets/fonts/SFPro-Bold.ttf'),
      'SF-800': require('../assets/fonts/SFPro-ExtraBold.ttf'),
      'SF-900': require('../assets/fonts/SFPro-Black.ttf'),
    })
    setFontLoaded(true)
  }

  useEffect(() => {
    return loadFonts()
  })

  if (!isFontLoaded) return <LoadingScreen />
  else return children
}
