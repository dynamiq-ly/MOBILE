import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * @description Sets the value for a key and invokes
 * a callback upon completion.
 * @param0 {string} key
 */
export const _storeValueByKey = async (key, value) => {
  try {
    await AsyncStorage.setItem(`@${key}`, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}

/**
 * @description Fetches an item for a key and invokes
 * a callback upon completion. Returns a Promise object.
 * @param0 {string} key
 */
export const _retriveValueByKey = async (key) => {
  return await AsyncStorage.getItem(`@${key}`, (_, result) => result)
}

/**
 * @description Removes an item for a key and invokes
 * a callback upon completion.
 * @param0 {string} key
 */
export const _removeValueByKey = async (key) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`)
    if (value !== null) {
      await AsyncStorage.removeItem(`@${key}`)
    }
  } catch (error) {
    console.log(error)
  }
}
