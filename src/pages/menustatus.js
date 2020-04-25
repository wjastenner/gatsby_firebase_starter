import React, { useContext, useEffect, useState } from "react"

import Layout from "../layout"
import SEO from "../seo"

import useFBStore from "../hooks/useFBStore"
import { PageContext } from "../context/PageContext"

import Box from "../components/boxes/box"
import Container from "../components/boxes/container"
import { Heading, Subheading } from "../components/typography/headings"
import { Title, P } from "../components/typography/texts"
// import { Link } from "../components/typography/links"

const SecondPage = () => {
  const db = useFBStore()
  const { menuStatus, setMenuStatus } = useContext(PageContext)
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    if (!db) return
    db.collection("contacts")
      .get()
      .then(snapshot => {
        setContacts(snapshot.docs)
      })
  }, [db])
  return (
    <Layout>
      <SEO title="Page two" />
      <Container>
        <Box bg="greyLight" p={[1, 2, 3, 4]}>
          <Heading>Menu status</Heading>
          <Subheading>
            The menu status is maintained using state management (context API).
          </Subheading>
          <Title>{`It is currently set to: ${menuStatus}`}</Title>
          <button
            onClick={() => {
              setMenuStatus(!menuStatus)
            }}
          >
            Change status
          </button>
          {/* <Link to="/" mt="10px">
            Return to home
          </Link> */}
        </Box>
        <Box bg="primary" p={[1, 2, 3, 4]}>
          <Subheading color="white">Contacts</Subheading>
          {contacts.map(contact => {
            return (
              <Box p={3} borderRadius="5px" bg="greyLightest" key={contact.id}>
                <Title>{contact.data().name}</Title>
                <P>{contact.data().body}</P>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Layout>
  )
}

export default SecondPage
