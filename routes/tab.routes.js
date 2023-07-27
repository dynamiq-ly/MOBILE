/**
 * @this READ BEFORE USING
 * the route will define each service in the app with its respective routes
 * @field {Object} each service will be defined as a key in the object
 * @exports {Object} the routes object with each navigation type as array and its respective routes as element of the array
 */

import { HomeLandingRoutesConfig } from '@/page/[main]/routes'
import { SearchRoutesConfig } from '@/page/[search]/routes'
import { WeatherRoutesConfig } from '@/page/[weather]/routes'
import { NotificationsRoutesConfig } from '@/page/[notification]/routes'
import { BookmarkRoutesConfig } from '@/page/[bookmark]/routes'

/* [TAB] */
export const tab = [...HomeLandingRoutesConfig, ...BookmarkRoutesConfig, ...SearchRoutesConfig, , ...NotificationsRoutesConfig, ...WeatherRoutesConfig]
