import axios from 'axios'

export const baseUrl = 'https://api.smarhotel.com/'
// export const baseUrl = 'https://21ef-196-235-89-197.eu.ngrok.io/'

/**
 * @description create a default instance for axios so we can use it in our components
 * where we won't need to specify the domain url or getting cross origin requests blocked
 */
export const __query = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
})
