import React from "react"
import styled from "@emotion/styled"
import * as logoSvg from "../../assets/logo.svg";
import * as avatar from "../../assets/image-avatar.png";
import * as cart from "../../assets/icon-cart.svg";
import { useTheme } from "@emotion/react";
import { Container } from "./nav-styles";

const Navbar = () => {
  const theme = useTheme();
  console.log({ theme })
  return (
    <Container >
      <Container justify="space-evenly" basis={"60%"}>
        <Container justify="space-around" basis={"30%"}>
          <img src={logoSvg.default} />
        </Container>
        <Container justify="space-around" basis={"70%"}>
          {/* <NavItem>collection</NavItem> */}
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </Container>
      </Container>
      <Container justify="space-between" basis={"10%"}  >
        <img src={cart.default} />
        <img src={avatar.default} width="40px" height="40px" />
      </Container>
    </Container>
  )
}


export default Navbar
