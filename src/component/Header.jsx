import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import Logo from "../image/logo.jpg";

const StyleHeader = styled(AppBar)`
  background: black;
`;

const Header = () => {
  return (
    <StyleHeader position="static">
      <Toolbar>
        <img src={Logo} alt="logo" style={{ width: 250 }} />
      </Toolbar>
    </StyleHeader>
  );
};

export default Header;
