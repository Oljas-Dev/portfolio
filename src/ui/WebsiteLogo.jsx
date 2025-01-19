import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled(Link)`
  position: fixed;
  top: 2.5rem;
  left: 2.5rem;
`;

function WebsiteLogo() {
  return (
    <Logo to="/home">
      <img src="../public/logo.png" alt="logo" />
    </Logo>
  );
}

export default WebsiteLogo;
