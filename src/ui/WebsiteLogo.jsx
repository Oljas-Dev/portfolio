import styled from "styled-components";
import { Link } from "react-router-dom";

import WebsitePic from "../../public/logo.png";

const Logo = styled(Link)`
  position: fixed;
  top: 2.5rem;
  left: 2.5rem;
  z-index: 50;
`;

function WebsiteLogo() {
  return (
    <Logo to="/home">
      <img src={WebsitePic} alt="logo" />
    </Logo>
  );
}

export default WebsiteLogo;
