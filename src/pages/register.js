import React, { useState } from "react"
import { navigate } from "gatsby"

import Layout from "../layout"
import SEO from "../seo"
import useFBAuth from "../hooks/useFBAuth"

import Container from "../components/boxes/container"
import Flex from "../components/boxes/flex"
import Box from "../components/boxes/box"

const Register = () => {
  const auth = useFBAuth()
  const [details, setDetails] = useState({
    regFirst: "",
    regLast: "",
    regEmail: "",
    regPassword: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(details.regEmail, details.regPassword)
      .then(cred => {
        cred.user.updateProfile({
          displayName: details.regFirst,
        })
        navigate("/app")
      })
  }

  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  return (
    <Layout>
      <SEO title="Register" />
      <Container>
        <Flex p="4" flexWrap="wrap" alignItems="center" justifyContent="center">
          <form onSubmit={handleSubmit}>
            <Box>
              <Box mb="3">
                <label htmlFor="register-first">First name</label>
                <input
                  id="register-first"
                  type="text"
                  name="regFirst"
                  value={details.regFirst}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box mb="3">
                <label htmlFor="register-last">Last name</label>
                <input
                  id="register-last"
                  type="text"
                  name="regLast"
                  value={details.regLast}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box mb="3">
                <label htmlFor="register-email">Email address</label>
                <input
                  id="register-email"
                  type="email"
                  name="regEmail"
                  value={details.regEmail}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box mb="3">
                <label htmlFor="register-password">Password</label>
                <input
                  id="register-password"
                  type="password"
                  name="regPassword"
                  value={details.regPassword}
                  onChange={handleChange}
                  required
                />
              </Box>
              <button type="submit" value="submit">
                Sign up
              </button>
            </Box>
          </form>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Register
