import styled from "@emotion/styled";
import { grid } from "styled-system";

import Box from "../boxes/box";

const GridItem = styled(Box)`
  ${grid}
`;

GridItem.defaultProps = {};

export default GridItem;
