import styled from "styled-components"
import {
  compose,
  color,
  space,
  typography,
  display,
  variant,
} from "styled-system"

const Text = styled.p`
  ${compose(color, space, typography, display)}

  /* text-transform is not included as part of the typography module in styled-system */
  text-transform: ${p => p.textTransform};

  ${variant({
    variants: {
      h1: {
        fontSize: [7, null, 8],
        lineHeight: [0.9, null, 1.2],
      },
      h2: {
        fontSize: [5, null, 7],
        lineHeight: [1.4, null, 1.25],
      },
      h3: {
        fontSize: [5, null, 6],
        lineHeight: [1.4, null, 1.33],
      },
      h4: {
        fontSize: 5,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: 3,
        lineHeight: 1.3,
      },
      h6: {
        fontSize: 2,
        lineHeight: 1.57,
      },
      p: {
        fontSize: [2, null, 4],
        lineHeight: [1.57, null, 1.5],
      },
      eighteen: {
        fontSize: 4,
        lineHeight: 1.5,
      },
      small: {
        fontSize: 1,
        lineHeight: 1.5,
      },
    },
  })}
`

Text.defaultProps = {
  textTransform: `none`,
  marginBottom: 1,
}

export default Text
