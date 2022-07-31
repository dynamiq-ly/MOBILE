import axios from 'axios'

// export const baseUrl = 'https://smarhotel.herokuapp.com'
export const baseUrl =
  'https://182a-2c0f-4280-30-4cf4-7805-33f1-f9ce-a851.eu.ngrok.io'

/**
 * @description create a default instance for axios so we can use it in our components
 * where we won't need to specify the domain url or getting cross origin requests blocked
 */
export const __query = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
})
