import * as font from 'expo-font'
import { useState, useEffect } from 'react'
import { StyledText, StyledLoadFont } from 'styles/text.module'

/**
 * @param0 {string} content
 * @param1 {number} size
 * @param2 {number} font
 * @param3 { "white" | "gray" } color
 * @param4 {string} align
 * @param5 {boolean} up
 */
export default function Text({
  content,
  size,
  weight,
  color,
  align,
  up = false,
}) {
  const [isLoaded, setMounted] = useState(false)

  let loadFonts = async () => {
    await font.loadAsync({
      'inter-100': require('assets/fonts/Inter-Thin.ttf'),
      'inter-200': require('assets/fonts/Inter-ExtraLight.ttf'),
      'inter-300': require('assets/fonts/Inter-Light.ttf'),
      'inter-400': require('assets/fonts/Inter-Regular.ttf'),
      'inter-500': require('assets/fonts/Inter-Medium.ttf'),
      'inter-600': require('assets/fonts/Inter-SemiBold.ttf'),
      'inter-700': require('assets/fonts/Inter-Bold.ttf'),
      'inter-800': require('assets/fonts/Inter-ExtraBold.ttf'),
      'inter-900': require('assets/fonts/Inter-Black.ttf'),
    })
    setMounted(true)
  }

  useEffect(() => {
    return loadFonts()
  })

  if (!isLoaded) return <StyledLoadFont scale={size} />
  else
    return (
      <StyledText
        scale={size}
        font={weight}
        color={color}
        up={up}
        align={align}>
        {content}
      </StyledText>
    )
}
