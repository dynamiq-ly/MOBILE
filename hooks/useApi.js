import axios from 'axios'

// export const baseUrl = 'https://smarhotel.herokuapp.com'
export const baseUrl =
  'https://c100-2c0f-4280-30-4cf4-38f2-cde5-3e2b-88a2.eu.ngrok.io/'

/**
 * @description create a default instance for axios so we can use it in our components
 * where we won't need to specify the domain url or getting cross origin requests blocked
 */
export const __query = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
})
