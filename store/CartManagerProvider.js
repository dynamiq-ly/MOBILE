import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  useContext,
  createContext,
  useReducer,
  useState,
  useLayoutEffect,
} from 'react'

// cart reducer imports
import { actionState, cartReducer, sumItems } from 'utils/cartReducer'

/* initial store with context hook */
const CartContext = createContext()
export const __cart = () => useContext(CartContext)

export default function CartManagerProvider({ children }) {
  const [storage, setStorage] = useState([])

  useLayoutEffect(() => {
    // AsyncStorage.setItem('@services', JSON.stringify([{ hello: 'gretting' }]))
    AsyncStorage.getItem('@services').then((res) => setStorage(JSON.parse(res)))
    // AsyncStorage.removeItem('@services')
  }, [])

  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  })

  const INCREASE_ITEM = (payload) => {
    dispatch({ type: actionState.INCREASE_ITEM, payload })
  }

  const DECREASE_ITEM = (payload) => {
    dispatch({ type: actionState.DECREASE_ITEM, payload })
  }

  const ADD_ITEM = (payload) => {
    dispatch({ type: actionState.ADD_ITEM, payload })
  }

  const REMOVE_ITEM = (payload) => {
    dispatch({ type: actionState.REMOVE_ITEM, payload })
  }

  const EMPTY_CART = () => {
    dispatch({ type: actionState.CLEAR_ITEMS })
  }

  console.log('storage => ', storage)

  const context = {
    INCREASE_ITEM,
    DECREASE_ITEM,
    ADD_ITEM,
    REMOVE_ITEM,
    REMOVE_ITEM,
  }
  return (
    <CartContext.Provider value={{ ...context, ...state }}>
      {children}
    </CartContext.Provider>
  )
}
