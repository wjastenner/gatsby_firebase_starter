import styled from "styled-components"

import Text from "./typography"

export const Heading = styled(Text)``

Heading.defaultProps = {
  as: `h1`,
  variant: `h1`,
  fontWeight: `heading`,
  marginBottom: 1,
}

export const Subheading = styled(Text)``

Subheading.defaultProps = {
  as: `h2`,
  variant: `h2`,
  fontWeight: `heading`,
  marginBottom: 1,
}
