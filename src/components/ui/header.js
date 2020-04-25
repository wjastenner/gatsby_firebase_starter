import React, { useContext, useState } from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import useFBAuth from "../../hooks/useFBAuth"
import { PageContext } from "../../context/PageContext"

import { GatsbyLink, A } from "../typography/newlinks"
import Flex from "../boxes/flex"
import Box from "../boxes/box"
import Container from "../boxes/container"

const Root = styled.header`
  background-color: ${p => p.theme.colors.white};
  height: 60px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${p => p.theme.colors.greyLight};
`

const DropdownContent = styled(Box)`
  transition: max-height 0.25s ease-in-out;
`

const HeaderLink = styled(GatsbyLink)`
  &:hover {
    color: ${p => p.theme.colors.greyLight};
  }
  &.active {
    background-color: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.white};
  }
`

const DropdownLink = styled(GatsbyLink)`
  border-radius: 3px;
  &.active {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
  }
`

const Header = ({ siteTitle }) => {
  const auth = useFBAuth()
  const { user } = useContext(PageContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Root>
      <Container>
        <Flex height="100%" justifyContent="space-between">
          <Flex>
            <HeaderLink to="/" activeClassName="active" px={2}>
              {siteTitle}
            </HeaderLink>
            <HeaderLink to="/menustatus" activeClassName="active" px={2}>
              Menu status
            </HeaderLink>
          </Flex>
          <Flex>
            {user.status === "loggedIn" && (
              <>
                <Box position="relative">
                  <A
                    height="60px"
                    onClick={e => {
                      e.preventDefault()
                      setIsOpen(!isOpen)
                    }}
                  >
                    {user.displayName}
                  </A>
                  <DropdownContent
                    position="absolute"
                    overflow="hidden"
                    right="0"
                    maxHeight={isOpen ? "300px" : "0px"}
                    bg="primary"
                    borderRadius="0px 0px 5px 3px"
                  >
                    <Box p={2}>
                      <DropdownLink
                        to="/app/dashboard"
                        activeClassName="active"
                        p={2}
                        color="black"
                      >
                        Dashboard
                      </DropdownLink>
                      <DropdownLink
                        to="/app/create"
                        activeClassName="active"
                        p={2}
                        color="black"
                      >
                        Create post
                      </DropdownLink>
                      <A
                        href="#"
                        onClick={e => {
                          e.preventDefault()
                          auth.signOut().then(() => {
                            navigate("/")
                          })
                        }}
                        color="black"
                        p={2}
                      >
                        Logout
                      </A>
                    </Box>
                  </DropdownContent>
                </Box>
              </>
            )}
            {user.status === "loggedOut" && (
              <>
                <HeaderLink to="/register" activeClassName="active" px={2}>
                  Register
                </HeaderLink>
                <HeaderLink to="/app/login" activeClassName="active" px={2}>
                  Login
                </HeaderLink>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Root>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
