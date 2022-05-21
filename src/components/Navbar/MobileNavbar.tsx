import React from "react"
import styled from "@emotion/styled"
import Drawer from "@mui/material/Drawer";
import * as logoSvg from "../../assets/logo.svg";
import * as avatar from "../../assets/image-avatar.png";
import * as cart from "../../assets/icon-cart.svg";
import * as menu from "../../assets/icon-menu.svg";
import * as close from "../../assets/icon-close.svg";
import { Paper } from "@mui/material";

//Todo:"clean up the code, figure out the theme issue! "
const MobileNavbar = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <Container >
      <Container justify="flex-start" >
        <img src={menu.default} onClick={() => setOpen(!open)} style={{ marginTop: "4px" }} />
        <img src={logoSvg.default} />
      </Container>
      <Container justify="flex-end" >
        <img src={cart.default} style={{ padding: "0 8px 0 0 " }} />
        <img src={avatar.default} width="25px" height="25px" />
      </Container>
      <Drawer
        open={open}
        onClose={() => setOpen(!open)}
      >

        <Paper elevation={1} sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          minWidth: "250px",
          padding: "16px",
          height: "100%",
          boxSizing: "border-box"
        }}>
          <img src={close.default} width="15px" style={{ marginBottom: "25px", marginTop: "25px" }} onClick={() => setOpen(!open)} />
          <h4>Men</h4>
          <h4>Women</h4>
          <h4>About</h4>
          <h4>Contact</h4>
        </Paper>
      </Drawer>
    </Container>
  )
}

const Container = styled.div<{ justify?: string, basis?: string }>(({ justify, basis }) => ({
  display: "flex",
  padding: "8px",
  gap: "12px",
  alignItems: "center",
  ...(basis ? {
    flexBasis: basis
  } : { width: "100%", flexBasis: "auto" }),
  ...(justify ? { justifyContent: justify } : { justifyContent: "space-between" })
}));

export default MobileNavbar
