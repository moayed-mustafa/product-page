import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import styled from "styled-components";
import Navbar from "src/components/Navbar/Navbar";
import MobileNavbar from "src/components/Navbar/MobileNavbar";
import { useMediaQuery } from "@mui/material";

export interface IChildren {
  children: JSX.Element
};

const Layout = ({ children }: IChildren) => {
  const mobile = useMediaQuery('(max-width:715px)');
  return (
    <CssBaseline>
      <Container >
        {mobile ? <MobileNavbar /> : <Navbar />}
        {children}
      </Container>
    </CssBaseline >

  );
}

const Container = styled.div(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: `${theme.space[4]}, ${theme.space[7]}`,
  "@media (max-width:414px)": {
    alignItems: "start",
  },
}))

export default Layout;
