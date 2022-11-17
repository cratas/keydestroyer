import Box from "@mui/material/Box";

const Index = ({ setSelectedTheme }) => {
  console.log(setSelectedTheme);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
      }}
    >
      Hello word
    </Box>
  );
};

export default Index;
