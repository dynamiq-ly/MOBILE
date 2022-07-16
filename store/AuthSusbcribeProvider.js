import { useState, useEffect, useContext, createContext } from 'react'

const AuthContext = createContext()
export const __auth = () => useContext(AuthContext)

/**
 * @description context to provide auth system for our applications
 * @param {ReactElement} children
 * @return {FC} JSX.Element
 */

export default function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(true)
  const [subscribedUser] = useState({ ...user })

  const login = ({ email, password }) => {
    if (
      email === subscribedUser.email &&
      password === subscribedUser.password
    ) {
      console.log('logged')
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }

  const logout = () => {
    setLoggedIn(false)
  }

  const functions = {
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, subscribedUser, ...functions }}>
      {children}
    </AuthContext.Provider>
  )
}

const user = {
  id: 1,
  first_name: 'nadine',
  last_name: 'breaty',
  gender: 'female',
  profile_image:
    'https://pbs.twimg.com/media/EIug-B3UwAAAwrz?format=jpg&name=large',
  hotel_stay: {
    room_floor: 'F2',
    room_number: 250,
    hotel_name: 'chiraton hotel group',
    checkin: '05/07/2022',
    checkout: '12/08/2022',
  },
  email: 'nadine@aol.du',
  password: 'nadineaol',
}
