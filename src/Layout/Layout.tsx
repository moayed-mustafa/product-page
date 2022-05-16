import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import styled from "@emotion/styled";

export interface IChildren {
  children: JSX.Element
};

const Layout = ({ children }: IChildren) => {
  return (
    <CssBaseline>
      <Container >
        {children}
      </Container>
    </CssBaseline >

  );
}

const Container = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "4px 16px",
  "@media (max-width:414px)": {
    alignItems: "start",
  },

})
export default Layout;

