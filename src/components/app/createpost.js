import React, { useState } from "react"

import SEO from "../../seo"

import Container from "../boxes/container"
import Flex from "../boxes/flex"
import Box from "../boxes/box"

import Layout from "../../layout"

const Login = () => {
  const [post, setPost] = useState({ postTitle: "", postBody: "" })

  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitting")
  }

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  return (
    <Layout>
      <SEO title="Create post" />
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
                <label htmlFor="post-title">Title</label>
                <input
                  id="post-title"
                  type="text"
                  name="postTitle"
                  value={post.postTitle}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box mb="3">
                <label htmlFor="post-body">Body</label>
                <textarea
                  id="post-body"
                  type="text"
                  name="postBody"
                  value={post.postBody}
                  onChange={handleChange}
                  required
                />
              </Box>
              <button type="submit" value="submit">
                Submit
              </button>
            </Box>
          </Flex>
        </form>
      </Container>
    </Layout>
  )
}

export default Login
