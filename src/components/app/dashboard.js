import React, { useEffect, useState } from "react"
import useFBStore from "../../hooks/useFBStore"

import SEO from "../../seo"

import Container from "../boxes/container"
import Box from "../boxes/box"
import { Heading } from "../typography/headings"
import { Title, P } from "../typography/texts"

import Layout from "../../layout"

const Dashboard = () => {
  const db = useFBStore()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (!db) return
    db.collection("posts")
      .get()
      .then(snapshot => {
        setPosts(snapshot.docs)
      })
  }, [db])
  return (
    <Layout>
      <SEO title="dashboard" />
      <Container>
        <Heading>Welcome to the dashboard!</Heading>
        {posts.map(post => {
          return (
            <Box p={3} mb={2} borderRadius="5px" bg="greyLight" key={post.id}>
              <Title>{post.data().title}</Title>
              <P>{post.data().body}</P>
            </Box>
          )
        })}
      </Container>
    </Layout>
  )
}

export default Dashboard
