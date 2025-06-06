import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${(props) =>
    props.as === "h1" ? "3rem" :
    props.as === "h2" ? "2rem" :
    props.as === "h3" ? "2rem" :
    "1.6rem"};
    
  font-weight: ${(props) =>
    props.as === "h3" ? "500" : "600"};
`;

export default Heading;