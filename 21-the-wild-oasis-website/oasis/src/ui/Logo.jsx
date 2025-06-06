import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

function Logo() {
  return (
    <StyledLogo>
      <img className="m-auto mt-5 mb-10 w-50" src="/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
