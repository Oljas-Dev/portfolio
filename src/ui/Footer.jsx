import styled from "styled-components";
import References from "./References";

const StyledFooter = styled.div`
  display: flex;
  justify-items: end;

  position: fixed;
  right: 5rem;
  bottom: 2.5rem;

  @media only screen and (max-width: 62.5em) {
    right: 4rem;
    bottom: 2rem;
  }

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <References />
    </StyledFooter>
  );
}

export default Footer;
