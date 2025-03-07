import { Notifications } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";

function App() {
  const handleClick = () => {
    console.log("MUI Button test")
  }
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        oshiel
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        クリック
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <Notifications/>
      </Button>
    </Container>
  );
}

export default App;