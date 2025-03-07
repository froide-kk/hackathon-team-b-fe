import { Notifications } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";

export default function Topic(){
  const handleClick = () => {
    console.log("MUI Button test")
  }
  return(
    <Container>
      <Typography variant="h4" gutterBottom>
        Topic
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
  )
}