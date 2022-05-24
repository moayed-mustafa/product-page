import React, { useState } from "react"
import * as logoSvg from "../../assets/logo.svg";
import * as avatar from "../../assets/image-avatar.png";
import * as cart from "../../assets/icon-cart.svg";
import { ActiveItem, Avatar, Container, NavItem } from "./nav-styles";
import { navData } from "./nav-data";
import { Divider } from "@mui/material";

const Navbar = () => {
  const [hoverCoor, setHoverCoor] = useState({ x: 0, y: 0, hover: false })
  const addHover = (e) => {
    console.log(window.innerWidth)
    const top = e.target.offsetTop + e.target.offsetHeight
    const left = e.target.offsetLeft + e.target.offsetWidth
    setHoverCoor({ y: left + 220, x: top + 50, hover: true })
  }

  const removeHover = () => {
    setHoverCoor({ ...hoverCoor, hover: false })
  }

  return (
    <>
    <Container >
      <Container justify="space-evenly" basis={"60%"}>
        <Container justify="space-around" basis={"30%"}>
            <img src={logoSvg.default} />
        </Container>
        <Container justify="space-around" basis={"70%"}>
            {navData.map((item) => (<NavItem onMouseEnter={addHover} onMouseLeave={removeHover} key={item}>{item}</NavItem>))}
        </Container>
      </Container>
      <Container justify="space-between" basis={"10%"}  >
        <img src={cart.default} />
          <Avatar src={avatar.default} />
      </Container>
      </Container>
      <Divider orientation="horizontal" sx={{ width: "90%", padding: "0px 0px", boxSizing: "border-box" }} />
      {hoverCoor.hover &&
        <ActiveItem coord={hoverCoor} >
          {""}
        </ActiveItem>}
    </>
  )
}

export default Navbar
