import axios from 'axios'
import { variables } from '@/constant/variables'

export const useFetch = axios.create({
  baseURL: variables.API_URL,
  withCredentials: true,
})
