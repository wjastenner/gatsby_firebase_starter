import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import "./style/reset.css"
import theme from "./gatsby-plugin-theme-ui/index"
import GlobalStyle from "./style/globalStyle"

import Header from "./components/ui/header"

const Main = styled.main`
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
