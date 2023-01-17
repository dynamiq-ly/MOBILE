import { useState, useEffect, useContext, createContext } from 'react'
import * as t from 'expo-localization'

const LocalizationContext = createContext()
export const __t = () => useContext(LocalizationContext)

/**
 * @description context to provide auth system for our applications
 * @param {ReactElement} children
 * @return {FC} JSX.Element
 */

export default function LocalizationProvider({ children }) {
  const [local, setLocal] = useState(t.locale.split('-')[0])

  const changeLangauge = (value) => setLocal(value)

  return (
    <LocalizationContext.Provider value={{ local, changeLangauge }}>
      {children}
    </LocalizationContext.Provider>
  )
}
