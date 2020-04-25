import styled from "styled-components";
import {
  compose,
  space,
  color,
  layout,
  border,
  position,
  shadow,
  typography,
} from "styled-system";

const Box = styled.div`
  ${compose(space, color, layout, border, position, shadow, typography)}
`;

export default Box;