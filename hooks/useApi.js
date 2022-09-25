import axios from 'axios'

// export const baseUrl = 'https://smarhotel.herokuapp.com'
export const baseUrl = 'https://c040-160-157-151-83.eu.ngrok.io'

/**
 * @description create a default instance for axios so we can use it in our components
 * where we won't need to specify the domain url or getting cross origin requests blocked
 */
export const __query = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
})
