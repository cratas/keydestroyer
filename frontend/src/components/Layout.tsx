import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {/* <Divider
        sx={{
          backgroundColor: "black",
          height: "0.2rem",
          borderRadius: "1rem",
        }}
      /> */}

      {children}
    </Container>
  );
};

export default Layout;
