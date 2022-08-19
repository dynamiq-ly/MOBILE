import axios from 'axios'

// export const baseUrl = 'https://smarhotel.herokuapp.com'
export const baseUrl = 'https://ddc2-102-157-201-6.eu.ngrok.io/'

/**
 * @description create a default instance for axios so we can use it in our components
 * where we won't need to specify the domain url or getting cross origin requests blocked
 */
export const __query = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
})
