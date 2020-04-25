import styled from "styled-components";
import { grid } from "styled-system";

import Box from "../boxes/box";

const Grid = styled(Box)`
  ${grid}
`;

Grid.defaultProps = {
  display: `grid`,
  gridGap: `gutterL`,
  gridTemplateColumns: [`1fr`, `1fr 1fr`],
};

export default Grid;