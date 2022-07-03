import { Dimensions, PixelRatio, Platform } from 'react-native'

/**
 * deconstructing the width and height of the device
 * using Dimensions from react-native package
 */
const { width, height } = Dimensions.get('window')

const WIDTH_BASE_SCALE = width / 375
const HEIGHT_BASE_SCALE = height / 812

/**
 * Using the base scale we are now able to
 * create a function that calculates the best size suited.
 * @param {number} size
 * @param {base} string
 * @returns {number}
 */

export function normalize(size, base = 'width') {
  // const newSize = base === 'height' ? size * HEIGHT_BASE_SCALE : size * WIDTH_BASE_SCALE
  const newSize = base === 'height' ? size : size * WIDTH_BASE_SCALE
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

/**
 * Using tje normalize function we are now able to create and export
 * functions that can be fed the size desired.
 * @param {number} size
 * @returns {number}
 */

//for width pixel
const widthPixel = (size) => {
  return normalize(size, 'width')
}
//for height pixel
const heightPixel = (size) => {
  return normalize(size, 'height')
}
//for font pixel
const fontPixel = (size) => {
  return heightPixel(size)
}
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size) => {
  return heightPixel(size)
}
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size) => {
  return widthPixel(size)
}

export {
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
}
