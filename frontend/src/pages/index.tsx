import Layout from "../components/Layout";
import { Box } from "@mui/system";
import TestSection from "../components/TestSection";

const Index = ({ setSelectedTheme }) => {
  console.log(setSelectedTheme);

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "grey",
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
