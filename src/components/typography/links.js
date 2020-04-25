import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"
import { compose, color, space, typography, display } from "styled-system"
import Flex from "../boxes/flex"

const StyledGatsbyLink = styled(GatsbyLink)`
  text-decoration: ${p => p.textDecoration};
  ${compose(color, space, typography, display)}
`

const activeFlex = css`
  background-color: ${p => p.theme.colors.black};
  a {
    color: ${p => p.theme.colors.white};
  }
`

const Root = styled(Flex)`
  ${p => p.active && activeFlex};
`

const StyledA = styled.a`
  text-decoration: ${p => p.textDecoration};
  ${compose(color, space, typography, display)}
`

export const NavLink = ({ to, color, children, ...rest }) => {
  const active = () => {
    if (typeof window !== "undefined") {
      const navPaths = [to, `${to}/`]
      if (navPaths.includes(window.location.pathname)) {
        return true
      } else {
        return false
      }
    }
  }
  return (
    <Root active={active()} {...rest}>
      <StyledGatsbyLink to={to} color={color}>
        {children}
      </StyledGatsbyLink>
    </Root>
  )
}

export const Link = ({ to, color, children, ...rest }) => {
  return (
    <StyledGatsbyLink to={to} color={color}>
      {children}
    </StyledGatsbyLink>
  )
}

export const A = ({ children, action, ...rest }) => {
  return (
    <StyledA
      href="#"
      onClick={e => {
        e.preventDefault()
        action()
      }}
      {...rest}
    >
      {children}
    </StyledA>
  )
}

StyledGatsbyLink.defaultProps = {
  textDecoration: "none",
}

Root.defaultProps = {
  alignItems: "center",
  px: 4,
  display: "inline-flex",
  height: "100%",
}

A.defaultProps = {
  textDecoration: "none",
  alignItems: "center",
  px: 4,
  display: "inline-flex",
  height: "100%",
}
