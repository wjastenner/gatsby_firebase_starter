import styled from "styled-components"
import Box from "./box"

const Container = styled(Box)``

Container.defaultProps = {
  height: "100%",
  width: ["100%", "90%", "80%", "70%", "60%"],
}

export default Container
