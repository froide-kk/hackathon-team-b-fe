import { Box, Container, Stack, Typography } from "@mui/material";
import NewsList from "../components/NewsList";
import { news } from "../utils/example";

export default function Bookmark() {
  return (
    <Container maxWidth="xl" sx={{ pt: 8 }}>
      <Box py={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding={2}
        >
          <Typography variant="h5">お気に入り</Typography>
        </Stack>
      </Box>
      <NewsList news={news} page="Bookmark" />
    </Container>
  );
}
