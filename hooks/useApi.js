import axios from 'axios'

// export const baseUrl = 'http://bassemb5.sg-host.com/'
export const baseUrl = 'https://dfe2-196-235-55-203.eu.ngrok.io/'

/**
 * @description create a default instance for axios so we can use it in our components
 * where we won't need to specify the domain url or getting cross origin requests blocked
 */
export const __query = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
})
