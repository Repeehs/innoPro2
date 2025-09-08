import React, { useContext, useState, useEffect } from "react"
import api from '../api';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  async function signup(username, email, password) {
    //app.createUser(username, email, password)
  }

  async function login(username, password){

  }

  function logout() {

  }

  function resetPassword() {

  }

  function updateEmail(email) {

  }

  function updatePassword(password) {

  }

  function updateProfile(username) {

  }



  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateProfile,
  }

  return (
    <AuthContext.Provider value = {value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}