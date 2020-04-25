import React, { useContext } from "react"

import Layout from "../layout"
import SEO from "../seo"

import { PageContext } from "../context/PageContext"

import Container from "../components/boxes/container"
import Box from "../components/boxes/box"
import { Heading, Subheading } from "../components/typography/headings"
import { Title } from "../components/typography/texts"
// import { Link } from "../components/typography/links"

const Index = () => {
  const { menuStatus, setMenuStatus } = useContext(PageContext)

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Box bg="greyLight" p={[1, 2, 3, 4]}>
          <Heading>This is a heading</Heading>
          <Subheading>This is a subheading</Subheading>
          <Title>{`The menu is set to: ${menuStatus}`}</Title>
          <button
            onClick={() => {
              setMenuStatus(!menuStatus)
            }}
          >
            Set menu
          </button>
          {/* <P>
            View the same menu status on another page by clicking{" "}
            <span>
              <Link mt="10px" to="/menustatus">
                here!
              </Link>
            </span>
          </P> */}
        </Box>
      </Container>
    </Layout>
  )
}

export default Index
