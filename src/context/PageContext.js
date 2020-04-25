import React, { useState, useEffect, createContext } from "react"
import useFBAuth from "../hooks/useFBAuth"

const defaultState = {
  menuStatus: false,
  setMenuStatus: () => {},
  user: { status: "", displayName: "" },
  setUser: () => {},
}

export const PageContext = createContext(defaultState)

export const PageProvider = props => {
  const auth = useFBAuth()
  const [menuStatus, setMenuStatus] = useState(false)
  const [user, setUser] = useState({ status: "", displayName: "" })

  const content = {
    menuStatus,
    setMenuStatus,
    user,
  }

  useEffect(() => {
    if (!auth) return
    auth.onAuthStateChanged(cred => {
      if (cred) {
        setUser({ ...user, status: "loggedIn", displayName: cred.displayName })
      } else {
        setUser({ ...user, status: "loggedOut", displayName: "" })
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <PageContext.Provider value={content}>
      {props.children}
    </PageContext.Provider>
  )
}
