import { Link } from "gatsby"
import styled, { css } from "styled-components"
import {
  compose,
  space,
  color,
  layout,
  border,
  position,
  shadow,
  typography,
} from "styled-system"

const Root = css`
  ${compose(space, color, layout, border, position, shadow, typography)}
  text-decoration: none;
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
`

export const A = styled.a`
  ${Root}
`

A.defaultProps = {
  color: "black",
}

export const GatsbyLink = styled(Link)`
  ${Root}
`

GatsbyLink.defaultProps = {
  color: "black",
}
