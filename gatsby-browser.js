import React from "react"
import { PageProvider } from "./src/context/PageContext"
export const wrapRootElement = ({ element }) => (
  <PageProvider>{element}</PageProvider>
)