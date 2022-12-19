import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  useContext,
  createContext,
  useReducer,
  useLayoutEffect,
  useState,
} from 'react'
import {
  _retriveValueByKey,
  _storeValueByKey,
  _removeValueByKey,
} from '~/utils/asyncStorage'

// cart reducer imports
import { actionState, cartReducer, sumItems } from 'utils/cartReducer'

/* initial store with context hook */
const CartContext = createContext()
export const __cart = () => useContext(CartContext)

export default function CartManagerProvider({ children }) {
  const [storage, setStorage] = useState([])

  // const initialStore = {
  //   carItems: storage,
  //   ...sumItems(storage),
  //   checkout: false,
  // }

  // const [state, dispatch] = useReducer(cartReducer, initialStore)

  useLayoutEffect(() => {
    const data = AsyncStorage.getItem(`@services`)
    setStorage(data)
  }, [])

  console.log(storage)

  const context = {}
  return (
    <CartContext.Provider value={{ ...context }}>
      {children}
    </CartContext.Provider>
  )
}
