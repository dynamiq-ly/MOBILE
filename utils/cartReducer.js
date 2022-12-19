const { _storeValueByKey } = require('./asyncStorage')

/**
 * states store
 */
export const actionState = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  INCREASE_ITEM: 'INCREASE_ITEM',
  DECREASE_ITEM: 'DECREASE_ITEM',
  CHECKOUT_ITEMS: 'CHECKOUT_ITEMS',
  CLEAR_ITEMS: 'CLEAR_ITEMS',
}

/**
 * @description card setter
 * @param {any[]} cartItems
 */
const storage = (cartItems) => {
  _storeValueByKey(
    'services',
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  )
}

/**
 * @description count how many items
 * @param {any[]} cartItems
 * @returns {any{}} {itemCount,total}
 */

export const sumItems = (cartItems) => {
  storage(cartItems)
  let itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  let total = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2)

  return { itemCount, total }
}

/**
 * @description cart reducer function on global state
 */

export const cartReducer = (state, action) => {
  switch (action.type) {
    case actionState.ADD_ITEM:
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }

    case actionState.REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      }
    case actionState.INCREASE_ITEM:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }
    case actionState.DECREASE_ITEM:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }
    case actionState.CHECKOUT_ITEMS:
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      }
    case actionState.CLEAR_ITEMS:
      return {
        cartItems: [],
        ...sumItems([]),
      }
    default:
      return state
  }
}
