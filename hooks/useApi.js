import axios from 'axios'

// export const baseUrl = 'https://bd50-196-226-249-128.eu.ngrok.io/'
export const baseUrl = 'https://ee17-160-157-128-227.eu.ngrok.io/'

/**
 * @description create a default instance for axios so we can use it in our components
 * where we won't need to specify the domain url or getting cross origin requests blocked
 */
export const __query = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
})
