import styled from "styled-components"
import { Link } from "gatsby"

import Text from "./typography"

export const Title = styled(Text)``

Title.defaultProps = {
  as: `h3`,
  variant: `h3`,
}

export const P = styled(Text)``

P.defaultProps = {
  as: `p`,
  variant: `p`,
}

export const A = styled(Link)`
  text-decoration: none;
`
