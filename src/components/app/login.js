import React, { useState } from "react"
import { navigate } from "gatsby"

import SEO from "../../seo"
import useFBAuth from "../../hooks/useFBAuth"

import Container from "../boxes/container"
import Flex from "../boxes/flex"
import Box from "../boxes/box"

import Layout from "../../layout"

const Login = () => {
  const auth = useFBAuth()
  const [details, setDetails] = useState({ logEmail: "", logPassword: "" })

  const handleSubmit = e => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(details.logEmail, details.logPassword)
      .then(cred => {
        // clear form
        // redirect
        navigate(`/app/dashboard`)
      })
  }

  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  return (
    <Layout>
      <SEO title="Login" />
      <Container>
        <form onSubmit={handleSubmit}>
          <Flex
            p="4"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Box mb="3">
                <label htmlFor="log-email">Email address</label>
                <input
                  id="log-email"
                  type="email"
                  name="logEmail"
                  value={details.logEmail}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box mb="3">
                <label htmlFor="log-password">Password</label>
                <input
                  id="log-password"
                  type="password"
                  name="logPassword"
                  value={details.logPassword}
                  onChange={handleChange}
                  required
                />
              </Box>
              <button type="submit" value="submit">
                Login
              </button>
            </Box>
          </Flex>
        </form>
      </Container>
    </Layout>
  )
}

export default Login
