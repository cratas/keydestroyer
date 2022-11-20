import Layout from "../components/Layout";
import { Box } from "@mui/system";
import TestSection from "../components/TestSection";
import { setCurrentTheme } from "../redux/currentThemeSlice";
import { useSelector } from "react-redux";

const Index = ({ setSelectedTheme }) => {
  console.log(setSelectedTheme);

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "10rem",
          my: 2,
          borderRadius: 2,
        }}
      />
      <TestSection />
    </Layout>
  );
};

export default Index;
