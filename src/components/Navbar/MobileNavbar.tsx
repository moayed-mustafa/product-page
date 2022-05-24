import React from "react"
import Drawer from "@mui/material/Drawer";
import * as logoSvg from "../../assets/logo.svg";
import * as avatar from "../../assets/image-avatar.png";
import * as cart from "../../assets/icon-cart.svg";
import * as menu from "../../assets/icon-menu.svg";
import * as close from "../../assets/icon-close.svg";
import { Paper } from "@mui/material";
import { Container, NavItem } from "./nav-styles";
import { navData } from "./nav-data";

const MobileNavbar = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <Container>
      <Container justify="flex-start">
        <img src={menu.default} onClick={() => setOpen(!open)} style={{ marginTop: "4px" }} />
        <img src={logoSvg.default} />
      </Container>
      <Container justify="flex-end">
        <img src={cart.default} style={{ padding: "0 8px 0 0 " }} />
        <img src={avatar.default} width="25px" height="25px" />
      </Container>
      <Drawer open={open} onClose={() => setOpen(!open)}>
        <Paper elevation={1} sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          minWidth: "250px",
          padding: "16px",
          height: "100%",
          boxSizing: "border-box"
        }}>
          <img src={close.default} width="15px" style={{ margin: "25px 0" }} onClick={() => setOpen(!open)} />
          {navData.map((item) => (<NavItem key={item}>{item}</NavItem>))}
        </Paper>
      </Drawer>
    </Container>
  )
}

export default MobileNavbar
